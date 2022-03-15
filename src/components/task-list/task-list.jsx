import TaskItem from "./task-item"

const TaskList = ({tasks}) => {
    return(
        <ul className="flex flex-col gap-4 ">
            {tasks.map((item, i) => {
                return (
                    <li key={item.id} className="group">
                        <TaskItem task={item} index={i} />
                    </li>
                )
            })}
        </ul>
    )
}
export default TaskList