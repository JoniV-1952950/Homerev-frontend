import { Suspense, useState } from "react";
import {graphql} from 'babel-plugin-relay/macro';
import { Button, Form, Modal, Row, Col} from "react-bootstrap";
import { commitMutation, PreloadedQuery, RelayEnvironmentProvider, useFragment, usePreloadedQuery } from "react-relay";
import RelayEnvironment from "../utils/RelayEnvironment";
import { Variables } from "../utils/Variables";
import { PatientModalUpdateMutation } from "./__generated__/PatientModalUpdateMutation.graphql";
import { PatientInput, PatientModalCreateMutation } from "./__generated__/PatientModalCreateMutation.graphql";
import { PatientAllQuery } from "./__generated__/PatientAllQuery.graphql";
import { patientAllQuery } from "./PatientAll";
import { patientCardFragment } from "./PatientCard";
import { PatientCard_patient$data } from "./__generated__/PatientCard_patient.graphql";

function PatientForm(props: { data?: PatientCard_patient$data}) {
    // use state for the validation of the form
    const [validated, setValidated] = useState(false);

    // handles a submit push or enter
    const handleSubmit = (event: { currentTarget: HTMLFormElement; preventDefault: () => void; stopPropagation: () => void; }): void => {
        // get the form object
        const form = event.currentTarget;
        // if the form is valid, create a PatientInput object from it
        if (form.checkValidity() === true) {
            // get the values from the form (HTMLInputElements)
            let input = Object.values(form).map((element: HTMLInputElement) => {
                        // if the value is "on" this element is a radio button from the gender
                        if(element.value === "on"){
                            // if the radio is defaultChecked return a JSON object with key: "gender" and value: the chosen gender
                            if(element.checked)
                                return {key: "gender", value: element.nextSibling?.textContent};
                            // else return null so we can filter that out in the next step
                            return null;
                        }
                        // if the value is not "on" we are dealing with another propery, so just save the key: the property (e.g. name), and the value: the input
                        return {key: element.previousSibling?.textContent?.toLowerCase().split(' ')[0] as string, value: element.value};
                })
                // filter the array of object with null elements, undefined elements and empty strings
                .filter((pair) => pair != null && pair.value !== "" && pair.value != undefined)
                // reduce the array to one object
                .reduce((obj: any, item) => (obj[item?.key as string] = item?.value, obj), {});
            
            // create the name from the first and name inputs
            input.name = input.name + " " + input["first"];
            // delete the first input from the object
            delete input["first"];
            // if there was patient data given, we are trying to create a patient, else update a patient
            if(!props.data)
                handleCreatePatient(input);
            else handleUpdatePatient(input);
        }
        setValidated(true);
        event.preventDefault();
        event.stopPropagation();
    };

    // handles a create patient command
    const handleCreatePatient = (input: PatientInput): void => {
        // does the actual call to the backend
        commitMutation<PatientModalCreateMutation>(RelayEnvironment, {
            mutation: graphql`
                mutation PatientModalCreateMutation($input: PatientInput!) {
                    createPatient(patientInfo: $input){
                        id
                    }
                }
            `,
            variables: {input},
            onError: error => {console.log(error); alert("Something went wrong trying to create a patient." + error)} /* Mutation errored */,
            onCompleted: response => {
                if(response.createPatient == null) alert("Something went wrong trying to create a patient. Maybe the email address already exists in our system.");
                // if the mutation was succesfull just go back to the homescreen
                else window.location.href = Variables.HOME_URL;
            } /* Mutation completed */,
            });
    }

    // handles an update patient command
    const handleUpdatePatient = (input: PatientInput): void => {
        const patientUID = window.location.href.split('/')[Variables.NR_SLASH_PATIENT_ID];

        // does the actual call to the backend
        commitMutation<PatientModalUpdateMutation>(RelayEnvironment, {
            mutation: graphql`
            mutation PatientModalUpdateMutation($input: PatientInput!, $patientId: String!) {
                updatePatient(patientInfo: $input, id: $patientId){
                    id
                    name
                    therapists {
                        name
                        id
                        telephone
                        email
                    }
                    email
                    telephone
                    address
                    birthdate
                    condition
                    gender
                }
            }
            `,
            variables: {input, patientId: patientUID},
            onError: error => {console.log(error); alert("Something went wrong trying to update a patient." + error)} /* Mutation errored */,
            onCompleted: response => {
                if(response.updatePatient == null) alert("Something went wrong trying to update a patient. Maybe the email address already exists in our system.");
                else {
                    const href = window.location.href 
                    window.location.href = href;
                }
            } /* Mutation completed */,
        });
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="nameInput">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Janssens" defaultValue={props.data?.name.split(" ")[0]} required/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="firstNameInput">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Jan" defaultValue={props.data?.name.split(' ')[1]} required/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a first name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} className="mb-3" controlId="birthdateInput">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control type="date" defaultValue={
                    props.data ? new Date(props.data.birthdate).toISOString().slice(0, 10) : ""} required/>
                <Form.Control.Feedback type="invalid">
                    Please enter a valid birthdate.
                </Form.Control.Feedback>
            </Form.Group> 
            <Form.Group as={Col} className="mb-3" controlId="genderInput">
                <Form.Label>Gender</Form.Label><br/>
                <Form.Check inline type="radio" label="M" name="gender" defaultChecked={props.data?.gender === "M"} required/>
                <Form.Check inline type="radio" label="V" name="gender" defaultChecked={props.data?.gender === "V"} required/>
                <Form.Check inline type="radio" label="X" name="gender" defaultChecked={props.data?.gender === "X"} required/>
                <Form.Control.Feedback type="invalid">
                    Please choose a gender.
                </Form.Control.Feedback>
            </Form.Group>               
            </Row>        
            <Form.Group className="mb-3" controlId="conditionInput">
                <Form.Label>Condition</Form.Label>
                <Form.Control type="text" placeholder="e.g. motor impairment" defaultValue={props.data?.condition} required/>
                <Form.Control.Feedback type="invalid">
                    Please enter a condition.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addressInput">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="e.g. BroekStraat 42, 3500 Hasselt" defaultValue={props.data?.address} required/>
                <Form.Control.Feedback type="invalid">
                    Please enter an address.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="telephoneInput">
                <Form.Label>Telephone number</Form.Label>
                <Form.Control type="text" placeholder="e.g. +32498765432" defaultValue={props.data?.telephone} required pattern="\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$"/>
                <Form.Control.Feedback type="invalid">
                    Please enter a telephone number.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="e.g. name@example.com" defaultValue={props.data?.email} required pattern="[a-zA-Z0-9_.\-éèçà]*@[a-zA-Z0-9_.\-éèçà]*\.[a-z]{1,6}"/>
                <Form.Control.Feedback type="invalid">
                    Please enter an email address.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="e.g. Password1" required pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{6})^[a-zA-Z0-9]*"/>
                <Form.Control.Feedback type="invalid">
                    Please enter a password with at least 6 characters, one lower letter, one capital and one number.
                </Form.Control.Feedback>
                <Form.Text muted>Make sure to write this down, or send this to your patient.</Form.Text>
            </Form.Group>
            <Button variant="dark" type="submit">Submit</Button>
        </Form>
    );
}

