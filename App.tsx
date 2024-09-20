import "@walletconnect/react-native-compat";
import { WagmiProvider } from "wagmi";
import { sepolia } from "@wagmi/core/chains"; //mainnet, polygon, arbitrum
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createAppKit,
  defaultWagmiConfig,
  AppKit,
  AppKitButton,
} from "@reown/appkit-wagmi-react-native";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import ChainsChoose from "./components/screens/ChainsChoose";
import ProvidersContext from "./components/utils/Providers";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProvidersContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Home"}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"ChainsChoose"}
            component={ChainsChoose}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProvidersContext>
  );
}
