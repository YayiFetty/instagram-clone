import axios from 'axios';
import { Platform } from 'react-native';

const getApiBaseUrl = () => {
  const localIp = '192.168.90.1';
  
  if (__DEV__) {
    return Platform.OS === 'android'
      ? 'http://10.0.2.2:3001' // Android emulator
      : 'http://localhost:3001'; // iOS simulator or local development
  }
  
  return `http://${localIp}:3001`; // For physical devices
};

export const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for logging
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error);
    return Promise.reject(error);
  }
);
