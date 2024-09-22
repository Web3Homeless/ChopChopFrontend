import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import LogoSmallSVG from "../../assets/logo-small-svg.svg";
import SettleUpNetwork from "../SettleUpNetwork";
import { Chains } from "../../utils/constants";
import ethereumImg from "../../assets/chains/ether.png";
import optimismImg from "../../assets/chains/optimism.png";
import zkSyncImg from "../../assets/chains/zksync.png";
import baseImg from "../../assets/chains/base.png";
import flowImg from "../../assets/chains/flow.png";
import bnbImg from "../../assets/chains/bnb.png";
import polygonImg from "../../assets/chains/polygon.png";
import gnosisImg from "../../assets/chains/gnosis.png";

const chains = [
  ethereumImg,
  optimismImg,
  zkSyncImg,
  baseImg,
  flowImg,
  bnbImg,
  polygonImg,
  gnosisImg,
];

const texts = [
  "Ethereum",
  "Optimism",
  "zkSync",
  "Base",
  "Flow",
  "BNB",
  "Polygon",
  "Gnosis",
];

export default function SettleUp() {
  const userFavoriteNetwork = Chains.bnb;


  return (
    <SafeAreaView
      style={{
        width: "100%",
        marginHorizontal: 15,
      }}
    >
      <LogoSmallSVG width={117} height={90} style={{ marginVertical: 35 }} />
      <View style={{ flexDirection: "column", gap: 7 }}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: "Arame",
          }}
          onPress={async () => {
            
          }}
        >
          SETTLE UP
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            backgroundColor: "#D9D9D9",
            borderRadius: 5,
            alignItems: "center",
            paddingHorizontal: 5,
            paddingVertical: 8,
            width: "85%",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Arame",
            }}
          >
            YOUR CHAIN
          </Text>
          <Image source={chains[userFavoriteNetwork]} width={19} height={19} />
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Arame",
            }}
          >
            {texts[userFavoriteNetwork]}
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          marginTop: 15,
          marginBottom: "20%",
        }}
        contentContainerStyle={{
          rowGap: 30,
        }}
      >
        <SettleUpNetwork
          network={Chains.bnb}
          isSettled={true}
          userFavoriteNetwork={userFavoriteNetwork}
          items={[
            {
              userAddress: "Alexander Savinchuk",
              amount: 100,
            },
          ]}
        />
        <SettleUpNetwork
          network={Chains.ethereum}
          isSettled={false}
          userFavoriteNetwork={userFavoriteNetwork}
          items={[
            {
              userAddress: "Andrey",
              amount: 100,
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
