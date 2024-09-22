import { Text, View } from "react-native";
import React from "react";
import { mainnet } from "viem/chains";
import { useEnsName } from "wagmi";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function PaymentItem({
  date,
  place,
  paidBy,
  billAmount,
  userOwe,
}: {
  date: { number: number; month: string };
  place: string;
  paidBy: string;
  billAmount: number;
  userOwe: number;
}) {
  const { data: ensName } = useEnsName({
    address: paidBy as any,
    chainId: mainnet.id,
  });

  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <View
        style={{
          backgroundColor: "#EEEEEF",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          width: 54,
          height: 54,
          gap: 4,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Arame",
            color: "black",
            opacity: 0.6,
          }}
        >
          {date.number}TH
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Arame",
            color: "black",
            opacity: 0.6,
          }}
        >
          {date.month}
        </Text>
      </View>
      <View style={{ flexDirection: "column", gap: 2, marginRight: "auto" }}>
        <Text
          style={{
            color: "#2F28D0",
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: "medium",
          }}
        >
          {place}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Roboto",
              color: "#2F28D0",
            }}
          >
            Paid:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Roboto",
              fontWeight: "medium",
              color: "black",
            }}
          >
            {ensName || shortenAddress(paidBy)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Roboto",
              color: "#2F28D0",
            }}
          >
            Bill:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Roboto",
              fontWeight: "medium",
              color: "black",
            }}
          >
            {billAmount}$
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: "medium",
          }}
        >
          You owe
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: "medium",
            textAlign: "right",
          }}
        >
          {userOwe} $
        </Text>
      </View>
    </View>
  );
}
