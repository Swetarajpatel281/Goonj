import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
        } else {
            console.log('Form Submitted:', formData);

            const dataResponse = await fetch('http://localhost:3000/api/signup', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const dataApi = await dataResponse.json();
            console.log("data", dataApi);
        }
    };

    return (
        <div className=" bg-gradient-to-b from-white to-green-700 min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[500px] shadow-md bg-white rounded-lg">
                <div className="px-6 py-4 mt-4">
                    <form className="px-4 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black" htmlFor="firstName">
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
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="**************"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <p className="text-xs italic text-red-500">Please choose a password.</p>
                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black" htmlFor="confirmPassword">
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
                                className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Register Account
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="text-center">
                            <Link
                                to={""}
                                className="inline-block text-md text-blue-600 dark:text-blue-600 align-baseline hover:text-blue-800"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center">
                            Already have an account?
                            <Link
                                to={"/login"}
                                className="inline-block text-md text-blue-600 dark:text-blue-600 align-baseline hover:text-blue-800"
                            >
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
