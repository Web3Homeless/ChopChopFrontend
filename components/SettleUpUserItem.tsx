import { Image, Text, View } from "react-native";
import React from "react";
import avatar1 from "../assets/avatars/avatar-1.png";
import avatar2 from "../assets/avatars/avatar-2.png";
import avatar3 from "../assets/avatars/avatar-3.png";
import avatar4 from "../assets/avatars/avatar-4.png";
import avatar5 from "../assets/avatars/avatar-5.png";
import avatar6 from "../assets/avatars/avatar-6.png";
import avatar7 from "../assets/avatars/avatar-7.png";
import avatar8 from "../assets/avatars/avatar-8.png";
import avatar9 from "../assets/avatars/avatar-9.png";
import avatar10 from "../assets/avatars/avatar-10.png";
import avatar11 from "../assets/avatars/avatar-11.png";
import avatar12 from "../assets/avatars/avatar-12.png";
import avatar13 from "../assets/avatars/avatar-13.png";
import avatar14 from "../assets/avatars/avatar-14.png";
import avatar15 from "../assets/avatars/avatar-15.png";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
];

export default function SettleUpUserItem({
  userAddress,
  amount,
}: {
  userAddress: string;
  amount: number;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 15,
        marginVertical: 10,
      }}
    >
      <Image
        source={avatars[amount.toString()[0]]}
        width={44}
        height={44}
        style={{ borderRadius: 999, width: 44, height: 44 }}
      />
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Roboto",
          marginLeft: 10,
        }}
      >
        {userAddress}
      </Text>
      <Text style={{ marginLeft: "auto", fontSize: 18, fontFamily: "Roboto" }}>
        {amount} $
      </Text>
    </View>
  );
}
