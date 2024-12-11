// controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');
// const crypto = require('crypto');

const generateTokenAndSetCookie = require('../utils/generateTokenAndSetCookie')

const { sendVerificationEmail, sendWelcomeEmail } = require('../mailtrap/Email');
const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Validation checks
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    try {
        // Check if user already exists 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();


        // Create a new user instance and save to the database
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
        });
        await newUser.save();

        // jwt
		generateTokenAndSetCookie(res, newUser._id);
        await sendVerificationEmail(newUser.email, verificationToken);

        res.status(201).json({
            success:true,
             message: 'User registered successfully.',
             user:{
                ...newUser._doc,
                password:undefined,
             },
             });
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

const verifyEmail = async (req, res) => {
    const { code } = req.body;
	try {
		const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		user.isVerified = true;
		user.verificationToken = undefined;
		user.verificationTokenExpiresAt = undefined;
		await user.save();

		await sendWelcomeEmail(user.email, user.name);

		res.status(200).json({
			success: true,
			message: "Email verified successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};

module.exports = {verifyEmail, signup}