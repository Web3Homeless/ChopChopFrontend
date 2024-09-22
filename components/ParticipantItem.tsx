import React from "react";
import { View, Text, Image } from "react-native";
import { mainnet } from "viem/chains";
import { useEnsName } from "wagmi";

type Props = {
  avatarId: number;
  participantAddr: string;
  oweOwed: {
    userOwe: number;
    userIsOwed: number;
  };
};

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function ParticipantItem({
  avatarId,
  participantAddr,
  oweOwed,
}: Props) {
  const { data: name } = useEnsName({
    address: participantAddr as any,
    chainId: mainnet.id,
  });

  return (
    <View
      style={{
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={require(`../assets/avatars/avatar-2.png`)}
        style={{
          width: 44,
          height: 44,
          borderRadius: 999,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Roboto",
          color: "black",
          fontWeight: "medium",
          marginLeft: 20,
          marginRight: "auto",
        }}
      >
        {name || shortenAddress(participantAddr)}
      </Text>
      <View style={{ flexDirection: "column", gap: 3 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Roboto",
          }}
        >
          {oweOwed.userOwe ? "You owe" : "Owes you"}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Roboto",
            textAlign: "right",
          }}
        >
          {oweOwed.userOwe ? oweOwed.userOwe : oweOwed.userIsOwed} $
        </Text>
      </View>
    </View>
  );
}
