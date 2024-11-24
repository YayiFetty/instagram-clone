import { View, Image, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import useDynamicLayout from '@/src/lib/useDynamic';

type ImageUrlProps = {
  imageUrl: string;
};

export default function ImageDp({ imageUrl }: ImageUrlProps) {
  const { widthS } = useDynamicLayout(); // Get dynamic width

  const gradientSize = widthS * 0.5; // Outer container size
  const innerContainerSize = gradientSize * 0.9; // Slightly smaller for the inner container
  const imageSize = innerContainerSize * 0.9; // Smaller size for the image container

  return (
    <LinearGradient
      colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
      style={{
        width: gradientSize,
        height: gradientSize,
        borderRadius: gradientSize / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: innerContainerSize,
          height: innerContainerSize,
          borderRadius: innerContainerSize / 2,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
            overflow: 'hidden',
            backgroundColor: 'white', // Background to separate image from gradient border
          }}
        >
          <Image
            source={{ uri: imageUrl }}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
      </View>
    
    </LinearGradient>
  );
}
