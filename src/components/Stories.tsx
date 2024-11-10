import { FlatList, View } from "react-native";
import React from "react";
import story from "@/assets/data/story.json";
import StoriesCard from "./StoriesCard";

const Stories = () => {
  const renderItem = ({ item}) => (
    <StoriesCard
      username={item.username}
      imageUrl={item.imageUrl}
      isLive={item.isLive}
      id={item.id}
    />
  );

  return (
    <View>
      <FlatList
        data={story}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Using index as key instead of id
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="px-4 py-2"
      />
    </View>
  );
};

export default Stories;