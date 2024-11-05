import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BadgeCheck, Bookmark, EllipsisVertical, ExternalLink, Heart, MessageCircle } from "lucide-react-native";
const PostsCard = ({
  imageDp,
  imageUrl,
  username,
  isVerified,
  location,
  likedBy,
  likes,
  caption
}: Post) => {
  
  return (
    <View className="flex-1 flex-col  w-full">
      <View className="flex flex-row items-center justify-between px-4 my-2  ">
        {/* for the Dp / username / location */}
        <View className="flex flex-row justify-start gap-3 ">
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
              <Image
                source={{ uri: imageDp }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </LinearGradient>

          {/* foor the username and verification */}
          <View className="flex-col items-start justify-center">
            <View className="flex-row gap-2">
              <Text>{username}</Text>
              {isVerified && <BadgeCheck size={20} color="blue" />}
            </View>
            <Text>{location}</Text>
          </View>
        </View>
        {/* for the more icon */}
        <View>
          <EllipsisVertical size={25} color="#000" />
        </View>
      </View>
      
      {/* Post Image */}

        <View className="aspect-square">
          <Image source={{uri:imageUrl}} style={{width:"100%", height:"100%"}}/>

        </View>

        {/* likes comment share bookmark */}
        <View className="flex flex-row  justify-between items-center my-2 px-4">
          <View className="flex-row gap-3">
          
          <TouchableOpacity className="flex-row items-center gap-1">
              <Heart size={25} color="#000"/>
              <Text className = " text-[11px]">{likes}</Text>
            </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center gap-1">
              <MessageCircle size={25} color="#000"/>
              <Text className = " text-[11px]">5</Text>
            </TouchableOpacity>

          <TouchableOpacity>
              <ExternalLink size={25} color="#000"/>
            </TouchableOpacity>
            
          </View>
          <View>
            <TouchableOpacity>
              <Bookmark size={25} color="#000"/>
            </TouchableOpacity>
          </View>
        </View>

        {/* liked by */}

        <View className="px-4">
          <Image source={{uri:imageDp}}/>
          <View className="flex-row gap-1">
            <Image source={{uri:imageDp}} className="w-6 h-6 rounded-full"/>
            <Text>Liked by {likedBy} </Text>

          </View>
        </View>

        {/* username and caption */}

        <View className="px-4 flex-row gap-2">
              <Text>{username}</Text>
              <Text>{caption}</Text>

        </View>
        {/* view all comments */}
        <View className="px-4">
          <TouchableOpacity>
            View all comments
          </TouchableOpacity>
        </View>
        {/* dates */}
        <View>
          <Text>

          </Text>
        </View>
    </View>
  );
};

export default PostsCard;
