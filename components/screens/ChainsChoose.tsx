import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import ChainsChooseItem from "../ChainsChooseItem";

export default function ChainsChoose() {
  interface Chain {
    id: string;
    image: any;
    text: string;
  }

  const chains: Chain[] = [
    {
      id: "ethereum",
      image: require("../../assets/chains/ether.png"),
      text: "Ethereum Main Network",
    },
    {
      id: "bnb",
      image: require("../../assets/chains/bnb.png"),
      text: "BNB Smart Chain",
    },
    {
      id: "arbitrum",
      image: require("../../assets/chains/arbitrum.png"),
      text: "Arbitrum One",
    },
    {
      id: "gnosis",
      image: require("../../assets/chains/gnosis.png"),
      text: "Gnosis Chain",
    },
    {
      id: "linea",
      image: require("../../assets/chains/linea.png"),
      text: "Linea Main Network",
    },
    {
      id: "optimism",
      image: require("../../assets/chains/optimism.png"),
      text: "Optimism Main Network",
    },
  ];

  const [selectedChains, setSelectedChains] = React.useState<string[]>([]);

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
          <Image
            source={require("../../assets/logo-blue.png")}
            style={{ width: 170, height: 90 }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            CHOOSE THE{" "}
            <Text style={{ color: "#2F28D0", fontWeight: 700 }}> CHAINS </Text>{" "}
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
          {chains.map((item, index) => (
            <ChainsChooseItem
              key={index}
              image={item.image}
              text={item.text}
              isSelected={selectedChains.includes(item.id)}
              setIsSelected={() =>
                selectedChains.includes(item.id)
                  ? setSelectedChains(
                      selectedChains.filter((chainId) => chainId != item.id),
                    )
                  : setSelectedChains([...selectedChains, item.id])
              }
            />
          ))}
        </ScrollView>
        <View
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
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
