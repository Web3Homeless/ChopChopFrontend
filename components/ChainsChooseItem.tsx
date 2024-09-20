import React from "react";
import { Text, View, Image } from "react-native";

export default function ChainsChooseItem({
  image,
  text,
}: {
  image: any;
  text: any;
}) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#EFEEF4",
        display: "flex",
        flexDirection: "row",
        gap: 19,
      }}
    >
      <Image source={image} style={{ width: 34, height: 34 }} />
      <Text
        style={{
          fontSize: 18,
          paddingVertical: 20,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
