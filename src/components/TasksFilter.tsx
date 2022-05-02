import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { TaskTabsQuery$variables } from "./__generated__/TaskTabsQuery.graphql";

interface IProps {
    searchTasks: (searchObject: TaskTabsQuery$variables) => void
}

interface IState {
    searchObject: TaskTabsQuery$variables
}

export class TasksFilter extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            searchObject: {
                nrPatients: 5,
                nrTasksPerPatient: 5
            }
        }
    }

    render() {
        return (
        <Form onSubmit={(event) => {this.props.searchTasks(this.state.searchObject); event.preventDefault(); event.stopPropagation(); }}>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="nrPatientsInput">
                    <Form.Label>Nr of patients</Form.Label>
                    <Form.Control type="number" defaultValue={5} onChange={(event) => this.setState(prevState => ({searchObject: {...prevState.searchObject, nrPatients: parseInt(event.target.value)}}))} required/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="nrTasksInput">
                    <Form.Label>Nr of tasks per patient</Form.Label>
                    <Form.Control type="number" defaultValue={5} onChange={(event) => this.setState(prevState => ({searchObject: {...prevState.searchObject, nrTasksPerPatient: parseInt(event.target.value)}}))} required/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="conditionInput">
                    <Form.Label>Condition</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Motor impairment" onChange={(event) => this.setState(prevState => ({searchObject: {...prevState.searchObject, condition: event.target.value}}))}/>
                    <Form.Text muted>This must be an exact match.</Form.Text>
                </Form.Group>
                {/* zou omgezet moeten worden naar een dropdown die de types van de server ophaalt */}
                <Form.Group as={Col} className="mb-3" controlId="typeInput">
                    <Form.Label>Project type</Form.Label>
                    <Form.Control type="text" placeholder="e.g. bimanueel or VR" onChange={(event) => this.setState(prevState => ({searchObject: {...prevState.searchObject, type: event.target.value as "bimanueel" | "VR"}}))}/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="bdLtInput">
                    <Form.Label>Maximum birthdate</Form.Label>
                    <Form.Control type="date" onChange={(event) => this.setState(prevState => ({searchObject: {...prevState.searchObject, bdLt: event.target.value}}))}/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="bdGtInput">
                    <Form.Label>Minimum birthdate</Form.Label>
                    <Form.Control type="date" onChange={(event) => this.setState(prevState => ({searchObject: {...prevState.searchObject, bdGt: event.target.value}}))}/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="genderInput">
                    <Form.Label>Gender</Form.Label><br/>
                    <Form.Check inline type="radio" label="M" name="gender" onChange={(event) => {if(event.target.checked) this.setState(prevState => ({searchObject: {...prevState.searchObject, gender: "M"}}))}}/>
                    <Form.Check inline type="radio" label="V" name="gender" onChange={(event) => {if(event.target.checked) this.setState(prevState => ({searchObject: {...prevState.searchObject, gender: "V"}}))}}/>
                    <Form.Check inline type="radio" label="X" name="gender" onChange={(event) => {if(event.target.checked) this.setState(prevState => ({searchObject: {...prevState.searchObject, gender: "X"}}))}}/>
                </Form.Group>
                <Button variant="dark" type="submit">Search</Button>     
            </Row>
        </Form>
        )
    }
}