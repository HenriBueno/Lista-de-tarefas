import { useState } from "react";
import InputDefault from "../components/InputDefault";
import ButtonDefault from "../components/ButtonDefault";
import TaskType from "../types/taskType";
import RadioDefault from "../components/RadioDefault";

function Home() {
  const [name, setName] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [status, setStatus] = useState<string>("progress");
  const [list, setList] = useState<TaskType[]>([]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (name && task) {
      const newTask: TaskType = {
        name,
        task,
        status,
      };
      setList([...list, newTask]);
      console.log(list);
      setName("");
      setTask("");
      setStatus("progress");
    } else {
      return;
    }
  }

  return (
    <>
      <h1>Lista de tarefas</h1>

      <form onSubmit={handleSubmit}>
        <InputDefault
          action={setName}
          key="name"
          label="Noma da tarefa"
          value={name}
        />

        <InputDefault action={setTask} key="task" label="Tarefa" value={task} />

        <RadioDefault
          action={setStatus}
          key="progress"
          label="Andamento"
          value="progress"
          checked={status}
        />
        <RadioDefault
          action={setStatus}
          key="finished"
          label="Finalizado"
          value="finished"
          checked={status}
        />

        <ButtonDefault label="Enviar" type="submit" />

        {list.map((item) => (
          <div>
            <a href="">{item.name}</a>
            <p>{item.task}</p>
            <p>{item.status}</p>
          </div>
        ))}
      </form>
    </>
  );
}

export default Home;
