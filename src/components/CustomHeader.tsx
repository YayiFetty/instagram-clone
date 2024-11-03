import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { ArrowBigDown, ChevronDown, Heart, MessageCircleCode, MoveDown } from 'lucide-react-native';

const CustomHeader = () => {
  return (
    <View className='flex-row justify-between items-center px-4 py-2 border-b border-gray-200'>
      <TouchableWithoutFeedback>
        <View className='flex-row items-end'>
          <Text className='text-3xl'>Instagram</Text>
          <ChevronDown size={20} color="#000" /> {/* Change color as needed */}
        </View>
      </TouchableWithoutFeedback>

      <View className='flex-row gap-4'>
        <Heart size={25} color="#000" /> {/* Change color as needed */}
        <MessageCircleCode size={25} color="#000" /> {/* Change color as needed */}
      </View>
    </View>
  );
};

export default CustomHeader;
