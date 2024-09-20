import React from "react";
import { SafeAreaView, View, Text, Image, ScrollView } from "react-native";
import ChainsChooseItem from "../ChainsChooseItem";

export default function ChainsChoose() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 38,
            width: "80%",
          }}
        >
          <Image source={require("../../assets/logo-blue.png")} />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            CHOOSE THE{" "}
            <Text style={{ color: "#2F28D0", fontWeight: 700 }}> CHAINS </Text>{" "}
            ON WITH YOU WANT TO REFUND YOUR PAYMENTS
          </Text>
        </View>
        <ScrollView
          style={{
            flex: 2,
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 20,
          }}
        >
          <ChainsChooseItem
            image={require("../../assets/ether.png")}
            text={"Ethereum Main Network"}
          />
          <ChainsChooseItem
            image={require("../../assets/ether.png")}
            text={"Ethereum Main Network"}
          />
          <ChainsChooseItem
            image={require("../../assets/ether.png")}
            text={"Ethereum Main Network"}
          />
          <ChainsChooseItem
            image={require("../../assets/ether.png")}
            text={"Ethereum Main Network"}
          />
          <ChainsChooseItem
            image={require("../../assets/ether.png")}
            text={"Ethereum Main Network"}
          />
          <ChainsChooseItem
            image={require("../../assets/ether.png")}
            text={"Ethereum Main Network"}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
