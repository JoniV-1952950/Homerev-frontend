import React, { Suspense } from "react";
import {graphql} from 'babel-plugin-relay/macro';
import { PreloadedQuery, RelayEnvironmentProvider, usePreloadedQuery } from "react-relay";
import { PatientAllQuery } from "./__generated__/PatientAllQuery.graphql";
import RelayEnvironment from "../utils/RelayEnvironment";
import { PatientCard } from "./PatientCard";
import { TaskList } from "./TaskList";
import { TodoList } from "./TodoList";
import { Card, ListGroup, ListGroupItem, Placeholder, Stack, Tab, Tabs } from "react-bootstrap";
import { Variables } from "../utils/Variables";
import { TaskCard_task$key } from "./__generated__/TaskCard_task.graphql";
import { TodoCard_todo$key } from "./__generated__/TodoCard_todo.graphql";

// Define a query, uses the fragments defined in other components (TaskList, TodoList, PatientCard)
export const patientAllQuery = graphql`
 query PatientAllQuery($paginationTask: Pagination!, $paginationTodo: Pagination!, $patientId: String!) {
    patient(id: $patientId) {
        ...PatientCard_patient
        tasks(pagination: $paginationTask){
            ...TaskCard_task
        }
        todos(pagination: $paginationTodo){
            ...TodoCard_todo
        }
    }
}
`;

interface IProps {
    preloadedQuery: PreloadedQuery<PatientAllQuery, {}>
}

// component containing all the information
function PatientAll(props: IProps){
    const data = usePreloadedQuery(patientAllQuery, props.preloadedQuery);
    
    let extraTab;
    if(sessionStorage.getItem(Variables.ROLE) === Variables.THERAPIST_ROLE)
        extraTab =  <Tab eventKey="addTodo" title="Add a todo">
                        <p>To be implemented</p>
                    </Tab>;
    else if(sessionStorage.getItem(Variables.ROLE) === Variables.PATIENT_ROLE)
        extraTab =  <Tab eventKey="addTask" title="Add a task">
                        <p>To be implemented</p>
                    </Tab>;
    else
        extraTab = null;

    return (
        <>
            <Stack gap={3}>            
                <PatientCard patient={data.patient}/>
                <Tabs defaultActiveKey="tasks">
                    <Tab eventKey="tasks" title="Tasks">
                        <TaskList taskList={data.patient.tasks.map((fragment) => fragment as TaskCard_task$key)}/>
                    </Tab>
                    <Tab eventKey="todos" title="Todos">
                        <TodoList todoList={data.patient.todos.map((fragment) => fragment as TodoCard_todo$key)} />
                    </Tab>
                    {extraTab}
                </Tabs>
            </Stack>
        </>
    )
}

// a placeholder for the whole page while loading, could split this up over the components
const placeholder = (
    <>
        <Stack gap={3}>            
            <Card>
                <Card.Body>
                <Placeholder as={Card.Title} animation={Variables.PLACEHOLDER_ANIMATION}>
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation={Variables.PLACEHOLDER_ANIMATION}>
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                </Card.Body>
            </Card>
            <Tabs defaultActiveKey="tasks">
                <Tab eventKey="tasks" title="Tasks">
                    <ListGroup>
                        {Array.from({ length: Variables.TASKS_TODOS_PER_PAGE}).map((_, idx) => (
                            <ListGroupItem variant={Variables.LISTGROUP_VARIANT}>
                                <Card>
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation={Variables.PLACEHOLDER_ANIMATION}>
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation={Variables.PLACEHOLDER_ANIMATION}>
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                    </Card.Body>
                                </Card>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Tab>
                <Tab eventKey="todos" title="Todos">
                    <ListGroup>
                        {Array.from({ length: Variables.TASKS_TODOS_PER_PAGE}).map((_, idx) => (
                            <ListGroupItem variant={Variables.LISTGROUP_VARIANT}>
                                <Card>
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation={Variables.PLACEHOLDER_ANIMATION}>
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation={Variables.PLACEHOLDER_ANIMATION}>
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                    </Card.Body>
                                </Card>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Tab>
                </Tabs>
            </Stack>
    </>
)

// component containing the relay environment and suspense, relay environment is needed to make the query
function PatientAllRoot(props: IProps) {
    return (
        <>
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback={placeholder}>
                    <PatientAll preloadedQuery={props.preloadedQuery}/>
                </Suspense>
            </RelayEnvironmentProvider>
        </>
    )
}

export default PatientAllRoot;