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
import {
  billToDebts,
  calcOweIsOwed,
  useGroupsStore,
} from "../../store/groupsStore";
import LogoSmallSVG from "../../assets/logo-small-svg.svg";

export default function Groups({ navigation }: any) {
  const groupsStore = useGroupsStore();
  const userAddress = "0xuser";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LogoSmallSVG
        width={117}
        height={31}
        style={{
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
          {groupsStore.groups.map((item, index) => {
            const debts = item.bills.flatMap((x) => billToDebts(x));
            const oweOwed = calcOweIsOwed(debts, userAddress);
            return (
              <GroupsItem
                key={index}
                id={item.id}
                groupName={item.name}
                owned={oweOwed.userIsOwed}
                owe={oweOwed.userOwe}
                isSettled={oweOwed.userOwe == 0}
              />
            );
          })}
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
                fontFamily: "Roboto",
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
