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
import { useReadContract, useSignTypedData, useWriteContract } from "wagmi";
import { erc20Abi } from "viem";
import { bsc } from "viem/chains";
import { useAccount } from "wagmi";
import { useSelectionsStore } from "../store/userSelectionsStore";

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
  const inchRouter =
    "0x111111125421ca6dc452d289314280a0f8842a65" as `0x${string}`;

  const sum = BigInt(10) * BigInt(10) ** BigInt(18);

  const { data: allowance } = useReadContract({
    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" as `0x${string}`,
    abi: erc20Abi,
    functionName: "allowance",
    args: ["0xFe5ae86d4444217167eA87F90A9Aee1dE05B00C8", inchRouter],
    chainId: bsc.id,
  });
  const account = useAccount();

  const selectionStore = useSelectionsStore();
  const { data: hash, writeContract, error } = useWriteContract();
  const { signTypedData, data: signature } = useSignTypedData();
  console.log("Signaturee", signature);

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
            onPress={async () => {
              console.log("Settle up", allowance);
              if (!allowance || allowance < sum) {
                writeContract({
                  address:
                    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" as `0x${string}`,
                  abi: erc20Abi,
                  functionName: "approve",
                  args: ["0x111111125421ca6dc452d289314280a0f8842a65", sum],
                  chain: bsc,
                });
              } else {
                const txHash2 = signTypedData({
                  primaryType: "Order",
                  types: {
                    EIP712Domain: [
                      {
                        name: "name",
                        type: "string",
                      },
                      {
                        name: "version",
                        type: "string",
                      },
                      {
                        name: "chainId",
                        type: "uint256",
                      },
                      {
                        name: "verifyingContract",
                        type: "address",
                      },
                    ],
                    Order: [
                      {
                        name: "salt",
                        type: "uint256",
                      },
                      {
                        name: "maker",
                        type: "address",
                      },
                      {
                        name: "receiver",
                        type: "address",
                      },
                      {
                        name: "makerAsset",
                        type: "address",
                      },
                      {
                        name: "takerAsset",
                        type: "address",
                      },
                      {
                        name: "makingAmount",
                        type: "uint256",
                      },
                      {
                        name: "takingAmount",
                        type: "uint256",
                      },
                      {
                        name: "makerTraits",
                        type: "uint256",
                      },
                    ],
                  },
                  domain: {
                    name: "1inch Aggregation Router",
                    version: "6",
                    chainId: 56n,
                    verifyingContract:
                      "0x111111125421ca6dc452d289314280a0f8842a65",
                  },
                  message: {
                    maker: "0xFe5ae86d4444217167eA87F90A9Aee1dE05B00C8",
                    makerAsset: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
                    takerAsset: "0xda0000d4000015a526378bb6fafc650cea5966f8",
                    makerTraits:
                      62419173104490761595518734106280306931356796375714656674690632578774914301952n,
                    salt: 9445680529265955095560008012004695665255910860498075838760989048188713150507n,
                    makingAmount: 10000000000000000000n,
                    takingAmount: 8579119n,
                    receiver: "0x0000000000000000000000000000000000000000",
                  },
                });

                const data = await fetch(
                  "http://localhost:3000/inch_fusion/send_quote",
                  {
                    method: "POST",
                  },
                );
                console.log("Data", data.body);
              }
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
