import { Image, Pressable, Text, View } from "react-native";
import SettleUpUserItem from "./SettleUpUserItem";
import React from "react";
import { Chains } from "../utils/constants";
import ethereumImg from "../assets/chains/ether.png";
import optimismImg from "../assets/chains/optimism.png";
import zkSyncImg from "../assets/chains/zksync.png";
import baseImg from "../assets/chains/base.png";
import flowImg from "../assets/chains/flow.png";
import bnbImg from "../assets/chains/bnb.png";
import polygonImg from "../assets/chains/polygon.png";
import gnosisImg from "../assets/chains/gnosis.png";

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

export default function SettleUpNetwork({
  network,
  userFavoriteNetwork,
  items,
  isSettled,
}: {
  network: Chains;
  userFavoriteNetwork: Chains;
  items: {
    userAddress: string;
    amount: number;
  }[];
  isSettled: boolean;
}) {
  return (
    <View
      style={{
        borderRadius: 5,
        flexDirection: "column",
        width: "90%",
      }}
    >
      <View
        style={{
          backgroundColor: "#2F28D0",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          paddingVertical: 5,
          gap: 5,
        }}
      >
        <Image source={chains[network]} width={34} height={34} />
        <Text style={{ fontSize: 18, fontFamily: "Roboto", color: "white" }}>
          {texts[network]}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#EEEEEF",
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 15,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Roboto",
              fontWeight: "medium",
            }}
          >
            User
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Roboto",
              fontWeight: "medium",
            }}
          >
            Amount
          </Text>
        </View>
        {items.map((item, index) => (
          <SettleUpUserItem
            key={index}
            userAddress={item.userAddress}
            amount={item.amount}
          />
        ))}
        <Pressable
          style={{
            borderRadius: 5,
            backgroundColor: isSettled ? "#D9D9D9" : "#2F28D0",
            paddingVertical: 11,
            paddingHorizontal: 5,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
          disabled={isSettled}
        >
          <Text
            style={{
              color: isSettled ? "black" : "white",
              fontSize: 18,
              fontFamily: "Arame",
            }}
          >
            {isSettled
              ? "SETTLED"
              : network == userFavoriteNetwork
                ? "SETTLE UP"
                : "SWAP & SETTLE UP"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
