// import { View, Text, Image } from 'react-native'
// import React from 'react'

// import { BadgeCheck, EllipsisVertical, Heart } from 'lucide-react-native'
// import { LinearGradient } from 'expo-linear-gradient'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// export default function PostHeader({isVerified,
//     location,imageDp, username,likes, onLikePress, onMorePress}:Post) {
//   return (
//     <View className="flex flex-row items-center justify-between px-4 my-2  ">
//         {/* for the Dp / username / location */}
//         <View className="flex flex-row justify-start gap-3 ">
//         <LinearGradient
//         colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
//         style={{
//           width: 54,
//           height: 54,
//           borderRadius: 27,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <View style={{
//           width: 50,
//           height: 50,
//           borderRadius: 25,
//           alignItems: "center",
//           backgroundColor: "#fff",
//           justifyContent: "center",
//         }}>
//           <View
//             style={{
//               width: 46,
//               height: 46,
//               borderRadius: 23,
//               overflow: "hidden",
//               backgroundColor: "white", // background to separate image from gradient border
//             }}
//           >
//             <Image source={{ uri: imageDp }} style={{ width: "100%", height: "100%" }} />
//           </View>
//         </View>
//       </LinearGradient>

//           {/* foor the username and verification */}
//           <View className="flex-col items-start justify-center">
//             <View className="flex-row gap-2">
//               <Text className=" text-xl font-bold leading-5">{username}</Text>
//               {isVerified && <BadgeCheck size={20} color="blue" />}
//             </View>
//             <Text>{location}</Text>
//           </View>
//         </View>
//         {/* for the more icon */}
//         {
//           (onLikePress || onMorePress) &&(
//            <View className='flex-row items-center gap-4'>
//               {
//                 onLikePress && (
//                   <TouchableOpacity>
//                     <Heart size={25} color="#000"/>
//                     <Text>{likes}</Text>
//                   </TouchableOpacity>
//                 )
//               }

//               {
//                 onMorePress && (
//                   <TouchableOpacity>
//                     <EllipsisVertical size={25} color="#000"/>
//                   </TouchableOpacity>
//                 )
//               }

//            </View>
//           )
//         }
//       </View>
//   )
// }

import { View, Text } from "react-native";
import React from "react";
import ImageDp from "../imagedp/DisplayPic";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import useDynamicLayout from "@/src/lib/useDynamic";
import DisplayPic from "../imagedp/DisplayPic";
export default function PostHeader({
  imageDp,
  username,
  isVerified,
  location,
}) {
  const { iconSize } = useDynamicLayout();
  return (
    <View className="flex flex-row">
      <View className=" flex-1 gap-4 flex-row">
        <DisplayPic imageDp={imageDp} />
        <View className="flex flex-col justify-center items-center">
          <View className="flex flex-row justify-center items-center">
            <Text>{username}</Text>
            {isVerified && (
              <MaterialIcons name="verified" size={iconSize} color="blue" />
            )}
          </View>
          <View>
            <Text>{location}</Text>
          </View>
        </View>
      </View>
      <Entypo name="dots-three-vertical" size={iconSize} color="black" />
    </View>
  );
}
