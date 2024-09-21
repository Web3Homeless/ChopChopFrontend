import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useGroupsStore } from "../../store/groupsStore";
import { useNavigation } from "@react-navigation/native";
import PaymentItem from "../PaymentItem";
import LogoBlueSVG from "../../assets/logo-blue-svg.svg";
import NavigationBar from "../NavigationBar";

export default function GroupInfo({ route }: any) {
  const { groupId } = route.params;

  const nav = useNavigation() as any;
  const store = useGroupsStore();
  const group = store.groups.find((g) => g.id == groupId);
  const [page, setPage] = useState<"payments" | "participants">("payments");

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
            <Text style={{ fontSize: 18, fontFamily: "Arame", color: "white" }}>
              SETTLE UP
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
            <PaymentItem
              date={{ number: 24, month: "SEP" }}
              place={"Millenium Hotel Bar"}
              paidBy={"Alexander Sav"}
              billAmount={134}
              userOwe={22}
            />
            <PaymentItem
              date={{ number: 24, month: "SEP" }}
              place={"Millenium Hotel Bar"}
              paidBy={"Alexander Sav"}
              billAmount={134}
              userOwe={22}
            />
            <PaymentItem
              date={{ number: 24, month: "SEP" }}
              place={"Millenium Hotel Bar"}
              paidBy={"Alexander Sav"}
              billAmount={134}
              userOwe={22}
            />
            <PaymentItem
              date={{ number: 24, month: "SEP" }}
              place={"Millenium Hotel Bar"}
              paidBy={"Alexander Sav"}
              billAmount={134}
              userOwe={22}
            />
          </ScrollView>
        </View>
      )}
      {page === "participants" && (
        <Text>{group?.participants.map((item, index) => item)}</Text>
      )}
      <NavigationBar groupId={groupId}></NavigationBar>
    </SafeAreaView>
  );
}
