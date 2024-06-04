
import { ThemedText } from "@/src/components/ThemedText";
import {
  Input,
  Stack,
  NativeBaseProvider,
  FormControl,
  Button,
} from "native-base";
import { useState } from "react";

export default function Register() {
  return (
    <NativeBaseProvider>
      <Component />
    </NativeBaseProvider>
  );
}

function Component() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Validar username:
    if (username.length < 5) {
      alert("El username debe tener al menos 5 caracteres.");
      return;
    }
    // Validar email:
    if (!email.includes("@")) {
      alert("El email debe tener un @.");
      return;
    }

    // Validar password:
    if (password.length < 5) {
      setError("La contraseña debe tener al menos 5 caracteres.");
      return;
    }
    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      setError(
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un símbolo."
      );
      return;
    }
  };
  return (
    <Stack space={4} w="75%" maxW="300px" mx="auto" marginTop="12">
      <ThemedText>Registrarse</ThemedText>
      <FormControl>
        <Input size="xs" placeholder="Username" />
        <Input size="xs" placeholder="Email" />
        <Input size="xs" placeholder="Password" type="password" />
        <Button onPress={handleRegister}>Registrarse</Button>
      </FormControl>
    </Stack>
  );
}
