import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import GroupsItem from "../GroupsItem";
import NavigationBar from "../NavigationBar";
import { RootStackParamList } from "../../types/root-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function Groups({ navigation }: any) {
  const groups = [
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: false,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: true,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: false,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: false,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: true,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: false,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: false,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: false,
    },
    {
      id: "somegroup",
      groupName: "Group Name 1",
      owned: 500,
      owe: 1500.22,
      isSettled: false,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/logo-little.png")}
        style={{
          width: 117,
          height: 31,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginVertical: 35,
          marginLeft: 10,
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: 500,
            marginBottom: 12,
            width: "90%",
          }}
        >
          GROUPS
        </Text>
        <ScrollView
          style={{
            flex: 2,
            width: "95%",
            display: "flex",
            flexDirection: "column",
            paddingVertical: 10,
            marginBottom: "20%",
          }}
          contentContainerStyle={{
            rowGap: 10,
            paddingBottom: "18%",
          }}
          showsVerticalScrollIndicator={false}
        >
          {groups.map((item, index) => (
            <GroupsItem
              key={index}
              id={item.id}
              groupName={item.groupName}
              owned={item.owned}
              owe={item.owe}
              isSettled={item.isSettled}
            />
          ))}
          <Pressable
            key={"add-new-group"}
            style={{
              borderRadius: 5,
              width: "100%",
              backgroundColor: "#EEEEEF",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            onPress={() => {
              navigation.navigate("CreateNewGroup");
            }}
          >
            <Image
              source={require("../../assets/misc/plus.png")}
              style={{
                width: 33,
                height: 33,
              }}
            />
            <Text
              style={{
                color: "#2F28D0",
                fontSize: 14,
                fontFamily: "roboto",
                fontWeight: "semibold",
              }}
            >
              Create new group
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}