// This function opens up a modal window with a form to update a patient. 
// It validates the user input and then does a mutation request to the backend server
function UpdatePatientModal(props: { show: boolean, setShow: (show: boolean) => void, patientPreloadedQuery?: PreloadedQuery<PatientAllQuery> }) {
    // use the preloaded query instance from the props to get the data of the patient
    let data;
    const preloadedData = usePreloadedQuery(patientAllQuery, props.patientPreloadedQuery as unknown as PreloadedQuery<PatientAllQuery>);
    data = useFragment(patientCardFragment, preloadedData.patient) as PatientCard_patient$data;

    // show the modal with the filled in form
    return (
        <>
            <Modal show={props.show} onHide={() => props.setShow(false)} backdrop="static" size="lg" dialogClassName="modal-90w" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Update a patient: {data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PatientForm data={data}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShow(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// This function opens up a modal window with a form to create a patient. 
// It validates the user input and then does a mutation request to the backend server
function CreatePatientModal(props: { show: boolean, setShow: (show: boolean) => void}) {
    return (
        <>
            <Modal show={props.show} onHide={() => props.setShow(false)} backdrop="static" size="lg" dialogClassName="modal-90w" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new patient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PatientForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShow(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default function PatientModalRoot(props: { show: boolean, setShow: (show: boolean) => void, patientPreloadedQuery?: PreloadedQuery<PatientAllQuery> }) {
    if(!props.patientPreloadedQuery)
        return (
            <CreatePatientModal show={props.show} setShow={props.setShow}/>
        );   
    else
        return (
            <>
                <RelayEnvironmentProvider environment={RelayEnvironment}>
                    <Suspense fallback={<CreatePatientModal show={props.show} setShow={props.setShow}/>}>
                        <UpdatePatientModal show={props.show} setShow={props.setShow} patientPreloadedQuery={props.patientPreloadedQuery}/>
                    </Suspense>
                </RelayEnvironmentProvider>
            </>
        );
}