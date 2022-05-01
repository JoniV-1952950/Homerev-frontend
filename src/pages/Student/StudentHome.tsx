import React from "react";
import { Container } from "react-bootstrap";
import { loadQuery, PreloadedQuery } from "react-relay";
import { TasksFilter } from "../../components/TasksFilter";
import TaskTabs, { taskTabsQuery } from "../../components/TaskTabs";
import { TaskTabsQuery, TaskTabsQuery$variables } from "../../components/__generated__/TaskTabsQuery.graphql";
import RelayEnvironment from "../../utils/RelayEnvironment";

interface IProps {
}

interface IState {
    preloadedQuery: PreloadedQuery<TaskTabsQuery, {}>,
}

class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        // load the query already to save some time when we want to render it
        this.state = {
            preloadedQuery: loadQuery<TaskTabsQuery>(RelayEnvironment, taskTabsQuery, {
                                    nrPatients: 5,
                                    nrTasksPerPatient: 5,
                                }),

        };
        // bind this function to this class so we can access the state in other components
        this.searchTasks = this.searchTasks.bind(this); 
    }
    
    // load a new query, this time with the given input in the searchbar
    searchTasks(searchObject: TaskTabsQuery$variables): void {
        this.setState(
            {
                preloadedQuery: loadQuery<TaskTabsQuery>(RelayEnvironment, taskTabsQuery, searchObject)
            });
    }

    // render the home page
    render() {
        return (
            <>
                <Container className="w-50 mb-3 mt-3">
                    <TasksFilter searchTasks={this.searchTasks}/>
                    <TaskTabs preloadedQuery={this.state.preloadedQuery}/>
                </Container>
            </>);
    }
}

export default Home;