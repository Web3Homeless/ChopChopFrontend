import React from "react";
import { Button, SafeAreaView } from "react-native";
import { dynamicClient } from "../../utils/dynamic";
import FriendRow from "../friends/FriendRow";

type Props = {};

export default function GroupsTest({}: Props) {
  return (
    <>
      <SafeAreaView>
        <FriendRow></FriendRow>
        <Button
          title="Huy"
          onPress={() => dynamicClient.ui.auth.show()}
        ></Button>
      </SafeAreaView>
    </>
  );
}
