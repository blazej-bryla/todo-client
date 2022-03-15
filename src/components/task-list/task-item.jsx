import { useRef, useState } from "react";
import { deleteTask, modifyTask } from "../../api";
const TaskItem = ({ task, index }) => {
  const taskId = task.id;
  const inputRef = useRef(null);
  const [state, setState] = useState(false);

  const toModify = () => {
    setState(!state);
  };

  const modifyOnClick = async () => {
    const newTask = inputRef.current.value;
    await modifyTask(taskId, newTask);
    setState(!state);
  };

  const deleteOnClick = async () => {
    await deleteTask(taskId);
  };

  return (
    <div className="w-full flex justify-between">
      <span>{index}</span>
      {state ? (
        <input ref={inputRef} />
      ) : (
        <span className="w-[25%]">{task.task}</span>
      )}

      <div
        className="cursor-pointer"
        onClick={state ? modifyOnClick : toModify}
      >
        {state ? "ZAPISZ" : "EDYTUJ"}
      </div>
      <div className="cursor-pointer" onClick={deleteOnClick}>
        USUŃ
      </div>
      <div>SKOŃCZONE</div>
    </div>
  );
};
export default TaskItem;
