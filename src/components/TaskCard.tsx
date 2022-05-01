import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {graphql} from 'babel-plugin-relay/macro';
import { Variables } from "../utils/Variables";
import { TaskCard_task$key } from "./__generated__/TaskCard_task.graphql";
import { useFragment } from "react-relay";

// Define a fragment
const taskListPatientFragment = graphql`
    fragment TaskCard_task on Task {
        dateCreated
        task
        type
        id
    }
`;

export function TaskCard(props: {task: TaskCard_task$key | null}) {
    const task = useFragment(taskListPatientFragment, props.task || null);
    return (
        <Card bg="dark" text="light">
            <Card.Body>
                <Card.Title>Task</Card.Title>
                <Card.Text>
                    Created at: {new Date(task?.dateCreated).toLocaleString()} 
                    <br/>
                    Type of project: {task?.type}
                    <br/>
                </Card.Text>
                Task information: <br/>
                <ListGroup variant={Variables.LISTGROUP_VARIANT}> 
                    {Object.entries(task?.task).sort().map((pair, idx) => <ListGroupItem key={idx}>{pair[0]}: {pair[1]}</ListGroupItem>)}
                </ListGroup>
            </Card.Body>
        </Card>);
}