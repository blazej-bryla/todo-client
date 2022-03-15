import { useRef, useState } from "react";
import {
  deleteTask,
  modifyTask,
  markRealized,
  revertRealized,
} from "../../api";
import cn from "classnames";
import { Icon } from "@iconify/react";

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

  const realizedOnClick = async () => {
    await markRealized(taskId);
  };
  const revertOnClick = async () => {
    await revertRealized(taskId);
  };

  return (
    <div
      className={cn(
        "w-full flex justify-between max-w-[70%] mx-auto border-2 border-black p-4",
        task.isRealized ? "bg-green-500" : ""
      )}
    >
      <span>{index + 1}</span>
      {state ? (
        <input className="w-[50%]" placeholder={task.task} ref={inputRef} />
      ) : (
        <span className="w-[50%]">{task.task}</span>
      )}

      <div
        className="cursor-pointer"
        onClick={state ? modifyOnClick : toModify}
      >
        {state ? (
          <Icon icon="entypo:save" width="30" height="30" />
        ) : (
          <Icon
            icon="clarity:edit-solid"
            color="black"
            width="30"
            height="30"
          />
        )}
      </div>
      <div className="cursor-pointer" onClick={deleteOnClick}>
        <Icon
          icon={"emojione-monotone:cross-mark-button"}
          color="red"
          width="30"
          height="30"
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={task.isRealized ? revertOnClick : realizedOnClick}
      >
        {task.isRealized ? (
          <Icon icon="system-uicons:revert" width="30" height="30" />
        ) : (
          <Icon
            icon={"emojione-v1:white-heavy-check-mark"}
            width="30"
            height="30"
          />
        )}
      </div>
    </div>
  );
};
export default TaskItem;
