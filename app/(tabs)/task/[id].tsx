import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TaskContext } from "@/context/TaskContext";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useEffect, useContext } from "react";
import { tasks } from "@/tasks.json";
import { Card } from "react-native-paper";
import  { StyleSheet } from 'react-native'

export default function TaskScreen() {
  const { id: index } = useLocalSearchParams();

  if (index == undefined || Array.isArray(index)) {
    return <Redirect href="/task-list" />;
  }

  const indexNumber = parseInt(index);
  return (
    <ThemedView>
      <Card style={styles.card}>
        <ThemedText type="title">{tasks[indexNumber].title}</ThemedText>
        <ThemedText type="subtitle">Identidicador: {[indexNumber]}</ThemedText>
        <ThemedText type="default">Autor: {tasks[indexNumber].author} </ThemedText>
        <ThemedText type="default">Descripción: {tasks[indexNumber].description}</ThemedText>
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 200,
    marginRight: 200,
    borderRadius: 0
  }
})