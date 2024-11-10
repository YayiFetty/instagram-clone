import React from 'react'
import { Stack } from 'expo-router'
import "../../global.css";
import { AppProvider } from "../context/appContext";

export default function RootLayout() {
  return (
   <AppProvider>
     <Stack  screenOptions={{headerShown:false}}>
      <Stack.Screen  name="(tabs)"/>
      <Stack.Screen name="(auth)"/>
    </Stack>
   </AppProvider>
  )
}