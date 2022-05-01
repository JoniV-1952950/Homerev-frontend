import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Variables } from "../utils/Variables";
import { TaskCard } from "./TaskCard";
import { TaskCard_task$key } from "./__generated__/TaskCard_task.graphql";

interface IProps {
    taskList: (TaskCard_task$key | null)[]
}

export function TaskList(props: IProps) {
    const data = props.taskList
    return (
        <>
            <ListGroup variant={Variables.LISTGROUP_VARIANT}>
                {/* for every task in tasks create a listgroupitem with a card in it */}
                {data.map((task, idx) => (
                <ListGroupItem key={idx}>
                    <TaskCard task={task}/>
                </ListGroupItem>
                ))}
            </ListGroup>
        </>
    )
}
