import {graphql} from 'babel-plugin-relay/macro';
import {
  useFragment,
} from 'react-relay/hooks';
import { Card, Col, Container, ListGroup, ListGroupItem, Placeholder, Row } from 'react-bootstrap';
import { PatientCard_patient$key } from './__generated__/PatientCard_patient.graphql';

// Define a query
const patientCardFragment = graphql`
    fragment PatientCard_patient on Patient {
        name
        birthdate
        address
        condition
        telephone
        gender
        therapists {
            name
            telephone
            id
        }
    }
`;

interface IProps {
    patient: PatientCard_patient$key
}

export function PatientCard(props: IProps){
    const data = useFragment(patientCardFragment, props.patient);
    return (
        <>
             <Card text="dark">
                <Card.Body>
                  <Card.Title>{data?.name}</Card.Title>
                  <Card.Text>
                    Birthdate: {data?.birthdate}
                    <br/>
                    Gender: {data?.gender} 
                    <br/>
                    Condition: {data?.condition}                    
                    <br/>
                    Address: {data?.address}
                    <br/>
                    Telephone: {data?.telephone}
                    <br/>
                  </Card.Text>
                  Therapists: {
                    <ListGroup variant="flush"> 
                      {data?.therapists.map((therapist) => <ListGroupItem variant="flush" key={therapist?.id}>{therapist?.name} &emsp; {therapist?.telephone}</ListGroupItem>)}
                    </ListGroup>
                  }
                </Card.Body>
              </Card>
        </>
    )
}