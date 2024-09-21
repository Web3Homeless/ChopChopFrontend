import React from "react";
import { SafeAreaView, View, Image, Text, ScrollView } from "react-native";
import GroupsItem from "../GroupsItem";
import NavigationBar from "../NavigationBar";

export default function Groups() {
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
          <GroupsItem
            id={"somegroup"}
            groupName={"Group Name 1"}
            owned={500}
            owe={1500.22}
            isSettled={false}
          />
          <GroupsItem
            id={"somegroup"}
            groupName={"Group Name 1"}
            owned={500}
            owe={1500.22}
            isSettled={true}
          />
          <GroupsItem
            id={"somegroup"}
            groupName={"Group Name 1"}
            owned={500}
            owe={1500.22}
            isSettled={false}
          />
          <GroupsItem
            id={"somegroup"}
            groupName={"Group Name 1"}
            owned={500}
            owe={1500.22}
            isSettled={false}
          />
          <GroupsItem
            id={"somegroup"}
            groupName={"Group Name 1"}
            owned={500}
            owe={1500.22}
            isSettled={false}
          />
          <GroupsItem
            id={"somegroup"}
            groupName={"Group Name 1"}
            owned={500}
            owe={1500.22}
            isSettled={false}
          />
        </ScrollView>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}
