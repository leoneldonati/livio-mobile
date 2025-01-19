import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "rgb(134,290,110)",
        tabBarStyle: {
          backgroundColor: "rgb(33,33,33)",
        },
        headerShadowVisible: false,
        headerTintColor: "rgb(240,240,240)",
        headerStyle: {
          backgroundColor: "rgb(33,33,33)",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-sharp"
              color={focused ? "rgb(134,290,110)" : "rgb(200,200,200)"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              color={focused ? "rgb(134,290,110)" : "rgb(200,200,200)"}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
