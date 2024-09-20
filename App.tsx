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

const Stack = createNativeStackNavigator();

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.reown.com
const projectId = "4c3ab43569b1c52cabc36673903c0732";

// 2. Create config
const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "native-app://",
    universal: "http://native-app-test.com",
  },
};

const chains = [sepolia] as const; //mainnet, polygon, arbitrum

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata }); //

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: sepolia, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration,
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default function App() {
  return (
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

    // <WagmiProvider config={wagmiConfig}>
    //   <View style={styles.container}>
    //   <QueryClientProvider client={queryClient}>
    //     <AppKitButton />
    //
    //     <StatusBar style="auto" />
    //       <AppKit />
    //     </QueryClientProvider>
    //   </View>
    // </WagmiProvider>
  );
}
