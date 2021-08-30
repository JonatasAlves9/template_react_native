import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* 
      <Stack.Screen name="exemplo1" component={exemplo} />
      <Stack.Screen name="exemplo2" component={exemplo} />
      <Stack.Screen name="exemplo3" component={exemplo} /> 
      */}
    </Stack.Navigator>
  );
}
