import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, Card } from "react-native-paper";
import { Link, router, useLocalSearchParams } from "expo-router";
import { FlatList, Image, StyleSheet } from "react-native";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";
import { tasks } from "../../tasks.json"
import ParallaxScrollView from "@/components/ParallaxScrollView";



export default function TodoListScreen() {
  const { tareas } = useContext(TaskContext);
  const { id } = useLocalSearchParams();
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    headerImage={
      <Image
        source={require('@/assets/images/task-logo.png')}
        style={styles.logo}
      />
    }
  >
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
          data={tasks}
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
                  <Button onPress={() => {}}>Eliminar</Button>
                </Card.Actions>
              </Card>
            </ThemedView>
          )}
        />
      )}
    </ThemedView>
  </ParallaxScrollView>
  );
}

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    position: "absolute",
    marginTop: 20
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
  },
});
