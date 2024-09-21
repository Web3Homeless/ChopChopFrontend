import React from "react";
import { Pressable, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGroupsStore } from "../store/groupsStore";

export default function GroupsItem({
  id,
  groupName,
  owned,
  owe,
  image,
  isSettled,
}: {
  id: string;
  groupName: string;
  owned: number;
  owe: number;
  image?: any;
  isSettled: boolean;
}) {
  const navigation = useNavigation();
  const groupsStore = useGroupsStore();

  return (
    <Pressable
      style={{
        backgroundColor: "#EEEEEF",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 5,
        borderRadius: 5,
        gap: 10,
      }}
      onPress={() =>
        (navigation as any).navigate("GroupInfo", {
          name: "GroupInfo",
        })
      }
    >
      <View
        style={{
          backgroundColor: "#E1E1E3",
          borderRadius: 5,
          width: 62,
          height: 62,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 5,
          }}
        >
          {groupName}
        </Text>
        {isSettled && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginBottom: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/misc/check-mark-little.png")}
              style={{
                width: 16,
                height: 9,
              }}
            />
            <Text
              style={{ fontSize: 14, fontFamily: "roboto", color: "#2F28D0" }}
            >
              Already Setelled
            </Text>
          </View>
        )}
        {!isSettled && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginBottom: 3,
            }}
          >
            <Text style={{ fontSize: 14, color: "#00C74F" }}>
              You are owed:
            </Text>
            <Text style={{ fontSize: 14, color: "#00C74F" }}>{owned}$</Text>
          </View>
        )}
        {!isSettled && (
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Text style={{ fontSize: 14, color: "#FF0000" }}>You owe:</Text>
            <Text style={{ fontSize: 14, color: "#FF0000" }}>{owe}$</Text>
          </View>
        )}
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          {isSettled ? (
            <Pressable
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                padding: 14,
                borderRadius: 5,
              }}
              onPress={() => {
                groupsStore.setGroups(groupsStore.groups.filter(x => x.id != id));
              }}
            >
              <Image
                source={require("../assets/misc/trash.png")}
                style={{
                  width: 16,
                  height: 19,
                }}
              />
            </Pressable>
          ) : (
            <Pressable
              style={{
                backgroundColor: "#2F28D0",
                paddingVertical: 6,
                paddingHorizontal: 9,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                opacity: isSettled ? 0 : 1,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                }}
              >
                SETTLE UP
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </Pressable>
  );
}
