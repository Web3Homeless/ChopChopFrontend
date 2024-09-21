import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
import NavigationBar from "../NavigationBar";
import { useNavigation } from "@react-navigation/native";
import PaymentItem from "../PaymentItem";
import { useGroupsStore } from "../../store/groupsStore";
import { TextInput } from "react-native-gesture-handler";

export default function AddExpense({ route }: any) {
  const nav = useNavigation() as any;

  const { groupId } = route.params;

  const groupStore = useGroupsStore();
  const group = groupStore.groups.find((g) => g.id == groupId);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

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
            fontSize: 30,
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
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#2F28D0" }}
          />
        </View>
      </View>
      <Pressable
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
