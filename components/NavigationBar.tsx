import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AccountSVG from "../assets/navigation/account-svg.svg";
import ContactSVG from "../assets/navigation/contacts-svg.svg";
import GroupSVG from "../assets/navigation/group-svg.svg";
import HistorySVG from "../assets/navigation/history-svg.svg";
import ButtonAddSvg from "../assets/navigation/button-add-svg.svg";

type Props = {
  groupId?: number;
};

export default function NavigationBar({ groupId }: Props) {
  const route = useRoute() as any;
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#2F28D0",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        paddingBottom: "5%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 30,
          marginRight: "auto",
          paddingLeft: 15,
          paddingTop: 15,
        }}
      >
        <Pressable
          onPress={() =>
            (navigation as any).navigate("Groups", {
              name: "Groups",
            })
          }
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              padding: 5,
            }}
          >
            <GroupSVG width={26} height={26} />
            <Text
              style={{ color: "white", fontSize: 12, fontWeight: "semibold" }}
            >
              Groups
            </Text>
            {route.name == "Groups" && (
              <View
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: "white",
                }}
              />
            )}
          </View>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            padding: 5,
          }}
        >
          <ContactSVG width={26} height={26} />
          <Text
            style={{ color: "white", fontSize: 12, fontWeight: "semibold" }}
          >
            Contacts
          </Text>
          {route.name == "Contacts" && (
            <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: "white",
              }}
            />
          )}
        </Pressable>
      </View>
      <Pressable
        style={{
          zIndex: 2,
          position: "absolute",
          top: "-50%",
          left: "40%",
        }}
        onPress={() => {
          // @ts-ignore
          navigation.navigate("AddExpense", {
            groupId: groupId,
          });
        }}
      >
        <ButtonAddSvg width={81} height={81} />
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          gap: 30,
          marginLeft: "auto",
          paddingRight: 15,
          paddingTop: 15,
        }}
      >
        <Pressable
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            padding: 5,
          }}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("History");
          }}
        >
          <HistorySVG width={26} height={26} />
          <Text
            style={{ color: "white", fontSize: 12, fontWeight: "semibold" }}
          >
            History
          </Text>
          {route.name == "History" && (
            <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: "white",
              }}
            />
          )}
        </Pressable>
        <Pressable
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            padding: 5,
          }}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("AccountProfile");
          }}
        >
          <AccountSVG width={26} height={26} />
          <Text
            style={{ color: "white", fontSize: 12, fontWeight: "semibold" }}
          >
            Account
          </Text>
          {route.name == "AccountProfile" && (
            <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: "white",
              }}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}
