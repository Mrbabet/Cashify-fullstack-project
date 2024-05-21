import axios from 'axios';
import { store } from '../store'
import { refreshToken, logout } from './authSlice'

const api = axios.create({
  baseURL: '`https://cashify-backend.onrender.com/`;', 
  withCredentials: true, // Ensure cookies are sent with each request
});

// Request interceptor to add access token to headers
api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor to handle token refresh
api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      const actionResult = await store.dispatch(refreshToken());
      const newToken = actionResult.payload.accessToken;
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest); // Retry original request with new token
    } catch (refreshError) {
      store.dispatch(logout()); // Dispatch logout action on refresh failure
      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
});

export default api;
