import { ActivityIndicator, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import PostsCard from "./PostsCard";
import { api } from "../config/api";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/posts');
     // Log the full response
      const postsData = response.data.posts || response.data
      
      console.log("postsData", postsData)
      setPosts(postsData);
    } catch (err) {
      console.error("Error fetching:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItems = ({ item }: { item: Post }) => {
    return (
      <PostsCard
        imageDp={item.imageDp}
        username={item.username}
        isVerified={item.isVerified}
        location={item.location}
      />
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="yellow" />;
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={posts}
        renderItem={renderItems}
      />
    </View>
  );
}
