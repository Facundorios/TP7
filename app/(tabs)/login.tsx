import { ThemedText } from "@/components/ThemedText";
import { NativeBaseProvider, Stack, FormControl, Input, Button } from "native-base";
import { useState } from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <Component />
    </NativeBaseProvider>
  );
}

function Component() {
  return (
    <Stack space={4} w="75%" maxW="300px" mx="auto" marginTop="12">
      <ThemedText>Iniciar Sesión</ThemedText>

      <FormControl>
        <Input size="xs" placeholder="Username" />
        <Input size="xs" placeholder="Password" />
        <Button>Iniciar Sesión</Button>
      </FormControl>
    </Stack>
  );
}
