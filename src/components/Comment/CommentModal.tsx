

// import React, { useMemo, useState } from "react";
// import { View, Text } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import {
//   BottomSheetFlatList,
//   BottomSheetModal,
//   BottomSheetTextInput,
// } from "@gorhom/bottom-sheet";
// import Button from "../Button";

// interface Comment {
//   id: number;
//   comment: string;
// }

// interface CommentBProps {
//   ref: React.RefObject<BottomSheetModal>;
//   onClose: () => void;
//   onAddComment: (comment: string) => void;
//   comments: Comment[];
// }

// const CommentB = React.forwardRef<BottomSheetModal, CommentBProps>(
//   ({ onClose, onAddComment, comments }, ref) => {
//     const snapPoints = useMemo(() => ["90%"], []);
//     const [newComment, setNewComment] = useState("");

//     const handlePostComment = () => {
//       if (newComment.trim()) {
//         onAddComment(newComment.trim());
//         setNewComment("");
//       }
//     };

//     const renderItem = ({ item }: { item: Comment }) => (
//       <View className="py-3 border-b border-gray-300">
//         <Text className="text-base text-gray-800">{item.comment}</Text>
//       </View>
//     );

//     return (
//       <GestureHandlerRootView className="flex-1">
//         <BottomSheetModal
//           ref={ref}
//           index={0}
//           snapPoints={snapPoints}
//           enablePanDownToClose
//           onDismiss={onClose}
//         >
//           {/* Comments List */}
//           <BottomSheetFlatList
//             data={comments}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={{ padding: 16 }}
//           />

//           {/* Add Comment Input */}
//           <View className="flex-row items-center px-4 py-2 border-t border-gray-300">
//             <BottomSheetTextInput
//               className="flex-1 h-10 px-2 border border-gray-400 rounded-md"
//               value={newComment}
//               onChangeText={setNewComment}
//               placeholder="Add a comment..."
//             />
//             <Button title="Post" onPress={handlePostComment} />
//           </View>
//         </BottomSheetModal>
//       </GestureHandlerRootView>
//     );
//   }
// );

// export default CommentB;


import { View, Text } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet'
import { useApp } from '@/src/context/appContext';
import CommentBox from './CommentBox';

interface Comment {
    id: string;
    username: string;
    comment: string;
    createdAt: string;
    userProfilePic?: string; // Optional profile picture
}

interface CommentProps {
    onClose: () => void;
    postId: string;
}

const CommentModal = React.forwardRef<BottomSheetModal, CommentProps>(({onClose, postId}, ref) => {
    const snapPoints = useMemo(() => ["90%"], []);
    const { posts } = useApp();

    // Find the specific post by its ID
    const post = posts.find((p) => p.id === postId);

    const renderItem = useCallback(({item}: {item: Comment}) => {
        return(
            <CommentBox
            username={item.username } // Use username from comments or post
            
            onLikePress={() => console.log("Like pressed")}
          />
        )
    }, []);

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            onDismiss={onClose}
            enablePanDownToClose
        >
            <BottomSheetFlatList
                data={post?.comments || []}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={() => (
                    <View className="items-center justify-center p-4">
                        <Text className="text-gray-500">No comments yet</Text>
                    </View>
                )}
            />
        </BottomSheetModal>
    )
})

export default CommentModal