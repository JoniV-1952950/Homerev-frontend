import {graphql} from 'babel-plugin-relay/macro';
import { Suspense } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { PreloadedQuery, RelayEnvironmentProvider, usePreloadedQuery } from 'react-relay';
import RelayEnvironment from '../utils/RelayEnvironment';
import { TaskList } from './TaskList';
import { TaskCard_task$key } from './__generated__/TaskCard_task.graphql';
import { TaskTabsQuery } from './__generated__/TaskTabsQuery.graphql';

export const taskTabsQuery = graphql`
    query TaskTabsQuery($nrPatients: Int!, $nrTasksPerPatient: Int!, $gender: Gender, $bdGt: Date, $bdLt: Date, $condition: String, $type: ProjectType) {
        tasksOfPatients(nr_patients: $nrPatients, nr_tasks_per_patient: $nrTasksPerPatient, gender: $gender, bd_gt: $bdGt, bd_lt: $bdLt, condition: $condition, type: $type) {
            ...TaskCard_task
        }
    }
`;

interface IProps {
    preloadedQuery: PreloadedQuery<TaskTabsQuery>
}

function TaskTabs(props: IProps) {
    const data = usePreloadedQuery(taskTabsQuery, props.preloadedQuery); 
    console.log(data.tasksOfPatients)
    return (
        <TaskList taskList={data.tasksOfPatients.map((fragment) => fragment as TaskCard_task$key)}/>

        // <Tab.Container defaultActiveKey="patient1">
        //     <Row>
        //         <Col sm={3}>
        //         <Nav variant="pills" className="flex-column">
        //             {data.tasksOfPatients.map((_taskArr, idx) => (
        //                 <Nav.Item>
        //                     <Nav.Link eventKey={"patient" + (idx + 1)}>{"Patient " + (idx + 1)}</Nav.Link>
        //                 </Nav.Item>
        //                 )
        //             )}
        //         </Nav>
        //         </Col>
        //         <Col sm={9}>
        //         <Tab.Content>
        //             {data.tasksOfPatients.map((taskArr, idx) => (
        //                 <Tab.Pane eventKey={"patient" + (idx + 1)}>
        //                     <TaskList taskList={data.tasksOfPatients.map((fragment) => fragment as TaskCard_task$key)}/>
        //                 </Tab.Pane>    
        //                 )
        //             )}
        //         </Tab.Content>
        //         </Col>
        //     </Row>
        // </Tab.Container>
    )
}

export default function TaskTabsRoot(props: IProps) {
    return (
        <>
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback="Loading data, might take a while">
                    <TaskTabs preloadedQuery={props.preloadedQuery} />
                </Suspense>
            </RelayEnvironmentProvider>
        </>
    );
}