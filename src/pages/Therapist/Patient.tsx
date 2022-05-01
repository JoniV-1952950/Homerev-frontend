import React from "react";
import { commitMutation, loadQuery, PreloadedQuery, RelayEnvironmentProvider, usePreloadedQuery } from "react-relay/hooks";
import RelayEnvironment from "../../utils/RelayEnvironment";
import { Button, Container, Stack } from "react-bootstrap";
import {graphql} from 'babel-plugin-relay/macro';
import PatientAll, { patientAllQuery } from "../../components/PatientAll";
import { PatientAllQuery } from "../../components/__generated__/PatientAllQuery.graphql";
import { Variables } from "../../utils/Variables";
import PatientModal from "../../components/PatientModal";
import { PatientDeleteMutation } from "./__generated__/PatientDeleteMutation.graphql";

interface IProps {

}

interface IState {
    preloadedQuery: PreloadedQuery<PatientAllQuery, {}>,
    showPatientModal: boolean
}

class Patient extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            // load the query creating this component to save some time when rendering
            preloadedQuery: loadQuery<PatientAllQuery>(RelayEnvironment, patientAllQuery, {
                                    patientId: window.location.href.split('/')[Variables.NR_SLASH_PATIENT_ID],
                                    paginationTask: {
                                        perPage: Variables.TASKS_TODOS_PER_PAGE
                                    },
                                    paginationTodo: {
                                        perPage: Variables.TASKS_TODOS_PER_PAGE
                                    }
                                }),
            showPatientModal: false,
        };
        this.showPatientModal = this.showPatientModal.bind(this);
    }

    showPatientModal(show: boolean) {
        this.setState({showPatientModal: show});
    }

    // function to delete the current patient
    commitPatientDelete(input: string) {
        commitMutation<PatientDeleteMutation>(RelayEnvironment, {
            mutation: graphql`
              mutation PatientDeleteMutation($input: String!) {
                deletePatient(id: $input)
              }
            `,
            variables: {input},
            onError: error => {console.log(error); alert("Something went wrong trying to delete a patient." + error)} /* Mutation errored */,
            onCompleted: response => {
                if(response.deletePatient == null) alert("Something went wrong trying to delete a patient.");
                else window.location.href = Variables.HOME_URL;
            } /* Mutation completed */,
        });
    }
    
    render() {
        return (
            <>
                <br/>
                <Stack gap={3}>
                    <Container className="w-50">
                            <Stack className="float-end" direction="horizontal" gap={2}>
                                <Button variant="dark" onClick={() => this.showPatientModal(true)}>Update patient</Button>
                                <Button variant="dark" onClick={() => this.commitPatientDelete(window.location.href.split('/')[Variables.NR_SLASH_PATIENT_ID])}>Delete patient</Button>
                            </Stack>
                    </Container>
                    <Container className="w-50">
                        <PatientAll preloadedQuery={this.state.preloadedQuery}/>
                    </Container>
                </Stack>
                <PatientModal show={this.state.showPatientModal} setShow={this.showPatientModal} patientPreloadedQuery={this.state.preloadedQuery}/>
            </>);
    }
}

export default Patient;