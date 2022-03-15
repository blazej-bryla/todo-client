import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import { addNewTask } from "../api";

const states = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  WRONG: "WRITE SOMETHING...",
};

const NewTask = () => {
  const inputRef = useRef(null);
  const [status, setStatus] = useState(states.IDLE);
  const [error, setError] = useState(null);

  const handleOnClick = async (event) => {
    const newTask = inputRef.current.value;

    setStatus(states.LOADING);
    if (newTask === "") {
      setStatus(states.WRONG);
    } else {
      const response = await addNewTask({ task: newTask });

      if (response.success) {
        setStatus(states.SUCCESS);
        setError(null);
        inputRef.current.value = "";
      } else {
        setStatus(states.ERROR);
        setError(response.error.message);
      }
    }
  };

  const getUserFeedback = () => {
    switch (status) {
      case states.SUCCESS:
        return <span>Dodano poprawnie!</span>;
      case states.ERROR:
        return <span>Wystąpił błąd! {error}</span>;
      case states.LOADING:
        return <span>Ładowanie...</span>;
      case states.IDLE:
        return null;
      case states.WRONG:
        return <span>Wpisz coś!</span>;

      default:
        return null;
    }
  };

  return (
    <div className={"flex max-w-[70%] w-full mx-auto  gap-8 items-center"}>
      <input
        disabled={status === states.LOADING}
        ref={inputRef}
        type="text"
        className="w-[50%] border p-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      />
      <button disabled={status === states.LOADING} onClick={handleOnClick}>
        <Icon icon="carbon:add-filled" color="green" width="35" height="35" />
      </button>
      <div>{getUserFeedback()}</div>
    </div>
  );
};
export default NewTask;
