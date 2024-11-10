import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowBigDown, ChevronDown, Heart, MessageCircleCode, MoveDown } from 'lucide-react-native';
import { router, useNavigation } from 'expo-router';

const CustomHeader = () => {
  
  const msg = () => {
    console.log("click")
    router.push("/home/messagescreen")
  }
  return (
    <View className='flex-row justify-between items-center px-4 py-2 border-b border-gray-200'>
      
        <View className='flex-row items-end'>
         <TouchableOpacity>
         <Text className='text-3xl'>Instagram</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <ChevronDown size={20} color="#000" /> 
         </TouchableOpacity>
        </View>
    

      <View className='flex-row gap-4'>
        <TouchableOpacity>
        <Heart size={25} color="#000" />
          </TouchableOpacity>
        <TouchableOpacity onPress={msg}>
        <MessageCircleCode size={25} color="#000"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
