import axios from 'axios';
import { Platform } from 'react-native';

export const getApiBaseUrl = () => {
  // Get the local IP address of your computer
  const localIp = '192.168.90.1'; 
  
  if (__DEV__) {
    if (Platform.OS === 'android') {
      if (Platform.constants.Version >= 30) {
        // For Android 11+ emulator
        return 'http://10.0.2.2:3000';
      }
      // For older Android emulator versions
      return 'http://10.0.2.2:3000';
    }
    if (Platform.OS === 'ios') {
      // For iOS simulator
      return 'http://localhost:3000';
    }
    // For physical devices (both iOS and Android)
    return `http://${localIp}:3000`;
  }
  
  // Production URL
  return 'https://your-production-api.com';
};


export const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});