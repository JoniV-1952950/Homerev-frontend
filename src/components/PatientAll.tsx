import React, { Suspense } from "react";
import {graphql} from 'babel-plugin-relay/macro';
import { PreloadedQuery, RelayEnvironmentProvider, usePreloadedQuery } from "react-relay";
import { PatientAllQuery } from "./__generated__/PatientAllQuery.graphql";
import RelayEnvironment from "../utils/RelayEnvironment";
import { PatientCard } from "./PatientCard";
import { TaskList } from "./TaskList";
import { Card, ListGroup, ListGroupItem, Placeholder, Stack, Tab, Tabs } from "react-bootstrap";

// Define a query
export const patientAllQuery = graphql`
 query PatientAllQuery($perPage: Int!, $patientId: String!) {
    getPatient(id: $patientId) {
        ...PatientCard_patient
        ...TaskList_tasks
    }
}
`;

interface IProps {
    preloadedQuery: PreloadedQuery<PatientAllQuery, {}>
}

function PatientAll(props: IProps){
    const data = usePreloadedQuery(patientAllQuery, props.preloadedQuery);
    return (
        <>
            <Stack gap={3}>            
                <PatientCard patient={data.getPatient}/>
                <Tabs defaultActiveKey="tasks">
                    <Tab eventKey="tasks" title="Tasks">
                        <TaskList tasks={data.getPatient}/>
                    </Tab>
                    <Tab eventKey="todos" title="Todos">
                        <PatientCard patient={data.getPatient} />
                    </Tab>
                </Tabs>
            </Stack>
        </>
    )
}

const placeholder = (
    <>
        <Stack gap={3}>            
            <Card>
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                </Card.Body>
            </Card>
            <Tabs defaultActiveKey="tasks">
                <Tab eventKey="tasks" title="Tasks">
                    <ListGroup>
                        {Array.from({ length: 10}).map((_, idx) => (
                            <ListGroupItem variant="flush">
                                <Card>
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
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
                        {Array.from({ length: 10}).map((_, idx) => (
                            <ListGroupItem variant="flush">
                                <Card>
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
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