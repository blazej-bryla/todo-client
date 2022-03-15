import React, { useEffect, useState, useRef } from "react";
import { fetchAllTasks } from "../../api";
import TaskList from "../../components/task-list/task-list";
import NewTask from "../../components/new-task";
import DefaultLayout from "../../layouts/default/default-layout";



const AllMain = () => {
  const [tasks, setTasks] = useState([{ id: 0, task: "Sample task" }]);

  

  useEffect(() => {
    fetchAllTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);

  

  return (
    <DefaultLayout>

      <TaskList tasks={tasks} />

      <NewTask />
    </DefaultLayout>
  );
};

export default AllMain
