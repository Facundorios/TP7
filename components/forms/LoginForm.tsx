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

  const user = {
    username: "admin123",
    password: "admin321",
  };

  const handleLogin = () => {
    if (login.username.length < 5) {
      alert("El usuario debe tener al menos 5 caracteres");
      return;
    }

    if (login.password.length < 5 && login.password.length > 10) {
      alert("La contraseña debe tener entre 5 y 10 caracteres");
      return;
    }

    if (login.username !== user.username || login.password !== user.password) {
      alert("Usuario o contraseña incorrectos");
      return;
    }
    router.replace(`task-list`);
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
        label="Password"
        value={login.password}
        right={<TextInput.Icon icon="eye" />}
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
