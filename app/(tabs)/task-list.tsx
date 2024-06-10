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
  const { tareas, handleEditTask, handleSeeTask } = useContext(TaskContext);
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
      <Button
        onPress={() => {
          router.replace(`config`);
        }}
      >
        Configuración
      </Button>
      <ThemedText>Lista de tareas:</ThemedText>
      <ThemedView>
        <Button
          icon="add"
          style={styles.button}
          onPress={() => {
            router.replace(`task-form`);
          }}
        >
          Añadir to do
        </Button>

        {tareas && (
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => (
              <ThemedView>
                <Card style={styles.card}>
                  <Card.Content>
                    <ThemedText type="title">{item.title}</ThemedText>
                    <ThemedText type="subtitle">{item.description}</ThemedText>
                    <ThemedText type="default">{item.author}</ThemedText>
                    <ThemedText type="defaultSemiBold">{item.date}</ThemedText>

                    <Card.Actions>
                      <Button
                        onPress={() => {
                          handleEditTask(index);
                        }}
                      >
                        Editar
                      </Button>

                      <Button
                        onPress={() => {
                          handleSeeTask(index);
                        }}
                      >
                        Ver
                      </Button>

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
    backgroundColor: "grey",
    marginTop: 20,
    marginBottom: 20,
  },
});
