// import { View, Text, Image, TouchableOpacity } from "react-native";
// import React from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import { router } from "expo-router";
// import ImageDp from "../imagedp/imageDp";
// import { Story } from "@/src/types/types";

// const StoriesCard = ({ id, username, imageUrl, isLive }: Story) => {
//   const clickStory = () => {
//     router.push("/home/storyscreen")
//   }
//   return (
//     <View className="relative h-fit" style={{ alignItems: "center", }} id={id}>
//      <TouchableOpacity onPress={clickStory}>
//       <ImageDp imageUrl={imageUrl}/>

//       <Text style={{ fontSize: 14, marginTop: 6, fontWeight: "500" }}>{username}</Text>

//       {isLive && (
//         <View className="absolute top-0 left-0">
//           <Text style={{ color: "red", fontSize: 12, backgroundColor: "rgba(255, 255, 255, 0.8)", paddingHorizontal: 4, paddingVertical: 2, borderRadius: 4 }}>Live</Text>
//         </View>
//       )}
//      </TouchableOpacity>
//     </View>
//   );
// };

// export default StoriesCard;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ImageDp from "../imagedp/imageDp";
import { Story } from "@/src/types/types";

export default function StoriesCard({ imageUrl, isLive, id, username }: Story) {
  return (
    <TouchableOpacity className="flex items-center mx-2">
      <View className=" relative mb-2 ">
        <ImageDp imageUrl={imageUrl} />
        {isLive && (
          <View className="absolute top-0 left-0">
            <Text className=" font-bold text-red-500 bg-white/75">Live</Text>
          </View>
        )}
      </View>
      <Text className="text-sm font-medium text-center">{username}</Text>
    </TouchableOpacity>
  );
}
