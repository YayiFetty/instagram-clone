import { ScrollView, View } from "react-native";
import React from "react";
import story from "@/assets/data/story.json";
import StoriesCard from "./StoriesCard";
const Stories = () => {
  return (
        <View>
            <ScrollView horizontal
    showsHorizontalScrollIndicator={false} 
    className="px-4 py-2 ">
      {story.map((item) => (
        <StoriesCard
            key={item.id}
          username={item.username}
          imageUrl={item.imageUrl}
          isLive={item.isLive}
        />
      ))}
    </ScrollView>
        </View>
  );
};

export default Stories;
