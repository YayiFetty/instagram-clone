
import React from 'react'
import { Stack } from 'expo-router'

export default function SubLayout() {
  return (
    <Stack >
      <Stack.Screen name="feedscreen" options={{headerShown:false}}/>
      <Stack.Screen name="messagescreen" options={{
        
      }}/>
      <Stack.Screen name="storyscreen" options={{headerShown:false}}/>
    </Stack>
  )
}