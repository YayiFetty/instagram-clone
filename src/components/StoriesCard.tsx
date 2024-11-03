import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const StoriesCard = ({ username, imageUrl, isLive }: Story) => {
  return (
    <View className="relative h-fit" style={{ alignItems: "center", marginHorizontal: 8 }}>
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
          <Image source={{ uri: imageUrl }} style={{ width: "100%", height: "100%" }} />
        </View>
      </LinearGradient>
        
      <Text style={{ fontSize: 12, marginTop: 4 }}>{username}</Text>
      
      {isLive && (
       <View className="absolute bottom-3 left-2">
             <Text style={{ color: "red", fontSize: 12 }}>Live</Text>
      </View>
      )}
    
    </View>
  );
};

export default StoriesCard;
