import React, { KeyboardEvent, ReactNode } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { loadQuery, PreloadedQuery } from "react-relay/hooks";
import PatientCardsList, { patientCardsListQuery } from "../components/PatientCardsList";
import Search from "../components/Search";
import type {PatientCardsListQuery} from '../components/__generated__/PatientCardsListQuery.graphql';
import RelayEnvironment from "../utils/RelayEnvironment";
import firebase from "firebase/compat/app";

class Patient extends React.Component {
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
                    </Stack>
            </>);
    }
}

export default Patient;