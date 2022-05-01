import {graphql} from 'babel-plugin-relay/macro';
import {
  useFragment,
} from 'react-relay/hooks';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { PatientCard_patient$key } from './__generated__/PatientCard_patient.graphql';
import { Variables } from '../utils/Variables';

// Define a query
export const patientCardFragment = graphql`
    fragment PatientCard_patient on Patient {
        name
        birthdate
        address
        email
        condition
        telephone
        gender
        therapists {
            name
            telephone
            email
            id
        }
    }
`;

interface IProps {
    patient: PatientCard_patient$key
}

// the component in the Patient page containing the user information
export function PatientCard(props: IProps){
    // use the fragment defined above as a dependency
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
                    Email address: {<a href={"mailto:" + data?.email} target="_blank" rel="noopener noreferrer">{data?.email} </a>}
                    <br/>
                  </Card.Text>
                  Therapists: {
                    <ListGroup variant={Variables.LISTGROUP_VARIANT}> 
                      {data?.therapists.map((therapist) => <ListGroupItem variant={Variables.LISTGROUP_VARIANT} key={therapist?.id}>{therapist?.name} &emsp; {therapist?.telephone} &emsp; <a href={"mailto: " + therapist?.email} target="_blank" rel="noopener noreferrer">{therapist?.email}</a></ListGroupItem>)}
                    </ListGroup>
                  }
                </Card.Body>
              </Card>
        </>
    )
}