import { styles } from "@/app/(tabs)";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

export const LoginForm = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    if (login.username === "" || login.password === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (login.username.length < 5) {
      alert("El usuario debe tener al menos 5 caracteres");
      return;
    }

    if (login.username.length > 10) {
      alert("El usuario debe tener menos de 10 caracteres");
      return;
    }

    if (login.password.length < 5) {
      alert("La contraseña debe tener al menos 5 caracteres");
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(login.password)) {
      alert("La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un caracter especial");
      return;
    }

    router.replace("/welcome");
  };

  const handleForm = (key: string, value: string) => {
    setLogin((prevLogin) => ({ ...prevLogin, [key]: value }));
  };

  return (
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="title">Login</ThemedText>

      <ThemedText>Username</ThemedText>

      <TextInput
        label="Username"
        value={login.username}
        onChangeText={(value) => handleForm("username", value)}
      />

      <ThemedText>Password</ThemedText>

      <TextInput
        secureTextEntry
        label="Password"
        value={login.password}
        onChangeText={(value) => handleForm("password", value)}
      />
      <Button onPress={handleLogin}>Login</Button>
      <ThemedText>
        No tienes una cuenta?
        <Link href="register">
          <ThemedText type="link"> Crear cuenta hola </ThemedText>
        </Link>
      </ThemedText>
    </ThemedView>
  );
};
