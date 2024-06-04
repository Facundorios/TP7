import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, Icon } from "react-native-paper";
import { styles } from ".";
import { Link } from "expo-router";



export default function TodoListScreen() {
  return (
    <ThemedView>
      <ThemedText  type="title">Todo List</ThemedText>
      <Link href="todoForm">
      <Button icon="account-cowboy-hat" style={styles.button}>
        Añadir to do
      </Button>
      </Link>
    </ThemedView>
  );
}