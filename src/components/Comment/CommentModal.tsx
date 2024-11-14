import React, { useCallback, useRef, useMemo, useState } from "react"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import CommentBox from "./CommentBox"
import { useApp } from "@/src/context/appContext";
import { Text, View } from "react-native";

interface CommentModalProps {
  isVisible: boolean
  onClose: () => void;
  postId:string;
 }

 interface Comment {
  id: string;
  username: string;
  isVerified: boolean;
  imageDp: string;
  location: string;
  likes: number;
  content?: string;
  timestamp?: string;
}
const CommentModal: React.FC<CommentModalProps> = ({ isVisible, onClose, postId }) => {
  const {posts, user } = useApp(); // Fetch user info from context
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["100%"], []);

  const handleSheetChange = useCallback((index) => {
    if (index === -1) onClose()
  }, [onClose]);


  // Get comments for the current post
  const post = posts.find(p => p.id === postId);
  const [comments] = useState<Comment[]>([
    // Example comment from the post author
    {
      id: '1',
      username: post?.username || '',
      isVerified: post?.isVerified || false,
      imageDp: post?.imageDp || '',
      location: post?.location || '',
      likes: 0,
      content: post?.caption,
      timestamp: post?.createdAt
    },
    // You can add more mock comments here
    {
      id: '2',
      username: 'john_doe',
      isVerified: false,
      imageDp: 'https://picsum.photos/100/100?random=2',
      location: 'New York, USA',
      likes: 5,
      content: 'Great post!',
      timestamp: new Date().toISOString()
    }
  ]);

  const renderItem = useCallback(
    ({ item }: {item:Comment}) => {
    
      return (
        <CommentBox
          username={item.username } // Use username from comments or post
          isVerified={item.isVerified} // Use isVerified from comments or post
          imageDp={item.imageDp} // Use imageDp from comments or post
          location={item.location} // Use location from comments or post
          likes={item.likes}
          onLikePress={() => console.log("Like pressed")}
        />
      );
    },
    [comments]
  )

 

  return (
    isVisible && (
      <GestureHandlerRootView className="absolute inset-0 z-10">
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose
          onChange={handleSheetChange}
          index={0}
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        >
         
          <BottomSheetFlatList
            data={comments}
            keyExtractor={(item, index) => `comment-${index}`}
            renderItem={renderItem}
            contentContainerStyle={{ backgroundColor: "white", paddingHorizontal: 16 }}
          />
        </BottomSheet>
      </GestureHandlerRootView>
    )
  )
}

export default CommentModal
