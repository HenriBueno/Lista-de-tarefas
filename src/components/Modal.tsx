import TaskType from "../types/taskType";
import RadioDefault from "./RadioDefault";

interface ModalProps{
    item : TaskType
    action: ()=>void
}

function Modal({item, action}:ModalProps) {
  return (
    <>
      <div>
        <h2>{item.name}</h2>
        <p>{item.task}</p>
        <RadioDefault
          action={action}
          key="progress"
          label="Andamento"
          value="progress"
          checked={item.status}
        />
        <RadioDefault
          action={action}
          key="finished"
          label="Finalizado"
          value="finished"
          checked={item.status}
        />
      </div>
    </>
  );
}

export default Modal;
