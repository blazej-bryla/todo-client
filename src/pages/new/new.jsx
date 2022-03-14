import React, { useRef, useState } from "react";
import Layout from "../../components/layout";
import { addNewTask } from "../../api";

const states = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const New = () => {
  const inputRef = useRef(null);
  const [status, setStatus] = useState(states.IDLE);
  const [error, setError] = useState(null);

  const handleOnClick = async (event) => {
    const newTask = inputRef.current.value;

    setStatus(states.LOADING);
    const response = await addNewTask({ task: newTask });

    if (response.success) {
      setStatus(states.SUCCESS);
      setError(null);
      inputRef.current.value = "";
    } else {
      setStatus(states.ERROR);
      setError(response.error.message)
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

      default:
        return null;
    }
  };

  return (
    <main>
      <div>Podstrona NEW</div>
      <input disabled={status === states.LOADING} ref={inputRef} type="text" />
      <button disabled={status === states.LOADING} onClick={handleOnClick}>
        Dodaj
      </button>
      {getUserFeedback()}
    </main>
  );
};

export default function All() {
  return <Layout main={<New />} />;
}
