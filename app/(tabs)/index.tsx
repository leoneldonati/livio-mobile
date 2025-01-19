import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Ionicons
          name="add-circle"
          size={62}
          color="rgb(134,290,110)"
          style={styles.addBtn}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 100,
  },
  addBtn: {
    backgroundColor: "#000",
    borderRadius: 100,
    position: "absolute",
    right: 20,
    bottom: -700,
  },
});
