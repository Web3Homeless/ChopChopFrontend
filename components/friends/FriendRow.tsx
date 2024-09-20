import React from "react";
import { useEnsName, useEnsText } from "wagmi";
import { Text, Image } from "react-native";
import { mainnet } from "wagmi/chains";

type Props = {};

export default function FriendRow({}: Props) {
  const { data, isError, isLoading, error } = useEnsName({
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  });

  if (isLoading) return <Text>Fetching name…</Text>;

  if (isError) return <Text>Error fetching name {error.message}</Text>;

  console.log("FUCK");
  console.log({ data });

  return <Text>Name: {data}</Text>;
}
