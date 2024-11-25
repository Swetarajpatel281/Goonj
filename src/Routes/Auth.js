import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000/api'; // Fallback to localhost if env variable is not set

// Signup function
export const signupUser = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/signup`, userData, {
            headers: { 'Content-Type': 'application/json' }
        });
        
        console.log('Signup successful:', response.data);
        return response.data;  // axios automatically parses JSON

    } catch (error) {
        // Log the error for debugging
        console.error('Error during signup:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Signup failed');
    }
};


// Login function
// export const loginUser = async (credentials) => {
//     try {
//         const response = await axios.post(`${BACKEND_URL}/login`, credentials, {
//             headers: { 'Content-Type': 'application/json' }
//         });
        
//         if (response.status === 200) {
//             // Optionally, handle successful login response, such as storing tokens
//             console.log('Login successful:', response.data);
//             return response.data;
//         }

//         throw new Error('Login failed, please try again');
//     } catch (error) {
//         console.error('Error during login:', error.response?.data || error.message);
//         throw new Error(error.response?.data?.message || 'Login failed');
//     }
// };
