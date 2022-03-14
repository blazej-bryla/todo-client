import TaskItem from "./task-item"

const TaskList = ({tasks}) => {
    return(
        <ul>
            {tasks.map((item, i) => {
                return (
                    <li key={item.id}>
                        <TaskItem task={item} index={i} />
                    </li>
                )
            })}
        </ul>
    )
}
export default TaskList