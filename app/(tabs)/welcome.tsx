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
      <Button
        onPress={() => {
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
  card: {

    width: "100%",
    height: "100%"
  },
  button:{
    backgroundColor: "grey",
    marginTop: 20,
    marginBottom: 20,
  }
});
