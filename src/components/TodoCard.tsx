import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {graphql} from 'babel-plugin-relay/macro';
import { Variables } from "../utils/Variables";
import { TaskCard_task$key } from "./__generated__/TaskCard_task.graphql";
import { useFragment } from "react-relay";
import { TodoCard_todo$key } from "./__generated__/TodoCard_todo.graphql";

// Define a fragment
const todoCardFragment = graphql`
    fragment TodoCard_todo on Todo {
        dateCreated
        todo
        deadline
        type
        id
    }
`;

export function TodoCard(props: {todo?: TodoCard_todo$key | null}) {
    const todo = useFragment(todoCardFragment, props.todo || null);
    return (
        <Card bg="dark" text="light">
            <Card.Body>
                <Card.Title>Todo</Card.Title>
                <Card.Text>
                    Created at: {new Date(todo?.dateCreated).toLocaleString()} 
                    <br/>
                    Deadline: {todo?.deadline}
                    <br/>
                    Type of project: {todo?.type}
                    <br/>
                </Card.Text>
                Todo information: <br/>
                <ListGroup variant={Variables.LISTGROUP_VARIANT}> 
                    {Object.entries(todo?.todo).sort().map((pair, idx) => <ListGroupItem key={idx}>{pair[0]}: {pair[1]}</ListGroupItem>)}
                </ListGroup>
            </Card.Body>
        </Card>);
}