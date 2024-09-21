import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import OneInch from "../../assets/tokens/1inch.svg";
import Op from "../../assets/tokens/op.svg";
import Usdc from "../../assets/tokens/usdc.svg";
import Weth from "../../assets/tokens/weth.svg";
import Wflow from "../../assets/tokens/wflow.svg";
import Zksync from "../../assets/tokens/zksync.svg";
import Wbtc from "../../assets/tokens/wbtc.svg";

export default function SVGTokens({
    text,
    isSelected,
    setIsSelected,
    tokenId,
  }: {
    text: any;
    isSelected: boolean;
    setIsSelected: () => void;
    tokenId: any;
  }) {
    return (
            <Pressable
              style={{
                width: "100%",
                backgroundColor: isSelected ? "#D3D1F6" : "#EEEEEF",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                borderRadius: 5,
              }}
              onPress={setIsSelected}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 19,
                }}
              >
                
                {tokenId && tokenId == 'usdc' && <Usdc width={34} height={34} />}
                {tokenId && tokenId == '1inch' && <OneInch width={34} height={34} />}
                {tokenId && tokenId == 'op' && <Op width={34} height={34} />}
                {tokenId && tokenId == 'weth' && <Weth width={34} height={34} />}
                {tokenId && tokenId == 'wflow' && <Wflow width={34} height={34} />}
                {tokenId && tokenId == 'zksync' && <Zksync width={34} height={34} />}
                {tokenId && tokenId == 'wbtc' && <Wbtc width={34} height={34} />}
                
                <Text
                  style={{
                    fontSize: 18,
                    paddingVertical: 20,
                  }}
                >
                  {text}
                </Text>
              </View>
              {isSelected && (
                <Image
                  source={require("../../assets/misc/check-mark.png")}
                  style={{
                    width: 28,
                    height: 18,
                    objectFit: "contain",
                    marginRight: 22,
                  }}
                />
              )}
            </Pressable>
    );
  }