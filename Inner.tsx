import React from "react";
import { dynamicClient } from "./utils/dynamic";
import { Button, SafeAreaView, Text } from "react-native";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import FriendRow from "./components/friends/FriendRow";

type Props = {};

export default function Inner({}: Props) {
    //const ctx = useDynamicContext();

    return <>
        <FriendRow></FriendRow>
        <dynamicClient.reactNative.WebView />

        <SafeAreaView>
            <Button title='Huy' onPress={() => dynamicClient.ui.auth.show()}></Button>
        </SafeAreaView>
    </>
}
