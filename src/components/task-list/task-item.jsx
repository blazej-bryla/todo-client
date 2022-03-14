import { deleteTask } from "../../api";
const TaskItem = ({ task, index }) => {
  const handleOnClick = async (event) => {
    const taskId = task.id;
    await deleteTask(taskId);
    
  };
  return (
    <div className="w-full flex justify-between">
      <span>{index}</span>
      <span className="w-[25%]">{task.task}</span>
      <div className="cursor-pointer " onClick={handleOnClick}>USUŃ</div>
      <div>SKOŃCZONE</div>
    </div>
  );
};
export default TaskItem;
