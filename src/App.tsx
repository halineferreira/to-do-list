import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button>
            Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
      </section>
    </>
  );
}

export default App;
