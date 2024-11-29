// import { View, Text, Image, TouchableOpacity } from "react-native";
// import React, { useEffect, useState, useRef } from "react";
// import { Bookmark, ExternalLink, Heart, MessageCircle } from "lucide-react-native";
// import moment from "moment";
// import PostHeader from "./PostHeader";
// import { ResizeMode, Video } from "expo-av";
// import { AdvancedImage } from "cloudinary-react-native";
// import cld from "@/src/lib/cloudinary";
// // Change this import
// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { Post } from "@/src/types/types";

// const PostsCard = ({
//   imageDp,
//   mediaUrl,
//   username,
//   likedBy,
//   isVerified,
//   likes,
//   location,
//   caption,
//   createdAt,
//   mediaType,
//   onCommentPress,
// }: Post) => {
//   const [timePosted, setTimePosted] = useState("");
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const getTimePosted = () => moment(createdAt).fromNow();
//     setTimePosted(getTimePosted());

//     const interval = setInterval(() => setTimePosted(getTimePosted()), 30000);
//     return () => clearInterval(interval);
//   }, [createdAt]);

//   // const getPublicUrl = (url) => {
//   //   if (!url) return null;
//   //   const matches = url.match(/\/v\d+\/([^/]+)$/);
//   //   return matches ? matches[1].split('.')[0] : null; // Remove file extension if present
//   // }

//   // Modified image transformation
// //   const mediaImage = mediaUrl ? cld
// //     .image(getPublicUrl(mediaUrl))
// //     .format('auto')
// //     .quality('auto') : null;
// // console.log("media url", mediaUrl)
//   return (
//     <View className="flex-1 flex-col w-full p-4">
//       {/* Post Header */}
//       {mediaType === "video" ? (
//         <View className="relative aspect-video">
//           <View className="absolute top-0 left-0 right-0 z-10">
//             <PostHeader
//               isVerified={isVerified}
//               location={location}
//               username={username}
//               imageDp={imageDp}
//               onMorePress={() => console.log("More")}
//             />
//           </View>
//           <Video
//             ref={videoRef}
//             source={{ uri: mediaUrl }}
//             className="w-full h-full"
//             resizeMode={ResizeMode.COVER}
//             shouldPlay
//             isLooping
//           />
//         </View>
//       ) : (
//         <View>
//           <PostHeader
//             isVerified={isVerified}
//             location={location}
//             username={username}
//             imageDp={imageDp}
//             onMorePress={() => console.log("More")}
//           />
//           <View className="aspect-square">
//             {/* {mediaImage && (
//               <AdvancedImage
//                 cldImg={mediaImage}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   aspectRatio: 1
//                 }}
//               />
//             )} */}

// Image
//                 <Image source={{uri:mediaUrl}}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   aspectRatio: 1
//                 }}
//               />
//           </View>
//         </View>
//       )}

//       {/* Rest of the component remains the same */}
//       <View className="flex-row justify-between items-center my-2">
//         <View className="flex-row gap-3">

//           <TouchableOpacity className="flex-row items-center gap-1">
//             <Heart size={25} color="#000" />
//             <Text className="text-xs">{likes}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={onCommentPress} className="flex-row items-center gap-1">
//             <MessageCircle size={25} color="#000" />
//             <Text className="text-xs">5</Text>
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <ExternalLink size={25} color="#000" />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity>
//           <Bookmark size={25} color="#000" />
//         </TouchableOpacity>

//       </View>

//       <View className="mb-2">
//         <View className="flex-row items-center gap-2">
//           <Image source={{ uri: imageDp }} className="w-6 h-6 rounded-full" />
//           <Text className="text-sm">Liked by {likedBy}</Text>
//         </View>
//         <View className="flex-row gap-2 mt-2">
//           <Text className="text-sm font-semibold">{username}</Text>
//           <Text className="text-sm">{caption}</Text>
//         </View>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Text className="text-gray-500">View all comments</Text>
//         </TouchableOpacity>
//         <Text className="text-xs text-gray-500 mt-1">{timePosted}</Text>
//       </View>
//     </View>
//   );
// };

// export default PostsCard;

import { View, Text, Image } from "react-native";
import React, { useRef, useState } from "react";
import PostHeader from "./PostHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import useDynamicLayout from "@/src/lib/useDynamic";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import DisplayPic from "../imagedp/DisplayPic";
import SmallDp from "../imagedp/SmallDp";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CommentB from "../Comment/CommentModal";
import { useApp } from "@/src/context/appContext";
import { Post } from "@/src/types/types";
import CommentModal from "../Comment/CommentModal";

export default function PostsCard({
  id,
  imageDp,
  location,
  isVerified,
  username,
  mediaUrl,
  likes,
  likedBy,
}: Post) {
  const { iconSize } = useDynamicLayout();

  const [comments, setComments] = useState([]);

  const sheetRef = useRef<BottomSheetModal>(null);
  // to open the modal
  const openCommentModal = () => {
    sheetRef.current?.present();
  };
  const modalClose = () => {
    sheetRef.current?.dismiss();
  };

  const handleAddComment = (newComment: string) => {
    const newCommentObj = {
      id: String(comments.length + 1),
      username: "currentUser", // Replace with actual username
      text: newComment,
      timestamp: "just now",
      likes: 0,
    };
    setComments([...comments, newCommentObj]);
  };

  return (
    <View className="flex-1 space-y-2">
      <PostHeader
        imageDp={imageDp}
        location={location}
        isVerified={isVerified}
        username={username}
      />
      <View className="flex flex-col space-y-2 aspect-square">
        <Image source={{ uri: mediaUrl }} className=" aspect-[4/3]" />

        <View className="flex flex-row ">
          <View className="flex-1 flex-row items-center gap-3">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-1">
                <AntDesign name="hearto" size={iconSize} color="black" />
                <Text>{likes}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={openCommentModal}>
              <View className="flex flex-row items-center gap-1">
                <FontAwesome5 name="comment" size={24} color="black" />
                <Text>123</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row">
              <AntDesign name="sharealt" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Feather name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* liked by */}
        <View className=" relative flex flex-row gap-4 ">
          <View className="">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <View
                  key={index}
                  className={`absolute ${index === 0 ? "z-10" : ""} 
               ${index === 1 ? "z-20 left-2" : ""} ${
                    index === 2 ? "z-30 left-4" : ""
                  }
               `}
                >
                  <SmallDp />
                </View>
              ))}
          </View>
          <Text className="ml-7 text-sm text-gray-700">
            Liked by {likedBy} and others
          </Text>
        </View>
      </View>

      <CommentModal ref={sheetRef} postId={id} onClose={modalClose} />
    </View>
  );
}
