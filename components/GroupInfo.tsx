import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function GroupInfo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEEEEF",
            borderRadius: 5,
            paddingHorizontal: 11,
            marginRight: "auto",
          }}
        >
          <Image
            source={require("../assets/misc/arrow-left.png")}
            style={{
              width: 13,
              height: 15,
            }}
          />
          <Text style={{ fontSize: 16, fontFamily: "arame" }}>BACK</Text>
        </View>
        <Image
          source={require("../assets/logo-blue.png")}
          style={{ width: 117, height: 31, marginHorizontal: "auto" }}
        />
      </View>
    </SafeAreaView>
  );
}
