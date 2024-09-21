import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  billToDebts,
  calcOweIsOwed,
  useGroupsStore,
} from "../../store/groupsStore";
import { useNavigation } from "@react-navigation/native";
import PaymentItem from "../PaymentItem";
import LogoBlueSVG from "../../assets/logo-blue-svg.svg";
import NavigationBar from "../NavigationBar";
import styles from "react-native-webview/lib/WebView.styles";
import ParticipantItem from "../ParticipantItem";
import { useReadContract, useSignTypedData, useWriteContract } from "wagmi";
import { writeContract } from "viem/actions";
import { useSelectionsStore } from "../../store/userSelectionsStore";
import { erc20Abi } from "viem";
import { bsc } from "viem/chains";

export default function GroupInfo({ route }: any) {
  const { groupId } = route.params;

  const nav = useNavigation() as any;
  const store = useGroupsStore();
  const group = store.groups.find((g) => g.id == groupId);
  const [page, setPage] = useState<"payments" | "participants">("payments");
  const selectionStore = useSelectionsStore();
  const { data: hash, writeContract, error } = useWriteContract();
  const { signTypedData, data: signature } = useSignTypedData();
  console.log("Signaturee", signature);

  const inchRouter =
    "0x111111125421ca6dc452d289314280a0f8842a65" as `0x${string}`;

  const sum = BigInt(10) * BigInt(10) ** BigInt(18);

  const { data: allowance } = useReadContract({
    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" as `0x${string}`,
    abi: erc20Abi,
    functionName: "allowance",
    args: ["0x06d562bca72f4857e9c1998027f8339b63ac9403", inchRouter],
    chainId: bsc.id,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 30,
        }}
      >
        <Pressable
          onPress={() => nav.goBack()}
          style={{
            flexDirection: "row",
            gap: 10,
            paddingVertical: 11,
            paddingHorizontal: 19,
            backgroundColor: "#EEEEEF",
            borderRadius: 5,
            marginRight: "auto",
          }}
        >
          <Image
            source={require("../../assets/misc/arrow-left.png")}
            style={{
              width: 20,
              height: 18,
            }}
          />
          <Text style={{ fontSize: 16, fontFamily: "Arame" }}>BACK</Text>
        </Pressable>
        <LogoBlueSVG
          width={127}
          height={47}
          style={{ marginRight: "32%", width: 117, height: 31 }}
        />
      </View>
      <View
        style={{
          marginTop: 17,
          backgroundColor: "#EEEEEF",
          borderRadius: 5,
          flexDirection: "column",
          gap: 10,
          padding: 10,
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Arame",
          }}
        >
          {group?.name}
        </Text>
        <View style={{ flexDirection: "column", gap: 3 }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontSize: 14, fontFamily: "Roboto" }}>
              You are owed:
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "Roboto" }}>500$</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontSize: 14, fontFamily: "Roboto" }}>You owe:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Roboto" }}>50.25$</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#2F28D0",
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 14,
            }}
          >
            <Text
              style={{ fontSize: 18, fontFamily: "Arame", color: "white" }}
              onPress={async () => {
                console.log("Settle up");
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
                      maker: "0x06d562bca72f4857e9c1998027f8339b63ac9403",
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

                  const data = await fetch('http://localhost:3000/inch_fusion/send_quote', {
                    method: 'POST'
                  })
                  console.log('Data', data.body)
                }
              }}
            >
              SETTLE UP p{hash} {error?.message} {signature}
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: 5,
              paddingVertical: 7,
              paddingHorizontal: 11,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Arame",
              }}
            >
              DELETE
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          marginHorizontal: 15,
          gap: 15,
        }}
      >
        <Pressable
          style={{
            backgroundColor: page === "payments" ? "black" : "#EEEEEF",
            borderRadius: 5,
            paddingVertical: 8,
            paddingHorizontal: 43,
            opacity: page === "payments" ? 1 : 0.6,
          }}
          onPress={() => setPage("payments")}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Arame",
              color: page === "payments" ? "white" : "#2F28D0",
              fontWeight: "bold",
            }}
          >
            PAYMENTS
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: page === "participants" ? "black" : "#EEEEEF",
            borderRadius: 5,
            paddingVertical: 8,
            paddingHorizontal: 22,
            opacity: page === "participants" ? 1 : 0.6,
          }}
          onPress={() => setPage("participants")}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Arame",
              color: page === "participants" ? "white" : "#2F28D0",
              fontWeight: "bold",
            }}
          >
            PARTICIPANTS
          </Text>
        </Pressable>
      </View>
      {page === "payments" && (
        <View style={{ marginTop: 10, marginHorizontal: 15 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Roboto",
              fontWeight: "medium",
              marginVertical: 10,
            }}
          >
            September 2024
          </Text>
          <ScrollView
            style={{
              height: "100%",
            }}
            contentContainerStyle={{
              rowGap: 10,
            }}
          >
            {group?.bills.map((b) => (
              <PaymentItem
                date={{ number: 21, month: "SEP" }}
                place={b.name}
                paidBy={b.payerAddress}
                billAmount={134}
                userOwe={22}
              />
            ))}
          </ScrollView>
        </View>
      )}
      {page === "participants" && (
        <ScrollView
          style={{
            height: "100%",
            marginTop: 15,
          }}
          contentContainerStyle={{
            rowGap: 10,
          }}
        >
          {group?.participants.map((item, index) => {
            const debts = group.bills.flatMap((x) => billToDebts(x));
            const oweOwed = calcOweIsOwed(debts, item);
            const avatar = index > 15 ? 1 : index;
            return (
              <ParticipantItem
                participantAddr={item}
                oweOwed={oweOwed}
                avatarId={avatar}
              ></ParticipantItem>
            );
          })}
        </ScrollView>
      )}
      <NavigationBar groupId={groupId}></NavigationBar>
    </SafeAreaView>
  );
}
