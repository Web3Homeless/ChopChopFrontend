import { createClient } from "@dynamic-labs/client";
import { ReactNativeExtension } from "@dynamic-labs/react-native-extension";

export const dynamicClient = createClient({
  environmentId: "d70a0529-c98e-4361-9e37-b80d2a512df3",
  // Optional:
  appLogoUrl: "https://demo.dynamic.xyz/favicon-32x32.png",
  appName: "Dynamic Demo",
}).extend(ReactNativeExtension());
