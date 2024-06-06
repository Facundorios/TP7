import { router } from "expo-router";
import { createContext, useState, ReactNode } from "react";

interface TaskType {
  title: string;
  description: string;
  author: string;
  date: string;
}

export const TaskContext = createContext({
  task: {
    title: "",
    description: "",
    author: "",
    date: "",
  },
  handleTask: (key: string, value: string) => {},
  handleTaskCreation: () => {},
  tareas: [] as unknown as TaskType[],
  handleDeteleTask: (index: number) => {},
  handleDetailsTask: (index: number) => {},
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
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

  const handleDeteleTask = (index: number) => {
    const newTareas = tareas.filter((_, i) => i !== index);
    setTareas(newTareas);
  };

  const handleDetailsTask = (index: number) => {
    const tarea = tareas[index];
    router.replace(`task/${index}`);
  };
  
  return (
    <TaskContext.Provider
      value={{
        task,
        handleTask,
        handleTaskCreation,
        tareas,
        handleDeteleTask,
        handleDetailsTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
