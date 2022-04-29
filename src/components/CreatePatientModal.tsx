import { FormEvent, useState } from "react";
import { Button, Form, Modal, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";



export function CreatePatientModal(props: { show: boolean, setShow: (show: boolean) => void }) {
    // create a modal window to create a new patient with  
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }): void => {
        const form = event.currentTarget;
        console.log(Object.entries(form.elements).map((element: any) => element[1].value));
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
  };

    return (
        <>
            <Modal show={props.show} onHide={() => props.setShow(false)} backdrop="static" size="lg" dialogClassName="modal-90w" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new patient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="nameInput">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Janssens" required/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="firstNameInput">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="e.g. Jan" required/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group as={Col} className="mb-3" controlId="birthdateInput">
                            <Form.Label>Birthdate</Form.Label>
                            <Form.Control type="date" required/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid birthdate.
                            </Form.Control.Feedback>
                        </Form.Group> 
                        <Form.Group as={Col} className="mb-3" controlId="genderInput">
                            <Form.Label>Gender</Form.Label><br/>
                            <Form.Check inline type="radio" label="M" name="gender" required/>
                            <Form.Check inline type="radio" label="V" name="gender" required/>
                            <Form.Check inline type="radio" label="X" name="gender" required/>
                            <Form.Control.Feedback type="invalid">
                                Please choose a gender.
                            </Form.Control.Feedback>
                        </Form.Group>               
                        </Row>        
                        <Form.Group className="mb-3" controlId="conditionInput">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control type="text" placeholder="e.g. motor impairment" required/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a condition.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="addressInput">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="e.g. BroekStraat 42, 3500 Hasselt" required/>
                            <Form.Control.Feedback type="invalid">
                                Please enter an address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telephoneInput">
                            <Form.Label>Telephone number</Form.Label>
                            <Form.Control type="text" placeholder="e.g. +32498765432" required pattern="\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$"/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a telephone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="emailInput">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="e.g. name@example.com" required/>
                            <Form.Control.Feedback type="invalid">
                                Please enter an email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passwordInput">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter a password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="dark" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShow(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}