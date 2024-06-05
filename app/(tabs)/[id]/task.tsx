import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TaskContext } from "@/context/TaskContext";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useContext } from "react";

export const TaskScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <ThemedView>
      <ThemedText>Task Screen {id}</ThemedText>
    </ThemedView>
  );
};
