import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Button, Card } from "react-native-paper";
import { router } from "expo-router";
import { FlatList, Image, StyleSheet } from "react-native";
import { tasks } from "../../tasks.json";

export default function TodoListScreen() {
  const { tareas, handleDetailsTask } = useContext(TaskContext);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/task-logo.png")}
          style={styles.logo}
        />
      }
    >
      {" "}
      <Button onPress={() => {}}>Atras</Button>
      <ThemedView>
        <ThemedText>Lista de tareas:</ThemedText>
        <Button
          icon="add"
          style={styles.button}
          onPress={() => {
            router.replace(`task-form`);
          }}
        >
          Añadir to do
        </Button>
        {tareas.length === 0 && <ThemedText>No hay tareas</ThemedText>}
        {tareas && (
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => (
              <ThemedView>
                <Card>
                  <Card.Content>
                    <ThemedText type="title">{item.title}</ThemedText>
                    <Card.Actions>
                      <Button
                        onPress={() => {
                          handleDetailsTask(index);
                        }}
                      >
                        Ver
                      </Button>
                      <Button onPress={() => {}}>Editar</Button>
                      <Button onPress={() => {}}>Eliminar</Button>
                    </Card.Actions>
                  </Card.Content>
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
    marginTop: 20,
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
