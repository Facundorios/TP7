import { Slot, Stack } from "expo-router";

export default function TaskLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
