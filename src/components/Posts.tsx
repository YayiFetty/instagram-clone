import { ActivityIndicator, FlatList, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsCard from "./PostsCard";
import { api } from "../config/api";

// Define TypeScript interfaces


interface RenderItemProps {
  item: Post;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try{
      setIsLoading(true);
      setError(null);

      const response = await api.get("/posts")

      const data = response.data.posts || response.data

      console.log("data", data);

      setPosts(data);

    }
    catch(err){
      console.error("Error fetching", err)
    }
    finally{
      setIsLoading(false)
    }
  };

  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <PostsCard
        imageDp={item.imageDp}
        username={item.username}
        isVerified={item.isVerified}
        location={item.location}
        imageUrl={item.imageUrl}
        likedBy={item.likedBy}
        likes={item.likes}
        caption={item.caption}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="yellow" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={posts}
        renderItem={renderItem}
      />
    </View>
  );
}