import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

import { Button, Icon } from "react-native-paper";

import { Link } from "expo-router";
import { styles } from "@/app/(tabs)";
import { LoginForm } from "../forms/LoginForm";

export default function TodoListScreen() {
  return (
    <ThemedView>
      <LoginForm/>
    </ThemedView>
  );
}
