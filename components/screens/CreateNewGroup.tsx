import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import NavigationBar from "../NavigationBar";
import { Group, useGroupsStore } from "../../store/groupsStore";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import ChainsChooseItem from "../ChainsChooseItem";
import LogoBlueSVG from "../../assets/logo-blue-svg.svg";

export default function CreateNewGroup() {
  const groupsStore = useGroupsStore();
  const navigation = useNavigation() as any;
  const [name, setName] = useState("");
  const [addMemberMode, setAddMemberMode] = useState<boolean>(false);

  const members = [
    {
      id: "avatar-1",
      image: require("../../assets/avatars/avatar-1.png"),
      text: "member1",
    },
    {
      id: "avatar-2",
      image: require("../../assets/avatars/avatar-2.png"),
      text: "member2",
    },
    {
      id: "avatar-3",
      image: require("../../assets/avatars/avatar-3.png"),
      text: "member3",
    },
    {
      id: "avatar-4",
      image: require("../../assets/avatars/avatar-4.png"),
      text: "member4",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 23,
        }}
      >
        <LogoBlueSVG width={170} height={90} />
      </View>
      <View style={{ flexDirection: "column", gap: 15, paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 24, fontFamily: "arame", width: "100%" }}>
          CREATE NEW GROUP
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <View
            style={{
              paddingVertical: 18,
              paddingHorizontal: 17,
              backgroundColor: "#D9D9D9",
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/misc/media.png")}
              style={{
                width: 20,
                height: 17,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              width: "80%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: "100%",
              gap: 5,
            }}
          >
            <TextInput
              placeholder="Group name"
              style={{
                color: "#2F28D0",
                fontSize: 20,
                fontFamily: "roboto",
                paddingVertical: 5,
              }}
              placeholderTextColor={"rgba(47,40,208,0.6)"}
              onChangeText={(text) => setName(text)}
            />
            <View
              style={{ width: "100%", height: 1, backgroundColor: "#2F28D0" }}
            />
          </View>
        </View>
        <Pressable
          style={{
            width: "100%",
            backgroundColor: "#2F28D0",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <Text
            style={{ fontFamily: "arame", fontSize: 16, color: "white" }}
            onPress={() => {
              groupsStore.setGroups([
                ...groupsStore.groups,
                {
                  id: uuid.v4(),
                  name,
                  participants: [],
                  bills: [],
                } as Group,
              ]);
              navigation.navigate("Groups");
            }}
          >
            CREATE GROUP
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 25,
          flexDirection: "row",
          width: "100%",
          marginHorizontal: 14,
          gap: 15,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#2F28D0",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 14,
            flexDirection: "row",
            gap: 10,
            width: "44%",
          }}
          onPress={() => {
            setAddMemberMode(!addMemberMode);
          }}
        >
          <Image
            source={require("../../assets/misc/plus-white.png")}
            style={{
              width: 16,
              height: 16,
            }}
          />
          <Text
            style={{
              fontFamily: "arame",
              fontSize: 16,
              color: "white",
            }}
          >
            ADD MEMBERS
          </Text>
        </Pressable>
        {/*<Pressable*/}
        {/*  style={{*/}
        {/*    backgroundColor: "#D9D9D9",*/}
        {/*    borderRadius: 5,*/}
        {/*    justifyContent: "center",*/}
        {/*    alignItems: "center",*/}
        {/*    paddingVertical: 14,*/}
        {/*    flexDirection: "row",*/}
        {/*    gap: 10,*/}
        {/*    width: "44%",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    source={require("../../assets/misc/share-link.png")}*/}
        {/*    style={{*/}
        {/*      width: 16,*/}
        {/*      height: 16,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  <Text style={{ fontFamily: "arame", fontSize: 16, color: "#2F28D0" }}>*/}
        {/*    SHARE A LINK*/}
        {/*  </Text>*/}
        {/*</Pressable>*/}
      </View>
      {addMemberMode && (
        <ScrollView
          style={{
            width: "92%",
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            paddingVertical: 10,
            marginHorizontal: 15,
            marginBottom: "25%",
          }}
          contentContainerStyle={{
            rowGap: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          {members.map((item, index) => (
            <ChainsChooseItem
              key={index}
              image={item.image}
              text={item.text}
              isSelected={true}
              setIsSelected={() => {}}
              // isSelected={selectionsStore.selectedSourceChains.includes(
              //   item.id,
              // )}
              // setIsSelected={() =>
              //   selectionsStore.selectedSourceChains.includes(item.id)
              //     ? selectionsStore.setSelectedSourceChains(
              //         selectionsStore.selectedSourceChains.filter(
              //           (chainId) => chainId != item.id,
              //         ),
              //       )
              //     : selectionsStore.setSelectedSourceChains([
              //         ...selectionsStore.selectedSourceChains,
              //         item.id,
              //       ])
              // }
            />
          ))}
        </ScrollView>
      )}
      <NavigationBar />
    </SafeAreaView>
  );
}
