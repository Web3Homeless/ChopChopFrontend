import "@walletconnect/react-native-compat";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import ChainsChoose from "./components/screens/ChainsChoose";
import ProvidersContext from "./components/utils/ProvidersContext";

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
          {/*<Stack.Screen*/}
          {/*  name={"Groups"}*/}
          {/*  component={Groups}*/}
          {/*  options={{ headerShown: false }}*/}
          {/*/>*/}
        </Stack.Navigator>
      </NavigationContainer>
    </ProvidersContext>
  );
}
