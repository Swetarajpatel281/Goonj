import { configureStore, createSlice } from '@reduxjs/toolkit';
import { create } from 'zustand';
import axios from 'axios'; // Use ES6 import syntax for consistency

// Redux Slice for Sidebar
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { isOpen: false },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
  },
});

// Exporting Sidebar Actions
export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;

// Configuring Redux Store
const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

// Zustand Store for Auth
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  // Verify Email Method
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post('http://localhost:8000/api/verify-email', { code });

      // Set user details and authentication status upon successful verification
      set({
        user: response.data.user || null,
        isAuthenticated: true,
        isLoading: false,
        message: response.data.message || 'Email verified successfully!',
      });

      return response.data; // Return the entire response data for further use
    } catch (error) {
      // Handle and set error states
      const errorMessage = error.response?.data?.message || 'Error verifying email';
      set({ error: errorMessage, isLoading: false });

      // Log error for debugging
      console.error('Error verifying email:', errorMessage);

      // Re-throw the error to allow further handling if necessary
      throw new Error(errorMessage);
    }
  },
}));

export default store;
