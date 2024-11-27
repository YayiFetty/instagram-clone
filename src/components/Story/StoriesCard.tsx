
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ImageDp from "../imagedp/DisplayPic";
import { Story } from "@/src/types/types";

export default function StoriesCard({ imageUrl, isLive, id, username }: Story) {
  return (
    <TouchableOpacity className="flex items-center mx-2">
      <View className=" relative mb-2 ">
        <ImageDp imageDp={imageUrl} />
        {isLive && (
          <View className="absolute top-0 left-0">
            <Text className=" font-bold text-red-500 bg-white/75">Live</Text>
          </View>
        )}
      </View>
      <Text className="text-sm font-medium text-center">{username}</Text>
    </TouchableOpacity>
  );
}
