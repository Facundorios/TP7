import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, Icon } from "react-native-paper";
import { styles } from ".";


export default function TodoListScreen() {
  return (
    <ThemedView>
      <ThemedText  type="title">Todo List</ThemedText>
      <Button icon="account-cowboy-hat" style={styles.button}>
        Añadir to do
      </Button>
    </ThemedView>
  );
}