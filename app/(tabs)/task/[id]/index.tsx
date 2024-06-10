import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { tasks } from "@/tasks.json";
import { Button, Card } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function SeeTaskScreen() {
  const { id: index } = useLocalSearchParams();

  if (index == undefined || Array.isArray(index)) {
    return <Redirect href="/task-list" />;
  }

  const indexNumber = parseInt(index);
  return (
    <ThemedView>
      <Card style={styles.card}>
        <ThemedText type="title">Tarea Numero {index}</ThemedText>
        <ThemedText type="subtitle">{tasks[indexNumber].title}</ThemedText>
        <ThemedText type="default">{tasks[indexNumber].description}</ThemedText>
        <ThemedText type="defaultSemiBold">
          {tasks[indexNumber].author}
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          {tasks[indexNumber].date}
        </ThemedText>
        <Button onPress={() => {
          router.push("/task-list");
        }}>
          Volver
        </Button>
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "grey",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 200,
    marginRight: 200,
  },
});
