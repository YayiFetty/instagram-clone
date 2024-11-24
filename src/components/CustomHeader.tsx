import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowBigDown, ChevronDown, Heart, MessageCircleCode, MoveDown } from 'lucide-react-native';
import { router, useNavigation } from 'expo-router';
import useDynamicLayout from '../lib/useDynamic';

const CustomHeader = () => {
  const {iconSize, padding} = useDynamicLayout();
  const msg = () => {
    console.log("click")
    router.push("/home/messagescreen")
  }
  return (
    <View style={{paddingHorizontal:padding}} className='flex-row justify-between items-center border-b border-gray-200'>
      
        <View className='flex-row items-end'>
         <TouchableOpacity>
         <Text className='text-3xl'>Instagram</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <ChevronDown size={iconSize} color="#000" /> 
         </TouchableOpacity>
        </View>
    

      <View className='flex-row gap-4'>
        <TouchableOpacity>
        <Heart size={iconSize} color="#000" />
          </TouchableOpacity>
        <TouchableOpacity onPress={msg}>
        <MessageCircleCode size={iconSize} color="#000"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
