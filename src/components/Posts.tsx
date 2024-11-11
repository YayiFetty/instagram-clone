// import { ActivityIndicator, FlatList, View, Text } from "react-native";
// import React, { useEffect } from "react";

// import PostsCard from "./PostsCard";

// import { useApp } from "../context/appContext";
// import CommentModal from "./CommentModal";
// interface RenderItemProps {
//   item: Post;
// }

// export default function Posts({onCommentPress}) {
//   const { posts, loading, error, fetchPosts } = useApp();

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const renderItem = ({ item }: RenderItemProps) => {
//     return (
//       <PostsCard
//       {...item}
//         onCommentPress={onCommentPress}
//       />
//     );
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="yellow" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 20,
//         }}
//       >
//         <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         keyExtractor={(item) => item.id.toString()}
//         data={posts}
//         renderItem={renderItem}
//       />
        
//     </View>
//   );
// }








import { ActivityIndicator, FlatList, View, Text } from "react-native"
import React, { useEffect } from "react"
import PostsCard from "./PostsCard"
import { useApp } from "../context/appContext"

interface RenderItemProps {
  item: Post
}

export default function Posts({ onCommentPress }) {
  const { posts, loading, error, fetchPosts } = useApp()

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <PostsCard
        {...item}
        onCommentPress={onCommentPress}
      />
    )
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="yellow" />
      </View>
    )
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={posts}
        renderItem={renderItem}
      />
    </View>
  )
}
