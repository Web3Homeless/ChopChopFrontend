import React from "react";
import { SafeAreaView, View, Image } from "react-native";

export default function Groups() {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={require("../../assets/logo-little.png")}
          style={{
            width: 117,
            height: 31,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
