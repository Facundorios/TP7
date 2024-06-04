import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { router } from "expo-router";

export function RegisterForm() {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleRegister = () => {
    console.log("Username: ", register.username);
    console.log("Password: ", register.password);
    console.log("Email: ", register.email);
    router.replace(`/user/${register.username}`);
  };

  const handleForm = (key: string, value: string) => {
    console.log(key, value);

    setRegister((prevRegister) => ({ ...prevRegister, [key]: value }));
  };

  return (
    <ThemedView>
      <ThemedText> Username (Nombre de usuario) </ThemedText>
      <TextInput
        label="Username"
        value={register.username}
        onChangeText={(value) => handleForm("username", value)}
      />
      <ThemedText> Email (Correo Electronico) </ThemedText>
      <TextInput
        label="Email"
        value={register.email}
        onChangeText={(value) => handleForm("email", value)}
      />
      <ThemedText>Password (Password) </ThemedText>
      <TextInput
        label="Password"
        secureTextEntry
        value={register.password}
        right={<TextInput.Icon icon="eye" />}
        onChangeText={(value) => handleForm("password", value)}
      />
      <Button onPress={handleRegister}>Register</Button>
      <ThemedText>
        Ya tienes una cuenta?
        <Link href="/">
          <ThemedText type="link"> Registrarse </ThemedText>
        </Link>
      </ThemedText>
    </ThemedView>
  );
}
