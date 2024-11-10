import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const StoriesCard = ({ id, username, imageUrl, isLive }: Story) => {
  const clickStory = () => {
    router.push("/home/storyscreen")
  }
  return (
    <View className="relative h-fit" style={{ alignItems: "center", marginHorizontal: 8 }} id={id}>
     <TouchableOpacity onPress={clickStory}>
     <LinearGradient
        colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
        style={{
          width: 54,
          height: 54,
          borderRadius: 27,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          backgroundColor: "#fff",
          justifyContent: "center",
        }}>
          <View
            style={{
              width: 46,
              height: 46,
              borderRadius: 23,
              overflow: "hidden",
              backgroundColor: "white", // background to separate image from gradient border
            }}
          >
            <Image source={{ uri: imageUrl }} style={{ width: "100%", height: "100%" }} />
          </View>
        </View>
      </LinearGradient>
      
      <Text style={{ fontSize: 14, marginTop: 6, fontWeight: "500" }}>{username}</Text>
      
      {isLive && (
        <View className="absolute top-0 left-0">
          <Text style={{ color: "red", fontSize: 12, backgroundColor: "rgba(255, 255, 255, 0.8)", paddingHorizontal: 4, paddingVertical: 2, borderRadius: 4 }}>Live</Text>
        </View>
      )}
     </TouchableOpacity>
    </View>
  );
};

export default StoriesCard;