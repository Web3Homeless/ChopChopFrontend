import React, { useState } from "react";
import {
  Alert,
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
import avatar1 from "../../assets/avatars/avatar-1.png";
import avatar2 from "../../assets/avatars/avatar-2.png";
import avatar3 from "../../assets/avatars/avatar-3.png";
import avatar4 from "../../assets/avatars/avatar-4.png";
import avatar5 from "../../assets/avatars/avatar-5.png";
import avatar6 from "../../assets/avatars/avatar-6.png";
import avatar7 from "../../assets/avatars/avatar-7.png";
import avatar8 from "../../assets/avatars/avatar-8.png";
import avatar9 from "../../assets/avatars/avatar-9.png";
import avatar10 from "../../assets/avatars/avatar-10.png";
import avatar11 from "../../assets/avatars/avatar-11.png";
import avatar12 from "../../assets/avatars/avatar-12.png";
import avatar13 from "../../assets/avatars/avatar-13.png";
import avatar14 from "../../assets/avatars/avatar-14.png";
import avatar15 from "../../assets/avatars/avatar-15.png";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
];

export default function CreateNewGroup() {
  const groupsStore = useGroupsStore();
  const navigation = useNavigation() as any;
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"member" | "contact" | undefined>(undefined);
  const [newContact, setNewContact] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

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
                  participants: participants,
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
            setMode("member");
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
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 14,
            flexDirection: "row",
            gap: 10,
            width: "44%",
            borderWidth: 1,
            borderColor: "#2F28D0",
          }}
          onPress={() => {
            setMode("contact");
          }}
        >
          <Text style={{ fontFamily: "arame", fontSize: 16, color: "#2F28D0" }}>
            CREATE CONTACT
          </Text>
        </Pressable>
      </View>
      {mode === "member" && (
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
          {participants.map((item, index) => (
            <ChainsChooseItem
              key={index}
              image={avatars[index > 15 ? 1 : index]}
              text={item}
              isSelected={true}
              setIsSelected={() => {
                setParticipants(
                  participants.filter((participant) => participant != item),
                );
              }}
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
      {mode === "contact" && (
        <View
          style={{
            width: "100%",
            backgroundColor: "#EEEEEF",
            flexDirection: "column",
            gap: 10,
            marginHorizontal: 15,
            marginTop: 30,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 24,
              fontFamily: "Arame",
            }}
          >
            ADD NEW CONTACT
          </Text>
          <View
            style={{
              width: "92%",
              borderWidth: 1,
              borderColor: "#2F28D0",
              borderRadius: 5,
              paddingVertical: 8,
              paddingHorizontal: 6,
            }}
          >
            <TextInput
              placeholder={"Enter Wallet Number or EMC Name"}
              placeholderTextColor={"rgba(47,40,208,0.6)"}
              style={{
                width: "100%",
                color: "#2F28D0",
              }}
              value={newContact}
              onChangeText={setNewContact}
            />
          </View>
          <Pressable
            style={{
              width: "92%",
              backgroundColor: "#2F28D0",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 16,
            }}
            onPress={() => {
              if (newContact.length == 0) {
                Alert.alert("Bad address, try again");
                return;
              }

              setParticipants([...participants, newContact]);
              setNewContact("");
              Alert.alert(`Contact ${newContact} was added successfully!`);
            }}
          >
            <Text style={{ fontFamily: "arame", fontSize: 16, color: "white" }}>
              CREATE CONTACT
            </Text>
          </Pressable>
        </View>
      )}
      <NavigationBar />
    </SafeAreaView>
  );
}
