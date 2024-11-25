import React from "react";
import { Tabs } from "expo-router";
import { Clapperboard, Home, Search, SquarePlus } from "lucide-react-native";
import { View, Image, useWindowDimensions } from "react-native";
import useDynamicLayout from "@/src/lib/useDynamic";
import SmallDp from "@/src/components/imagedp/SmallDp";

export default function TabsLayout() {
  const {iconSize} = useDynamicLayout();
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#000",
      tabBarInactiveTintColor: "#888",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 0,
      },
      
    }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} size={iconSize} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <Search color={color} size={iconSize} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color}) => <SquarePlus color={color} size={iconSize} />,
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          tabBarIcon: ({ color }) => <Clapperboard color={color} size={iconSize} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown:false,
          tabBarIcon: ({ color }) => (
           <SmallDp/>
          ),
        }}
      />
    </Tabs>
  );
}
