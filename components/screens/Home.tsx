import React from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import LogoSVG from "../../assets/logo-svg.svg";

export default function Home({ navigation }: any) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#2F28D0",
      }}
    >
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogoSVG width={200} height={100} />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto",
            color: "white",
          }}
        >
          Pay off without paying attention
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 5,
            paddingVertical: 16,
          }}
        >
          <Button
            title={"START"}
            color={"#2F28D0"}
            onPress={() => {
              navigation.navigate("ChainsChoose", { name: "ChainsChoose" });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
