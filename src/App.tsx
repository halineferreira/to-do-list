import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./App.module.css";
import "./global.css";
import { useState } from "react";

export interface ITask {
  id: number;
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      text: "aa",
      isCompleted: true,
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  function handleCreateTask() {
    alert("clicou");
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  return (
    <>
      {console.log(tasks)}
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Create a new task"
          />
          <Button onClick={handleCreateTask}>
            Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
      </section>
    </>
  );
}
