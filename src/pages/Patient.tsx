import React from "react";
import { loadQuery, PreloadedQuery, usePreloadedQuery } from "react-relay/hooks";
import RelayEnvironment from "../utils/RelayEnvironment";
import { Button, Container, Stack } from "react-bootstrap";
import PatientAll, { patientAllQuery } from "../components/PatientAll";
import { PatientAllQuery } from "../components/__generated__/PatientAllQuery.graphql";

interface IProps {

}

interface IState {
    preloadedQuery: PreloadedQuery<PatientAllQuery, {}>
}

class Patient extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            preloadedQuery: loadQuery<PatientAllQuery>(RelayEnvironment, patientAllQuery, {
                                    patientId: window.location.href.split('/')[4],
                                    pagination: {
                                        perPage: 10
                                    }
                                }),
        }
    }
    
    render() {
        return (
            <>
                <br/>
                <Stack gap={3}>
                    <Container className="w-50">
                            <Stack className="float-end" direction="horizontal" gap={2}>
                                <Button variant="dark">Update patient</Button>
                                <Button variant="dark">Delete patient</Button>
                            </Stack>
                    </Container>
                    <Container className="w-50">
                        <PatientAll preloadedQuery={this.state.preloadedQuery}/>
                    </Container>
                </Stack>
            </>);
    }
}

export default Patient;