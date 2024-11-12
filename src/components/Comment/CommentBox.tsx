import { View, Text } from 'react-native'
import React from 'react'
import PostHeader from '../Posts/PostHeader'
import { useApp } from '@/src/context/appContext'

const CommentBox = () => { 
    return (
    <View>
        <PostHeader/>
    </View>
  )
}

export default CommentBox