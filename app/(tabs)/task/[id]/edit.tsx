import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Redirect, useLocalSearchParams, router } from "expo-router";
import { tasks } from "@/tasks.json";
import { Card, TextInput, Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function EditTaskScreen() {
  const { id: index } = useLocalSearchParams();

  if (index == undefined || Array.isArray(index)) {
    return <Redirect href="/task-list" />;
  }

  const indexNumber = parseInt(index);
  return (
    <ThemedView>
      <Card style={styles.card}>
        <ThemedText type="title">Editar Tarea {index}</ThemedText>
        <TextInput label="Título" value={tasks[indexNumber].title} />
        <TextInput label="Descripción" value={tasks[indexNumber].description} />
        <TextInput label="Author" value={tasks[indexNumber].author} />
        <TextInput label="Fecha" value={tasks[indexNumber].date} />

        <Button onPress={() => {
          router.replace(`task-list`);
        }}>Guardar</Button>
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 200,
    marginRight: 200,
    borderRadius: 0,
  },
});
