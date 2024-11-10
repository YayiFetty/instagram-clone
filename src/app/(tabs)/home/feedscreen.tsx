import { FlatList, ScrollView } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/CustomHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import Stories from '@/src/components/Stories'
import Posts from '@/src/components/Posts'


export default function FeedScreen() {
  const sections = [
    {type:"stories", id:"stories-section"},
    {type:"posts", id:"posts-section"}
  ]
  const renderItem = ({item}) => {
    switch(item.type){
      case "stories":
        return <Stories/>;
      case "posts":
        return <Posts/>;

      default:
        return null;
    }
  }
  return (
    <SafeAreaView className='flex-1 space-y-1 bg-white'>
       <CustomHeader/>
    
      <FlatList
      data={sections}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}/>
    
    </SafeAreaView>
  )
}