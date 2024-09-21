import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import ChainsChooseItem from "../ChainsChooseItem";
import { useSelectionsStore } from "../../store/userSelectionsStore";
import LogoBlueSVG from "../../assets/logo-blue-svg.svg";

export default function TokensChoose({ navigation }: { navigation: any }) {
  interface Token {
    id: string;
    image: any;
    text: string;
  }

  const selectionsStore = useSelectionsStore();

  useEffect(() => {
    if (selectionsStore.selectedTokens.length != 0) {
      navigation.navigate("Groups", { name: "Groups" });
    }
  }, []);

  const tokens: Token[] = [
    {
      id: "ethereum",
      image: require("../../assets/chains/ether.png"),
      text: "ETH",
    },
    {
      id: "bnb",
      image: require("../../assets/chains/bnb.png"),
      text: "BNB",
    },
    {
      id: "arbitrum",
      image: require("../../assets/chains/arbitrum.png"),
      text: "Arbitrum",
    },
    {
      id: "gnosis",
      image: require("../../assets/chains/gnosis.png"),
      text: "Gnosis",
    },
    {
      id: "linea",
      image: require("../../assets/chains/linea.png"),
      text: "Linea",
    },
    {
      id: "optimism",
      image: require("../../assets/chains/optimism.png"),
      text: "Optimism",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 38,
            width: "80%",
          }}
        >
          <LogoBlueSVG width={170} height={90} />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            CHOOSE THE{" "}
            <Text style={{ color: "#2F28D0", fontWeight: 700 }}> TOKENS </Text>{" "}
            ON WITH YOU WANT TO REFUND YOUR PAYMENTS
          </Text>
        </View>
        <ScrollView
          style={{
            flex: 2,
            width: "90%",
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            paddingVertical: 10,
          }}
          contentContainerStyle={{
            rowGap: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          {tokens.map((item, index) => (
            <ChainsChooseItem
              key={index}
              image={item.image}
              text={item.text}
              isSelected={selectionsStore.selectedTokens.includes(item.id)}
              setIsSelected={() =>
                selectionsStore.selectedTokens.includes(item.id)
                  ? selectionsStore.setSelectedTokens(
                      selectionsStore.selectedTokens.filter(
                        (chainId) => chainId != item.id,
                      ),
                    )
                  : selectionsStore.setSelectedTokens([
                      ...selectionsStore.selectedTokens,
                      item.id,
                    ])
              }
            />
          ))}
        </ScrollView>
        <View
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
            paddingVertical: 10,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#EEEEEF",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              paddingVertical: 13,
            }}
            onPress={() =>
              navigation.navigate("ChainsChoose", {
                name: "ChainsChoose",
              })
            }
          >
            <Image
              source={require("../../assets/misc/arrow-left.png")}
              style={{
                width: 23,
                height: 27,
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                color: "black",
                fontSize: 24,
              }}
            >
              BACK
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#2F28D0",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              paddingVertical: 13,
            }}
            onPress={() => navigation.navigate("Groups", { name: "Groups" })}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
              }}
            >
              NEXT
            </Text>
            <Image
              source={require("../../assets/misc/arrow-right.png")}
              style={{
                width: 23,
                height: 27,
                objectFit: "contain",
              }}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
