import { TaskForm } from "@/components/forms/TaskForm";
import { ThemedView } from "../../components/ThemedView";

export default function TodoListScreen() {
  return (
    <ThemedView>
      <TaskForm />
    </ThemedView>
  );
}
