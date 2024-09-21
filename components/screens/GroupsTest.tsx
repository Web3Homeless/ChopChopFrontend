import React from "react";
import { Button, SafeAreaView } from "react-native";
import FriendRow from "../friends/FriendRow";
import { AppKitButton } from "@reown/appkit-wagmi-react-native";
import { dynamicClient } from "../../utils/dynamic";

type Props = {};

export default function GroupsTest({}: Props) {
  return (
    <>
      <SafeAreaView>
        <FriendRow></FriendRow>
        {/* <Button
          title="Test"
          onPress={() => dynamicClient.ui.auth.show()}
        ></Button> */}
        <AppKitButton />
      </SafeAreaView>
    </>
  );
}
