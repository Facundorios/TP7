import { styles } from "@/app/(tabs)";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TaskContext } from "@/context/TaskContext";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useContext } from "react";

export const TaskForm = () => {

  const { task, handleTask, handleTaskCreation } = useContext(TaskContext);



return (
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="title">Crear tarea</ThemedText>

      <ThemedText>Título</ThemedText>

      <TextInput
        label="Título"
        value={task.title}
        onChangeText={(value) => handleTask("title", value)}
      />

      <ThemedText>Descripción</ThemedText>

      <TextInput
        label="Descripción"
        value={task.description}
        onChangeText={(value) => handleTask("description", value)}
        />

      <Button mode="contained" onPress={handleTaskCreation}>
        Crear tarea
      </Button>
    </ThemedView>
  );
};

