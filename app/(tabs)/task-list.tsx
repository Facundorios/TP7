import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, Card } from "react-native-paper";
import { styles } from ".";
import { Link, router } from "expo-router";
import { FlatList } from "react-native";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

export default function TodoListScreen() {
  const { tareas } = useContext(TaskContext);
  return (
    <ThemedView>
      <ThemedText type="title">Todo List</ThemedText>
      <Button
        icon="account-cowboy-hat"
        style={styles.button}
        onPress={() => {
          router.replace(`task-form`);
        }}
      >
        Añadir to do
      </Button>
      <ThemedText>Lista de tareas:</ThemedText>
      {tareas.length === 0 && <ThemedText>No hay tareas</ThemedText>}
      {tareas && (
        <FlatList
          data={tareas}
          renderItem={({ item }) => (
            <ThemedView>
              <Card>
                <ThemedText type="title">{item.title}</ThemedText>
                <Card.Content>
                  <ThemedText>{item.description}</ThemedText>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={() => {}}>Ver</Button>
                  <Button onPress={() => {}}>Editar</Button>
                </Card.Actions>
              </Card>
            </ThemedView>
          )}
        />
      )}
    </ThemedView>
  );
}
