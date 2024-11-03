import React from "react";
import { Tabs } from "expo-router";
import { Clapperboard, Home, Search, SquarePlus } from "lucide-react-native";
import { View, Image } from "react-native";

export default function TabsLayout() {
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
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <Search color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color}) => <SquarePlus color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          tabBarIcon: ({ color }) => <Clapperboard color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ height: 25, width: 25, borderRadius: 25 / 2, overflow: "hidden" }}>
              <Image
                source={{ uri: "https://pbs.twimg.com/profile_images/1794692732474003456/PiaTQJ5S_400x400.jpg" }}  // Replace with actual URL
                style={{ height: 25, width: 25 }}
                resizeMode="cover"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
