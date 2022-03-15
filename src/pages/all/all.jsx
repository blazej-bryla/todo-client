import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/layout";
import { fetchAllTasks } from "../../api";
import TaskList from "../../components/task-list/task-list";
import NewTask from "../../components/new-task";



const AllMain = () => {
  const [tasks, setTasks] = useState([{ id: 0, task: "Sample task" }]);

  

  useEffect(() => {
    fetchAllTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);

  

  return (
    <main className="flex flex-col gap-4">
      <TaskList tasks={tasks} />

      <NewTask />
    </main>
  );
};

export default function All() {
  return <Layout main={<AllMain />} />;
}
