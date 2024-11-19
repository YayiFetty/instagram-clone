import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { CirclePlus } from "lucide-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Button from "../Button";
import * as ImagePicker from 'expo-image-picker';
export default function ProfileUser() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
  
    const onPress = () =>{}
  return (
    <View>
      <View className="flex-1 flex-row items-center  justify-between mt-6 mb-3">
        <TouchableOpacity onPress={pickImage}>
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 70 / 2,
              overflow: "hidden",
              position: "relative",
            }}
          >
           {image &&  <Image
              source={{
                uri: image,
              }} // Replace with actual URL
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />}
          </View>
          <View className="absolute bottom-0 right-0">
            <AntDesign name="pluscircle" size={24} color="blue" />
          </View>
        </TouchableOpacity>

        <View className=" flex-col items-center justify-center">
          <Text className="font-bold ">10</Text>
          <Text className="font-semibold">Posts</Text>
        </View>
        <View className=" flex-col items-center justify-center">
          <Text className="font-bold">999.9k</Text>
          <Text className="font-semibold">Followers</Text>
        </View>
        <View className=" flex-col items-center justify-center">
          <Text className=" font-bold">10.4k</Text>
          <Text className="font-semibold">Following</Text>
        </View>
      </View>
      <View>
        <Text>Yayi Nasir</Text>
        <Text>Smart || Resilent </Text>
      </View>

      <View className="flex-1  flex-row w-full gap-3 my-3 ">
        
            <Button  onPress={onPress}
             title="Edit profile"
             style={{flex:2, paddingHorizontal:20}}/>
        
    
            <Button onPress={onPress} title="Edit profile"
             style={{flex:2, paddingHorizontal:20 }}/>
        
              <Button style={{width:50}}>
                <FontAwesome6 name="user-plus" size={24} color="white" />
              </Button>
              
      </View>
    </View>
  );
}
