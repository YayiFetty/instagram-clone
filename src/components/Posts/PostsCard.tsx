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


import { View, Text } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'

export default function PostsCard() {
  return (
    <View>
      <PostHeader imageUrl={imageUrl}/>
    </View>
  )
}