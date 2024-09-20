import { defaultWagmiConfig } from "@reown/appkit-wagmi-react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { mainnet } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { dynamicClient } from "../../utils/dynamic";

type Props = {
  children: React.ReactNode;
};

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

const chains = [mainnet] as const; //mainnet, polygon, arbitrum

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

export default function ProvidersContext({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
        <dynamicClient.reactNative.WebView />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
