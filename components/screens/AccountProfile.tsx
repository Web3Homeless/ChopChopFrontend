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

// const wallet = createWalletClient({
//   chain: addEnsContracts(sepolia),
//   transport: http(),
// });

export default function AccountProfile({ navigation }: any) {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [text, onChangeText] = React.useState("myname.eth");

  const { data: hash, writeContract } = useWriteContract();

  const { data: name } = useEnsName({
    address: address,
    chainId: sepolia.id,
  });

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

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

  function onChangeUsername() {
    //alert(address);
    alert("1");
    try {
      //   const hash = await setPrimaryName(wallet, {
      //     name: text,
      //     address: address,
      //     account: address!,
      //   });

      writeContract({
        address: "0xA0a1AbcDAe1a2a4A2EF8e9113Ff0e02DD81DC0C6",
        abi,
        functionName: "setName",
        args: ["someaasdasdasd"],
      });
    } catch (e) {
      console.log(e);
      alert("Error: " + e);
    }
  }

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
          {name || address}
        </Text>
        <Button
          title="Change username"
          onPress={handlePresentModalPress}
        ></Button>
        <AppKitButton />
        {isConfirming && <Text>Waiting for confirmation...</Text>}
        {isConfirmed && <Text>Transaction confirmed.</Text>}

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              ></TextInput>
              <Button
                title="Set new ENS name"
                onPress={async () => await onChangeUsername()}
              ></Button>
              {isConfirming && <Text>Waiting for confirmation...</Text>}
              {isConfirmed && <Text>Transaction confirmed.</Text>}
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
        <NavigationBar></NavigationBar>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
