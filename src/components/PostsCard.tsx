import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  BadgeCheck,
  Bookmark,
  EllipsisVertical,
  ExternalLink,
  Heart,
  MessageCircle,
} from "lucide-react-native";
import moment from "moment";
const PostsCard = ({
  imageDp,
  mediaUrl,
  username,
  isVerified,
  location,
  likedBy,
  likes,
  caption,
  createdAt,
  mediaType
}: Post) => {
  const [timePosted, setTimePosted] = useState("");

  const getTimePosted = () => {
    const now = moment();
    const posted = moment(createdAt);
    const monthsDiff = now.diff(posted, "months");
    const daysDiff = now.diff(posted, "days");
    const hoursDiff = now.diff(posted, "hours");
    const minsDiff = now.diff(posted, "minutes");

    if (monthsDiff >= 11) return posted.format("MMMM D, YYYY");
    if (daysDiff >= 7) return posted.format("MMMM D");
    if (daysDiff >= 1) return `${daysDiff}d ago`;
    if (hoursDiff >= 1) return `${hoursDiff}h ago`;

    return minsDiff <= 0 ? "Just now" : minsDiff === 1 ? `${minsDiff} min ago`:`${minsDiff}mins ago`;
  };

  useEffect(() => {
    setTimePosted(getTimePosted());

    const interval = setInterval(() => {
      setTimePosted(getTimePosted());
    }, 30000);

    return () => clearInterval(interval);
  }, [createdAt]);

  return (
    <View className="flex-1 flex-col  w-full">
      <View className="flex flex-row items-center justify-between px-4 my-2  ">
        {/* for the Dp / username / location */}
        <View className="flex flex-row justify-start gap-3 ">
        <LinearGradient
        colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
        style={{
          width: 54,
          height: 54,
          borderRadius: 27,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          backgroundColor: "#fff",
          justifyContent: "center",
        }}>
          <View
            style={{
              width: 46,
              height: 46,
              borderRadius: 23,
              overflow: "hidden",
              backgroundColor: "white", // background to separate image from gradient border
            }}
          >
            <Image source={{ uri: imageDp }} style={{ width: "100%", height: "100%" }} />
          </View>
        </View>
      </LinearGradient>

          {/* foor the username and verification */}
          <View className="flex-col items-start justify-center">
            <View className="flex-row gap-2">
              <Text className=" text-xl font-bold leading-5">{username}</Text>
              {isVerified && <BadgeCheck size={20} color="blue" />}
            </View>
            <Text>{location}</Text>
          </View>
        </View>
        {/* for the more icon */}
        <View>
          <EllipsisVertical size={25} color="#000" />
        </View>
      </View>

      {/* Post Image */}

      <View className="aspect-square">
        <Image
          source={{ uri: mediaUrl }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      {/* likes comment share bookmark */}
      <View className="flex flex-row  justify-between items-center my-2 px-4">
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-row items-center gap-1">
            <Heart size={25} color="#000" />
            <Text className=" text-[11px]">{likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center gap-1">
            <MessageCircle size={25} color="#000" />
            <Text className=" text-[11px]">5</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <ExternalLink size={25} color="#000" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Bookmark size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* liked by */}

      <View className="px-4">
        <Image source={{ uri: imageDp }} />
        <View className="flex-row gap-1">
          <Image source={{ uri: imageDp }} className="w-6 h-6 rounded-full" />
          <Text>Liked by {likedBy} </Text>
        </View>
      </View>

      {/* username and caption */}

      <View className="px-4 flex-row gap-2">
        <Text className="text-sm font-semibold">{username}</Text>
        <Text className="text-sm">{caption}</Text>
      </View>
      {/* view all comments */}
      <View className="px-4">
        <TouchableOpacity>
          <Text className=" text-gray-500">View all comments</Text>
        </TouchableOpacity>

        {/* dates */}
        <View>
          <Text>{timePosted}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsCard;
