import { View, Text } from 'react-native'
import React from 'react'
import ProfileHeader from '@/src/components/Profile/ProfileHeader'
import ProfileUser from '@/src/components/Profile/ProfileUser'

export default function Profile() {
  return (
    <View className='flex flex-col px-4 my-2' >
      <ProfileHeader/>
      <ProfileUser/>
    </View>
  )
}