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
    let newTask = inputRef.current.value;
    if (newTask === "") {
      newTask = task.task;
    }
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
        "w-full flex justify-between items-center max-w-[70%] mx-auto border-2 border-black p-4 group-hover:bg-gray-100 transition-all duration-300",
        task.isRealized ? "bg-green-500" : ""
      )}
    >
      <span>{index + 1}</span>
      {state ? (
        <input
          className="w-[50%] border p-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={task.task}
          ref={inputRef}
        />
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
