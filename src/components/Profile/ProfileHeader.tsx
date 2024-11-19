import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useApp } from "@/src/context/appContext";
import {
  ArrowDown,
  AtSign,
  ChevronDown,
  Menu,
  SquarePlus,
} from "lucide-react-native";

export default function ProfileHeader() {
  return (
    <View className="flex flex-row justify-between items-center">
      <View className="flex-row gap-2 justify-center items-center">
        <Text className=" text-xl  ">yayifetty</Text>
        <TouchableOpacity>
        <ChevronDown size={24} />
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-3 justify-center items-center">
        <TouchableOpacity>
          <AtSign size={24}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <SquarePlus size={24}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
