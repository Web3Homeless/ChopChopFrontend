import {
  defaultWagmiConfig,
} from "@reown/appkit-wagmi-react-native";
import { mainnet, bsc } from "viem/chains";
import { authConnector } from "@reown/appkit-auth-wagmi-react-native";


// 1. Get projectId at https://cloud.reown.com
export const projectId = "b1e1aefc0165086def75803b4e1cda7e";

// 2. Create config
export const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "native-app://",
    universal: "http://native-app-test.com",
  },
};

// export const chains = ; //mainnet, polygon, arbitrum

export const auth = authConnector({ projectId, metadata });

export const wagmiConfig = defaultWagmiConfig({
  chains: [mainnet, bsc],
  projectId,
  metadata,
});