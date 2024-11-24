// import { ActivityIndicator, FlatList, View, Text } from "react-native";
// import React, { useEffect } from "react";
// import PostsCard from "./PostsCard"; // Importing the PostsCard component to render each post
// import { useApp } from "../../context/appContext"; // Assuming you have a context that provides posts data
// import { Post } from "@/src/types/types";

// interface RenderItemProps {
//   item: Post;
// }

// interface CommentProps {
//   onCommentPress?: () => void;
// }

// export default function Posts({ onCommentPress }: CommentProps) {
//   const { posts, loading, error, fetchPosts } = useApp(); // Accessing posts from context

//   // Fetching posts when the component mounts
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   // Render each post using the PostsCard component
//   const renderItem = ({ item }: RenderItemProps) => {
//     return <PostsCard {...item} onCommentPress={onCommentPress} />;
//   };

//   // Show a loading spinner while fetching data
//   if (loading) {
//     return (
//       <View className="flex-1 justify-center items-center">
//         <ActivityIndicator size="large" color="yellow" />
//       </View>
//     );
//   }

//   // Show an error message if there is an issue fetching posts
//   if (error) {
//     return (
//       <View className="flex-1 justify-center items-center p-5">
//         <Text className="text-red-500 text-center">{error}</Text>
//       </View>
//     );
//   }

//   // Render the list of posts if data is available
//   return (
//     <View className="flex-1">
//       <FlatList
//         keyExtractor={(item) => item.id.toString()} // Ensure each post has a unique key
//         data={posts} // Data from context (posts)
//         renderItem={renderItem} // Use the renderItem function to render each post
//       />
//     </View>
//   );
// }

import { View, Text } from 'react-native'
import React from 'react'
import PostsCard from './PostsCard'

export default function Posts() {
  
  return (
    <View>
      <PostsCard/>
    </View>
  )
}