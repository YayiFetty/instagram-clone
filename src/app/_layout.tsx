import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "../../global.css";
export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="(auth)"/>
    </Stack>
  )
}