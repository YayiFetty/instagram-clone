import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import Stories from '@/src/components/Stories'
import Posts from '@/src/components/Posts'

export default function FeedScreen() {
  return (
    <SafeAreaView className='flex-1 space-y-1 bg-white'>
       <CustomHeader/>
      <ScrollView>
      <Stories/>
      <Posts/>
      </ScrollView>
    </SafeAreaView>
  )
}