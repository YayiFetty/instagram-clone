// import { FlatList, View } from "react-native";
// import React, { useState } from "react";
// import CustomHeader from "../../../components/CustomHeader";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Stories from "@/src/components/Story/Stories";
// import Posts from "@/src/components/Posts/Posts";
// import CommentModal from "@/src/components/Comment/CommentModal";

// export default function FeedScreen() {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const sections = [
//     { type: "stories", id: "stories-section" },
//     { type: "posts", id: "posts-section" },
//   ];

//   const renderItem = ({ item }) => {
//     switch (item.type) {
//       case "stories":
//         return <Stories />;
//       case "posts":
//         return <Posts onCommentPress={() => setIsModalVisible(true)} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <SafeAreaView className="flex-1 space-y-1 bg-white">
//       <CustomHeader />
//       <FlatList
//         data={sections}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />
//       <CommentModal
//         isVisible={isModalVisible}
//         onClose={() => setIsModalVisible(false)}
//       />
//     </SafeAreaView>
//   );
// }

import { View, Text,  FlatList } from "react-native";
import React from "react";
import useDynamicLayout from "@/src/lib/useDynamic";
import CustomHeader from "@/src/components/CustomHeader";
import Posts from "@/src/components/Posts/Posts";
import Stories from "@/src/components/Story/Stories";
import { SafeAreaView } from "react-native-safe-area-context";

const section = [
  { type: "stories", id: "stories-section" },
  { type: "posts", id: "posts-section" },
];

export default function FeedScreen() {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "stories":
        return <Stories />;
      case "posts":
        return <Posts />;
      default:
        return null;
    }
  };
  const { padding } = useDynamicLayout();
  return (
    <SafeAreaView
      className="flex-1 space-y-2"
      style={{ paddingHorizontal: padding }}
    >
      {/* <CustomHeader/> */}
      <FlatList
        data={section}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<CustomHeader />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
