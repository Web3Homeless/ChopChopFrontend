import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  StyleSheet,
  Button,
  TextInput,
  Linking,
  PixelRatio,
} from "react-native";
import {
  AppKitButton,
  useAppKit,
  useAppKitState,
} from "@reown/appkit-wagmi-react-native";

import {
  useEnsName,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useAccount } from "wagmi";

import { createWalletClient, custom } from "viem";
import { mainnet, sepolia } from "viem/chains";
import { addEnsContracts } from "@ensdomains/ensjs";
import { setTextRecord } from "@ensdomains/ensjs/wallet";
import { http } from "viem";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { setPrimaryName } from "@ensdomains/ensjs/wallet";
import { abi } from "../../utils/abi/ens";
import NavigationBar from "../NavigationBar";
import { WebView } from "react-native-webview";
import EnsWebview from "../EnsWebview";
import { useGroupsStore } from "../../store/groupsStore";
import { useSelectionsStore } from "../../store/userSelectionsStore";
import FastImage from "react-native-fast-image";
import { AVATARS } from "../../utils/avatars";
import { ScrollView } from "react-native-gesture-handler";

export default function AccountProfile({ navigation }: any) {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const selectionStore = useSelectionsStore();

  const [selectedId, setSelected] = useState<number>(
    selectionStore.selectedAvatarId,
  );

  const { data: name } = useEnsName({
    address: address,
    chainId: mainnet.id,
  });

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["30%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    Linking.openURL("https://app.ens.domains/");
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  function onImagePress() {
    bottomSheetModalRef.current?.present();
  }

  function onAvatarSelectPress(id: number) {
    //setSelected(id);
    selectionStore.setSelectedAvatar(id);
  }

  const sourceAvatar = AVATARS[selectionStore.selectedAvatarId - 1];

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          gap: 10,
          marginTop: 30,
        }}
      >
        <Pressable onPress={() => onImagePress()}>
          <Image
            source={sourceAvatar.src}
            style={{
              width: 170,
              height: 170,
              borderRadius: 9999,
              resizeMode: "contain",
            }}
          ></Image>
        </Pressable>
        <Text
          style={{
            fontSize: 19,
            paddingHorizontal: 90,
          }}
        >
          {name || address}
        </Text>
        <Button
          title="Change username"
          onPress={handlePresentModalPress}
        ></Button>
        <AppKitButton />
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={{
              zIndex: -1000,
            }}
          >
            <BottomSheetView style={styles.contentContainer}>
              <ScrollView>
                <View
                  style={{
                    flex: 1,
                    padding: 50,
                    paddingHorizontal: 80,
                    marginBottom: 100,
                    rowGap: 30,
                    columnGap: 110,
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    zIndex: 100,
                    backgroundColor: "#2F28D0",
                  }}
                >
                  {AVATARS.map((a) => (
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 100,
                        height: 100,
                      }}
                    >
                      <Pressable onPress={() => onAvatarSelectPress(a.id)}>
                        <Image
                          source={a.src}
                          style={{
                            width: 100,
                            height: 100,
                            borderColor: "black",
                            resizeMode: "contain",
                            borderWidth:
                              a.id == selectionStore.selectedAvatarId ? 8 : 0,
                            shadowOffset: {
                              width: 40,
                              height: 40,
                            },
                          }}
                        ></Image>
                      </Pressable>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    gap: 5,
    backgroundColor: "#2F28D0",
    alignItems: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
