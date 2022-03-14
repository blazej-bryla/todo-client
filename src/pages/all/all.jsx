import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import { fetchAllTasks } from "../../api";
import TaskList from "../../components/task-list/task-list";


const AllMain = () => {
  const [tasks, setTasks] = useState([{ id: 0, task: "Sample task" }]);

  useEffect(() => {
    fetchAllTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <main>
     <TaskList tasks={tasks} />
    </main>
  );
};

export default function All() {
  return <Layout main={<AllMain />} />;
}
