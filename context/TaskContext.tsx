import { router } from "expo-router";
import { createContext, useState, useContext, ReactNode } from "react";

interface TaskType {
  title: string;
  description: string;
}

export const TaskContext = createContext({
  task: {
    title: "",
    description: "",
  },
  handleTask: (key: string, value: string) => {},
  handleTaskCreation: () => {},
  tareas: [] as unknown as TaskType[],
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [tareas, setTareas] = useState<TaskType[]>([]);

  const handleTask = (key: string, value: string) => {
    setTask((prevTask) => ({ ...prevTask, [key]: value }));
  };

  const handleTaskCreation = () => {
    if (task.title.length < 5) {
      alert("El título debe tener al menos 5 caracteres");
      return;
    }

    if (task.description.length < 5) {
      alert("La descripción debe tener al menos 5 caracteres");
      return;
    }

    setTareas((prevTareas) => [...prevTareas, task]);

    router.replace("task-list");
    return tareas;
  };

  return (
    <TaskContext.Provider
      value={{ task, handleTask, handleTaskCreation, tareas }}
    >
      {children}
    </TaskContext.Provider>
  );
};
