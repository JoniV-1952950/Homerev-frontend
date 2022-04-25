import React from "react";
import {graphql} from 'babel-plugin-relay/macro';
import { TaskList_tasks$key } from "./__generated__/TaskList_tasks.graphql";
import { useFragment } from "react-relay";
import { Card, ListGroup, ListGroupItem, Tab } from "react-bootstrap";


// Define a query
const taskListFragment = graphql`
    fragment TaskList_tasks on Patient {
            tasksNext(perPage: $perPage){
            dateCreated
            task
            type
            id
        }
    }
`;

interface IProps {
    tasks: TaskList_tasks$key
}

export function TaskList(props: IProps){
    const data = useFragment(taskListFragment, props.tasks).tasksNext;
    return (
        <>
            <ListGroup variant="flush">
                {data.map((task) => (
                <ListGroupItem key={task?.id}>
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
                            <ListGroup variant="flush"> 
                                {Object.entries(task?.task).sort().map((pair, idx) => <ListGroupItem key={idx}>{pair[0]}: {pair[1]}</ListGroupItem>)}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </ListGroupItem>
                ))}
            </ListGroup>
        </>
    )
}