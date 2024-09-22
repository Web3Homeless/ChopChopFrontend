import React from "react";
import { View, Text, TextInput } from "react-native";
import { mainnet } from "viem/chains";
import { useAccount, useEnsName } from "wagmi";

type Props = {
  address: string;
  setAmount: (value: string) => void;
};

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function PaymentRow({ address, setAmount }: Props) {
  const { data: name } = useEnsName({
    address: address as any,
    chainId: mainnet.id,
  });

  return (
    <View
      style={{
        gap: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Roboto",
        }}
      >
        {name || shortenAddress(address)}
      </Text>
      <TextInput
        placeholder="0.00"
        style={{
          color: "#2F28D0",
          fontSize: 20,
          fontFamily: "roboto",
          paddingVertical: 5,
        }}
        placeholderTextColor={"rgba(47,40,208,0.6)"}
        onChangeText={(text) => setAmount(text)}
      />
    </View>
  );
}
