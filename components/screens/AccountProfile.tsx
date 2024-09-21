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
} from "react-native";
import { useAppKit, useAppKitState } from "@reown/appkit-wagmi-react-native";
import { useAccount } from "wagmi";

import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";
import { addEnsContracts } from "@ensdomains/ensjs";
import { setTextRecord } from "@ensdomains/ensjs/wallet";
import { http } from "viem";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type Props = {};

const wallet = createWalletClient({
  chain: addEnsContracts(mainnet),
  transport: http(),
});

export default function AccountProfile({}: Props) {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  if (isConnecting) return <Text>Connecting…</Text>;
  if (isDisconnected) return <Text>Disconnected</Text>;

  function onImagePress() {
    alert("1");
  }

  function onNamePress() {
    setModalVisible(true);
  }

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
        <Pressable onPress={() => onImagePress()}>
          <Image
            source={require("../../assets/nouns_avatar.jpg")}
            style={{ width: 170, height: 170, borderRadius: 9999 }}
          ></Image>
        </Pressable>
        <Text
          style={{
            fontSize: 19,
          }}
        >
          {address}
        </Text>
        <Button
          title="Change username"
          onPress={handlePresentModalPress}
        ></Button>

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });
