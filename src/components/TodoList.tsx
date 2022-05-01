import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Variables } from "../utils/Variables";
import { TodoCard_todo$key } from "./__generated__/TodoCard_todo.graphql";
import { TodoCard } from "./TodoCard";

interface IProps {
    todoList: (TodoCard_todo$key | null)[]
}

export function TodoList(props: IProps){
    // use the fragment above as a dependency for this component
    const data = props.todoList;
    return (
        <>
            <ListGroup variant={Variables.LISTGROUP_VARIANT}>
                {/* for each element in todos create  a listgroupitem with a card in it */}
                {data.map((todo, idx) => (
                <ListGroupItem key={idx}>
                    <TodoCard todo={todo}/>
                </ListGroupItem>
                ))}
            </ListGroup>
        </>
    )
}