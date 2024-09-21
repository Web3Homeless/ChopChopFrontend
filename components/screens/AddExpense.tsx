import React, { useState } from "react";
import { SafeAreaView, Image, View, Text, Pressable } from "react-native";
import NavigationBar from "../NavigationBar";
import { useNavigation } from "@react-navigation/native";
import { useGroupsStore } from "../../store/groupsStore";
import { TextInput } from "react-native-gesture-handler";
import { useAccount } from "wagmi";
import PaymentRow from "../friends/PaymentRow";

export default function AddExpense({ route }: any) {
  const nav = useNavigation() as any;
  const account = useAccount();

  const { groupId } = route.params;

  const groupStore = useGroupsStore();
  const group = groupStore.groups.find((g) => g.id == groupId);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [spent, setSpent] = useState<number[]>(
    group?.participants.map(() => 0) || [],
  );

  function onAddPayment() {
    group?.bills.push({
      payerAddress: account.address!,
      spenersAddresses: group?.participants || [],
      spentAmounts: spent,
      name: description,
      sum: Number(amount),
    });
    groupStore.setGroups(groupStore.groups);
    alert("Payment added!");
    nav.goBack();
  }

  function updateSpent(index: number, value: string) {
    const updatedSpent = [...spent];
    updatedSpent[index] = parseFloat(value) || 0;
    setSpent(updatedSpent);
  }

  console.log(group?.participants);

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", gap: 20 }}>
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
        <Image
          source={require("../../assets/logo-blue.png")}
          style={{ width: 117, height: 31, marginRight: "32%" }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Arame",
          }}
        >
          Add an expense IN GROUP
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          gap: 10,
          backgroundColor: "#E6E6E6",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto",
          }}
        >
          {group?.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto",
          }}
        >
          Today 22th September
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          gap: 10,
          backgroundColor: "#E6E6E6",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: "80%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 5,
          }}
        >
          <TextInput
            placeholder="Enter Description"
            style={{
              color: "#2F28D0",
              fontSize: 20,
              fontFamily: "roboto",
              paddingVertical: 5,
            }}
            placeholderTextColor={"rgba(47,40,208,0.6)"}
            onChangeText={(text) => setDescription(text)}
          />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#2F28D0" }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "80%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 5,
          }}
        >
          <TextInput
            placeholder="Enter full sum of the bill"
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
        <View
          style={{
            width: "80%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          {group?.participants.map((p, index) => (
            <PaymentRow
              key={index}
              address={p}
              setAmount={(value) => updateSpent(index, value)}
            ></PaymentRow>
          ))}
        </View>
      </View>
      <Pressable
        onPress={() => onAddPayment()}
        style={{
          backgroundColor: "#2F28D0",
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 14,
          height: 50,
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: "Arame", color: "white" }}>
          Add Payment
        </Text>
      </Pressable>
      <NavigationBar groupId={groupId}></NavigationBar>
    </SafeAreaView>
  );
}
