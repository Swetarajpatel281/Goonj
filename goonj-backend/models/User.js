
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
         type: String,
          required: true },
    lastName: {
         type: String,
          required: true },
    email: {
        type: String,
        required: true,
        unique: true },
        lastLogin: {
			type: Date,
			default: Date.now,
		},
        password:{
            type:String,
            required:true,
        },
		isVerified: {
			type: Boolean,
			default: false,
		},
        verificationToken: String,
		verificationTokenExpiresAt: Date,
        date: {
            type: Date,
            default: Date.now,
        }
},{timestamps:true});


module.exports = mongoose.model('User', userSchema);