import { SafeAreaView, View, Text, Image } from "react-native";

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
        <Image source={require("../../assets/logo-blue.png")} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            color: "black",
          }}
        >
          CHOOSE THE CHAINS ON WITH YOU WANT TO REFUND YOUR PAYMENTS
        </Text>
      </View>
    </SafeAreaView>
  );
}
