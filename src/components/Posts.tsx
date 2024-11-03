import { FlatList, View } from "react-native";
import React from "react";

import posts from "@/assets/data/posts.json";
import PostsCard from "./PostsCard";

export default function Posts() {

    const renderItems = ({item}:{item:Post}) => {
        return (
            <PostsCard
                key={item.id}
                imageDp={item.imageDp}
                username={item.username}
                isVerified={item.isVerified}
                location={item.location}
            />
        );
    }
  return (
    <View className="flex-1 px-4 py-2">
      <FlatList
      data={posts}
      renderItem={renderItems}/>
    </View>
  );
}
