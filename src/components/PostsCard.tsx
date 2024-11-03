import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BadgeCheck } from 'lucide-react-native'
const PostsCard = ({imageDp, imageUrl, username, isVerified, location}:Post) => {
  return (
    <View>
      <View>
      <LinearGradient
        colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            overflow: "hidden",
            backgroundColor: "white", // background to separate image from gradient border
          }}
        >
          <Image source={{ uri: imageDp }} style={{ width: "100%", height: "100%" }} />
        </View>
      </LinearGradient>

      <View>
      <View>
        <Text>{username}</Text>
        {
            isVerified && ( <BadgeCheck size={20} color="#000" /> )
        }
      </View>
      <Text>{location}</Text>
      </View>
        
      </View>
        
    </View>
  )
}

export default PostsCard