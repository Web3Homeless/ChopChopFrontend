import React from "react";
import { Text, View, Image, Pressable } from "react-native";

export default function ChainsChooseItem({
  image,
  text,
  isSelected,
  setIsSelected,
}: {
  image: any;
  text: any;
  isSelected: boolean;
  setIsSelected: () => void;
}) {
  return (
    <Pressable
      style={{
        width: "100%",
        backgroundColor: isSelected ? "#D3D1F6" : "#EEEEEF",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderRadius: 5,
      }}
      onPress={setIsSelected}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 19,
        }}
      >
        <Image
          source={image}
          style={{ width: 34, height: 34, objectFit: "contain" }}
        />
        <Text
          style={{
            fontSize: 18,
            paddingVertical: 20,
          }}
        >
          {text}
        </Text>
      </View>
      {isSelected && (
        <Image
          source={require("../assets/misc/check-mark.png")}
          style={{
            width: 28,
            height: 18,
            objectFit: "contain",
            marginRight: 22,
          }}
        />
      )}
    </Pressable>
  );
}
