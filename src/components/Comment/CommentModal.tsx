import React, { useCallback, useRef, useMemo } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import CommentBox from "./CommentBox";
import { useApp } from "@/src/context/appContext";

interface CommentModalProps{
  isVisible:boolean;
  onClose: () => void;
}

const CommentModal:React.FC<CommentModalProps>  = ({ isVisible, onClose }) => {
  const {username, isVerified, imageDp, location} = useApp();
  const sheetRef = useRef(null)

  const data = useMemo(
    () => Array(50).fill(0).map((_, index) => `Comment ${index + 1}`),
    []
  )

  const snapPoints = useMemo(() => ["100%"], [])

  const handleSheetChange = useCallback((index) => {
    if (index === -1) onClose()
  }, [onClose])

  const renderItem = useCallback(
    ({ item  }:{item:string}) => (
      <CommentBox username={username}/>
    ),
    []
  )

  return (
    isVisible && (
      <GestureHandlerRootView className="absolute inset-0 z-10">
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          enablePanDownToClose
          onChange={handleSheetChange}
          index={0}
          style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        >
          <BottomSheetFlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={renderItem}
            contentContainerStyle={{ backgroundColor: "white", paddingHorizontal: 16 }}
          />
        </BottomSheet>
      </GestureHandlerRootView>
    )
  )
}

export default CommentModal;