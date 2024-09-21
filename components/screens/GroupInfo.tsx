import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { useGroupsStore } from "../../store/groupsStore";
import { useNavigation } from "@react-navigation/native";

export default function GroupInfo({ route }: any) {
  const { groupId } = route.params;

  const nav = useNavigation() as any;
  const store = useGroupsStore();
  const group = store.groups.find((g) => g.id == groupId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEEEEF",
            borderRadius: 5,
            paddingHorizontal: 11,
            marginRight: "auto",
          }}
        >
          <Pressable onPress={() => nav.goBack()}>
            <Image
              source={require("../../assets/misc/arrow-left.png")}
              style={{
                width: 13,
                height: 15,
              }}
            />
            <Text style={{ fontSize: 16, fontFamily: "arame" }}>BACK</Text>
          </Pressable>
        </View>
        <Image
          source={require("../../assets/logo-blue.png")}
          style={{ width: 117, height: 31, marginHorizontal: "auto" }}
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
    </SafeAreaView>
  );
}
