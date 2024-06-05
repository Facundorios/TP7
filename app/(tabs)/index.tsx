import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LoginForm } from "@/components/forms/LoginForm";
import { TaskProvider } from "@/context/TaskContext";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/user-partial.png")}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Para iniciar la aplicación, por favor inicia sesión aquí
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <LoginForm />
      </ThemedView>
    </ParallaxScrollView>
  );
}

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    marginTop: 20,
    position: "absolute",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
  },
});
