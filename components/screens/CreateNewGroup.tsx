import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import NavigationBar from "../NavigationBar";

export default function CreateNewGroup() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 23,
        }}
      >
        <Image
          source={require("../../assets/logo-blue.png")}
          style={{
            width: 170,
            height: 90,
          }}
        />
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
          <Text style={{ fontFamily: "arame", fontSize: 16, color: "white" }}>
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
        >
          <Image
            source={require("../../assets/misc/plus-white.png")}
            style={{
              width: 16,
              height: 16,
            }}
          />
          <Text style={{ fontFamily: "arame", fontSize: 16, color: "white" }}>
            ADD MEMBERS
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 14,
            flexDirection: "row",
            gap: 10,
            width: "44%",
          }}
        >
          <Image
            source={require("../../assets/misc/share-link.png")}
            style={{
              width: 16,
              height: 16,
            }}
          />
          <Text style={{ fontFamily: "arame", fontSize: 16, color: "#2F28D0" }}>
            SHARE A LINK
          </Text>
        </Pressable>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}
