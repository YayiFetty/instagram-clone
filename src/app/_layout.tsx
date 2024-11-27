import React from 'react'
import { Stack } from 'expo-router'
import "../../global.css";
import { AppProvider } from "../context/appContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
   <AppProvider>
     <GestureHandlerRootView className='flex-1'>
     <Stack  screenOptions={{headerShown:false}}>
      <Stack.Screen  name="(tabs)"/>
      <Stack.Screen name="(auth)"/>
    </Stack>
     </GestureHandlerRootView>
   </AppProvider>
  )
}