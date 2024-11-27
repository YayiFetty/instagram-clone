

import axios from 'axios';
const url = process.env.EXPO_PUBLIC_API_BASE_URL || "http://192.168.130.1:3001"
export const api = axios.create({
  baseURL: url, // Replace with your working local IP IPv4 address usong ipconfig command
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});