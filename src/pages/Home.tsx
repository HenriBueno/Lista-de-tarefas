import { useState } from "react";
import InputDefault from "../components/InputDefault";
import ButtonDefault from "../components/ButtonDefault";
import TaskType from "../types/taskType";
import Modal from "../components/Modal";

function Home() {
  const [name, setName] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [status, setStatus] = useState<string>("progress");
  const [list, setList] = useState<TaskType[]>([]);
  const [modal, setModal] = useState<boolean>(false)

  function setStatusModal(){
    setStatus(status)
  }

  function showModal(){
    setModal(!modal)
  }

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
        <ButtonDefault label="Enviar" type="submit" />

        {list.map((item) => (
          <div>
            <a onClick={showModal} >{item.name}</a>
            <p>{item.task}</p>
            <p>{item.status}</p>
            {modal && <Modal item={item} action={setStatusModal}/>}
          </div>
        ))}
      </form>
    </>
  );
}

export default Home;
