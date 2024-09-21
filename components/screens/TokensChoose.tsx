import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelectionsStore } from "../../store/userSelectionsStore";
import LogoBlueSVG from "../../assets/logo-blue-svg.svg";
import SVGTokens from "../utils/SVGTokens";

export default function TokensChoose({ navigation }: { navigation: any }) {
  interface Chain {
    id: string;
    tokens: Token[];
  }

  interface Token {
    id: string;
    text: string;
  }

  const selectionsStore = useSelectionsStore();

  useEffect(() => {
    if (selectionsStore.selectedTokens.length != 0) {
      navigation.navigate("Groups", { name: "Groups" });
    }
  }, []);

  const chains: Chain[] = [
    {
      id: "ethereum",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "weth",
          text: "WETH",
        },
      ],
    },
    {
      id: "optimism",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "op",
          text: "OP",
        },
      ],
    },
    {
      id: "zksynck",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "zksynck",
          text: "zkSynck",
        },
      ],
    },
    {
      id: "base",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "weth",
          text: "WHETH",
        },
      ],
    },
    {
      id: "flow",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "wflow",
          text: "WFLOW",
        },
      ],
    },
    {
      id: "bnb",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "1inch",
          text: "1Inch",
        },
      ],
    },
    {
      id: "polygon",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "weth",
          text: "WHETH",
        },
      ],
    },
    {
      id: "gnosis",
      tokens: [
        {
          id: "usdc",
          text: "USDC",
        },
        {
          id: "wbtc",
          text: "WBTC",
        },
      ],
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
          {selectionsStore.selectedSourceChains.map((chainId, chainIndex) =>
            chains
              .filter((chain) => chain.id == chainId)
              .map((item, index) =>
                item.tokens.map((token, tokenIndex) => (
                  <SVGTokens
                    key={chainIndex}
                    text={token.text}
                    isSelected={selectionsStore.selectedTokens.includes(
                      token.id,
                    )}
                    tokenId={token.id}
                    setIsSelected={() =>
                      selectionsStore.selectedTokens.includes(token.id)
                        ? selectionsStore.setSelectedTokens(
                            selectionsStore.selectedTokens.filter(
                              (tokenId) => tokenId != token.id,
                            ),
                          )
                        : selectionsStore.setSelectedTokens([
                            ...selectionsStore.selectedTokens,
                            token.id,
                          ])
                    }
                  />
                )),
              ),
          )}
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
