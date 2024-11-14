import { View, Text } from 'react-native'
import React from 'react'
import PostHeader from '../Posts/PostHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CommentBox = ({ username, isVerified, location, imageDp, likes, onLikePress }:CommentBoxProps) => {
    return (
      <View className='py-2'>
        <PostHeader 
          username={username}
          isVerified={isVerified}
          imageDp={imageDp}
          location={location}
          likes={likes}
          onLikePress={onLikePress}
        />
        <TouchableOpacity className='mt-2 ml-12'>
          <Text className='text-gray-500 ml-16'>Reply</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
export default CommentBox