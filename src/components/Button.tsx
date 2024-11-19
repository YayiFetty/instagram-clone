import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import React from "react";

type ButtonProps = {
    title?: string; 
    onPress?: () => void; 
    children?: React.ReactNode; 
    style?:StyleProp<ViewStyle>;
  };

export default function Button({ title, onPress, children ,style}:ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
            backgroundColor:"#334155",
            paddingHorizontal:10,
            borderRadius:15,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
        
        },
        style,
      ]}
      onPress={onPress} 
    >
      {children && <>{children}</>}
      {title && (
        <Text className="text-white font-semibold">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
