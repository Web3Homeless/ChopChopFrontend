import {
  AppKit,
  createAppKit,
  defaultWagmiConfig,
} from "@reown/appkit-wagmi-react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { mainnet } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { authConnector } from "@reown/appkit-auth-wagmi-react-native";
import { dynamicClient } from "../../utils/dynamic";

type Props = {
  children: React.ReactNode;
};

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.reown.com
const projectId = "b1e1aefc0165086def75803b4e1cda7e";

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

const chains = [mainnet] as const; //mainnet, polygon, arbitrum

const auth = authConnector({ projectId, metadata });

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  extraConnectors: [auth],
});

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration,
});

export default function ProvidersContext({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <dynamicClient.reactNative.WebView /> */}
        <AppKit />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
