import React, { KeyboardEvent, ReactNode } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { loadQuery, PreloadedQuery } from "react-relay/hooks";
import PatientCardsList, { patientCardsListQuery } from "../components/PatientCardsList";
import Search from "../components/Search";
import type {PatientCardsListQuery} from '../components/__generated__/PatientCardsListQuery.graphql';
import RelayEnvironment from "../utils/RelayEnvironment";
import firebase from "firebase/compat/app";

interface IProps {
}

interface IState {
    preloadedQuery: PreloadedQuery<PatientCardsListQuery, {}>
}

class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        // load the query already to save some time when we want to render it
        this.state = {
            preloadedQuery: loadQuery<PatientCardsListQuery>(RelayEnvironment, patientCardsListQuery, {
                                    perPage: 12,
                                    therapistId: firebase.auth().currentUser?.uid as string,
                                }),
        };
        // bind this function to this class so we can access the state in other components
        this.searchPatients = this.searchPatients.bind(this); 
    }
    
    // load a new query, this time with the given input in the searchbar
    searchPatients(value: string | null): void {
        this.setState(
            {
                preloadedQuery: loadQuery<PatientCardsListQuery>(RelayEnvironment, patientCardsListQuery, {
                        perPage: 12,
                        therapistId: firebase.auth().currentUser?.uid as string,
                        name: value
                    })
            });
    }

    // render the home page
    render() {
        return (
            <>
                <Stack gap={3}>
                    <Search searchPatients={this.searchPatients}/>
                    <Container className="w-75">
                        <Button variant="dark" className="float-end">Add new patient</Button>
                    </Container>
                    <PatientCardsList preloadedQuery={this.state.preloadedQuery}/>
                </Stack>
            </>);
    }
}

export default Home;