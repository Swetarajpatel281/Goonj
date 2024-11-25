import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signupUser } from '../Routes/Auth';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [emailVerified, setEmailVerified] = useState(false);
    const [isVerificationSent, setIsVerificationSent] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        verifyEmail();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        if (!emailVerified) {
            setError("Please verify your email first.");
            return;
        }

        try {
            const response = await signupUser(formData);
            console.log("User signed up:", response);
            alert("Sign up successful!");
            navigate("/login");
        } catch (error) {
            console.error("Signup failed:", error);
            setError("Sign up failed. Please try again.");
        }
    };

    const handleSendVerification = async () => {
        try {
            await axios.post("http://localhost:8000/send-verification-email", { email: formData.email });
            alert("Verification email sent! Please check your inbox.");
            setIsVerificationSent(true);
        } catch (error) {
            setError("Failed to send verification email.");
        }
    };

    const verifyEmail = async () => {
        try {
            const params = new URLSearchParams(window.location.search);
            const token = params.get("token");

            if (token) {
                const response = await axios.get(`http://localhost:8000/verify-email?token=${token}`);
                alert(response.data.message);
                setEmailVerified(true);
                setIsVerificationSent(false);
                navigate("/signup");
            }
        } catch (error) {
            setError("Email verification failed.");
        }
    };

    return (
        <div className="bg-gradient-to-b from-white to-green-700 min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[500px] shadow-md bg-white rounded-lg">
                <div className="px-6 py-4 mt-4">
                    <form className="px-4 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={handleSendVerification}
                                className="mt-2 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                                disabled={isVerificationSent}
                            >
                                {isVerificationSent ? "Verification Sent" : "Send Verification Email"}
                            </button>
                        </div>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="**************"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="******************"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6 text-center">
                            <button
                                type="submit"
                                className={`w-full px-4 py-2 font-bold text-white rounded-full ${emailVerified ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"}`}
                                disabled={!emailVerified}
                            >
                                Sign Up
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="text-center">
                            <Link to="" className="inline-block text-md text-blue-600 align-baseline hover:text-blue-800">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center">
                            Already have an account?
                            <Link to="/login" className="inline-block text-md text-blue-600 align-baseline hover:text-blue-800">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
