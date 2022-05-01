import React, { KeyboardEvent, ReactNode } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { loadQuery, PreloadedQuery, RelayEnvironmentProvider } from "react-relay/hooks";
import PatientCardsList, { patientCardsListQuery } from "../../components/PatientCardsList";
import Search from "../../components/Search";
import type {PatientCardsListQuery} from '../../components/__generated__/PatientCardsListQuery.graphql';
import RelayEnvironment from "../../utils/RelayEnvironment";
import firebase from "firebase/compat/app";
import PatientModal from "../../components/PatientModal";
import { Variables } from "../../utils/Variables";

interface IProps {
}

interface IState {
    preloadedQuery: PreloadedQuery<PatientCardsListQuery, {}>,
    showPatientModal: boolean
}

class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        // load the query already to save some time when we want to render it
        this.state = {
            preloadedQuery: loadQuery<PatientCardsListQuery>(RelayEnvironment, patientCardsListQuery, {
                                    pagination: {
                                        perPage: Variables.PATIENTS_PER_PAGE
                                    },
                                    therapistId: sessionStorage.getItem(Variables.UID) as string,
                                }),
            showPatientModal: false

        };
        // bind this function to this class so we can access the state in other components
        this.searchPatients = this.searchPatients.bind(this); 
        this.showPatientModal = this.showPatientModal.bind(this);
    }
    
    // load a new query, this time with the given input in the searchbar
    searchPatients(value: string | null): void {
        this.setState(
            {
                preloadedQuery: loadQuery<PatientCardsListQuery>(RelayEnvironment, patientCardsListQuery, {
                        pagination: {
                            perPage: Variables.PATIENTS_PER_PAGE
                        },
                        therapistId: firebase.auth().currentUser?.uid as string,
                        name: value
                    })
            });
    }

    showPatientModal(show: boolean) {
        this.setState({showPatientModal: show});
    }

    // render the home page
    render() {
        return (
            <>
                <Stack gap={3}>
                    <Search searchPatients={this.searchPatients}/>
                    <Container className="w-75">
                        <Button variant="dark" className="float-end" onClick={() => this.showPatientModal(true)}>Add new patient</Button>
                    </Container>
                    <PatientCardsList preloadedQuery={this.state.preloadedQuery}/>
                </Stack>
                <PatientModal show={this.state.showPatientModal} setShow={this.showPatientModal}/>
            </>);
    }
}

export default Home;