

import { View, Text, FlatList } from "react-native";
import React from "react";
import StoriesCard from "./StoriesCard";
import { useApp } from "@/src/context/appContext";
import useDynamicLayout from "@/src/lib/useDynamic";

export default function Stories() {
  const { stories } = useApp();
  const {padding} = useDynamicLayout();
  const renderItem = ({ item }) => {
    return (
      <StoriesCard
        imageUrl={item.imageUrl}
        username={item.username}
        id={item.id}
        isLive={item.isLive}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      
      />
    </View>
  );
}
