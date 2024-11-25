import { View, Text, Image } from "react-native";
import React from "react";
import useDynamicLayout from "@/src/lib/useDynamic";

export default function SmallDp() {
  const { iconSize } = useDynamicLayout();

  return (
    <View
      style={{
        height: iconSize,
        width: iconSize,
        borderRadius: 25 / 2,
        overflow: "hidden",
      }}
    >
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1794692732474003456/PiaTQJ5S_400x400.jpg",
        }} // Replace with actual URL
        style={{ height: iconSize, width: iconSize }}
        resizeMode="cover"
      />
    </View>
  );
}
