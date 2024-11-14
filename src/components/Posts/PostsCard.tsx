import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import {
  Bookmark,
  ExternalLink,
  Heart,
  MessageCircle,
} from "lucide-react-native";
import moment from "moment";
import PostHeader from "./PostHeader";
import { ResizeMode, Video } from "expo-av"; // Import Video component from expo-av
import { router } from "expo-router";
import CommentModal from "../Comment/CommentModal";

const PostsCard = ({
  imageDp,
  mediaUrl,
  username,
  likedBy,
  isVerified,
  likes,
  location,
  caption,
  createdAt,
  mediaType,
  onCommentPress,
}: Post) => {
  const [timePosted, setTimePosted] = useState("");
  const videoRef = useRef(null); // Ref to control video playback
  
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

    return minsDiff <= 0
      ? "Just now"
      : minsDiff === 1
      ? `${minsDiff} min ago`
      : `${minsDiff} mins ago`;
  };

  useEffect(() => {
    setTimePosted(getTimePosted());

    const interval = setInterval(() => {
      setTimePosted(getTimePosted());
    }, 30000);

    return () => clearInterval(interval);
  }, [createdAt]);

  const onMorePress = () => {
    console.log("More options pressed");
    // Add any functionality you need here for when more options are pressed
  };


  return (
    <View className="flex-1 flex-col relative w-full">
      {/* Post header inside video or outside image */}
      {mediaType === "video" ? (
        <View className=" relative aspect-[16/9]">
          <View className="absolute top-0 left-0 right-0 z-10">
            <PostHeader
              isVerified={isVerified}
              location={location}
              username={username}
              imageDp={imageDp}
              onMorePress={onMorePress}
            />
          </View>
          <Video
            ref={videoRef}
            source={ require ("../../assets/trtr.mp4") }
            style={{ width: "100%", height: "100%" }}
            resizeMode={ResizeMode.COVER}
            shouldPlay={true}
            isLooping={true}
          />
        </View>
      ) : (
        <View>
          <PostHeader
            isVerified={isVerified}
            location={location}
            username={username}
            imageDp={imageDp}
            onMorePress={onMorePress}
          />
          {/* Post Image */}
          <View className="aspect-[4/3]">
            <Image
              source={{ uri: mediaUrl }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
      )}

      {/* Likes, comments, share, bookmark */}
      <View className="flex flex-row justify-between items-center my-2 px-4">
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-row items-center gap-1">
            <Heart size={25} color="#000" />
            <Text className="text-[11px]">{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCommentPress} className="flex-row items-center gap-1">
            <MessageCircle size={25} color="#000" />
            <Text className="text-[11px]">5</Text>
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

      {/* Liked by section */}
      <View className="px-4">
        <Image source={{ uri: imageDp }} />
        <View className="flex-row gap-1">
          <Image source={{ uri: imageDp }} className="w-6 h-6 rounded-full" />
          <Text>Liked by {likedBy} </Text>
        </View>
      </View>

      {/* Username and caption */}
      <View className="px-4 flex-row gap-2">
        <Text className="text-sm font-semibold">{username}</Text>
        <Text className="text-sm">{caption}</Text>
      </View>

      {/* View all comments */}
      <View className="px-4 mb-3">
        <TouchableOpacity>
          <Text className="text-gray-500">View all comments</Text>
        </TouchableOpacity>

        {/* Time posted */}
        <View>
          <Text>{timePosted}</Text>
        </View>
      </View>

       
        
    </View>
  );
};

export default PostsCard;
