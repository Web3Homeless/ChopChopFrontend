import '@walletconnect/react-native-compat'
import { WagmiProvider } from 'wagmi'
import { mainnet, sepolia } from '@wagmi/core/chains' //mainnet, polygon, arbitrum
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit, defaultWagmiConfig, AppKit, AppKitButton } from '@reown/appkit-wagmi-react-native'
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { dynamicClient } from './utils/dynamic';
import React from 'react'
import { DynamicContextProvider, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import Inner from './Inner'
// import { ConnectButton } from './components/ui/ConnectButton'
// import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
// import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.reown.com
const projectId = '4c3ab43569b1c52cabc36673903c0732'

// 2. Create config
const metadata = {
  name: 'AppKit RN',
  description: 'AppKit RN Example',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'native-app://',
    universal: 'http://native-app-test.com'
  }
}

const chains = [mainnet] as const //mainnet, polygon, arbitrum

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata }) //

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: sepolia, // Optional
  enableAnalytics: true // Optional - defaults to your Cloud configuration,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  return (
    <WagmiProvider config={wagmiConfig}>
      <View style={styles.container}>
        <QueryClientProvider client={queryClient}>
        {/* <AppKitButton /> */}
        {/* <DynamicContextProvider
          settings={{
            environmentId: 'd70a0529-c98e-4361-9e37-b80d2a512df3',
            initialAuthenticationMode: 'connect-only',
            enableVisitTrackingOnConnectOnly: false,
          }}
        > */}

        <Inner></Inner>

        {/* <>
          <dynamicClient.reactNative.WebView />

          <SafeAreaView>
            <Button title='Huy' onPress={() => dynamicClient.ui.auth.show()}></Button>
          </SafeAreaView>
        </> */}
            
        <StatusBar style="auto" />
        {/* <AppKit /> */}
        {/* </DynamicContextProvider> */}
        </QueryClientProvider>
      </View>
    </WagmiProvider>
  );
}
