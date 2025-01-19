import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Esta pagina no existe" }} />
      <View>
        <Text> Este pagina no existe!</Text>
      </View>
    </>
  );
}
