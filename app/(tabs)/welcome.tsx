import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";


export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.card}>
      <ThemedText type="title">Bienvenido a la aplicación</ThemedText>
      <ThemedText type="subtitle">Esta es una aplicación de ejemplo</ThemedText>
      <Button onPress={() => {
        router.replace(`/task-list`);
      }}
      style={styles.button}
      >
        Ver tareas
      </Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 200,
    marginRight: 200,
  },
})