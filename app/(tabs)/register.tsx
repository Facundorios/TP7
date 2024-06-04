import { Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { ThemedView } from "@/components/ThemedView";
import { styles } from ".";
import { ThemedText } from "@/components/ThemedText";

export default function RegisterScreen() {
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
        <ThemedText type="title">Registro</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Para registrarte a la aplicación, por favor complete el siguiente
          formulario:
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <RegisterForm />
      </ThemedView>
    </ParallaxScrollView>
  );
}
