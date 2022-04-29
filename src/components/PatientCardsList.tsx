import React from 'react';
import {graphql} from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from "../utils/RelayEnvironment";
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap';
import type {PatientCardsListQuery} from '../components/__generated__/PatientCardsListQuery.graphql';
import { Link } from 'react-router-dom';


const { Suspense } = React;

// Define a query
export const patientCardsListQuery = graphql`
 query PatientCardsListQuery($pagination: Pagination!, $therapistId: String!, $name: String) {
  patientsOfTherapist(pagination: $pagination, id: $therapistId, name: $name) {
    name
    condition
    gender
    id
  }
}
`;


// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function PatientCardsList(props: {preloadedQuery: PreloadedQuery<PatientCardsListQuery, {}>}) {
    const data = usePreloadedQuery(patientCardsListQuery, props.preloadedQuery).patientsOfTherapist;

    return (
        <Container className="w-75">
          <Row xs={1} md={2} className="g-4">
            {data.map((patient) => (
              <Col key={patient?.id}>
                <Link style={{textDecoration: "none"}}to={'/patient/' + patient?.id}>
                  <Card text="dark">
                    <Card.Body>
                      <Card.Title>{patient?.name}</Card.Title>
                      <Card.Text>
                        Gender: {patient?.gender} 
                        <br/>
                        Condition: {patient?.condition}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
              </Col>
            ))}
          </Row>
        </Container>
    );
}

// defines a placeholder for when the query is still loading
const placeholder = (
  <Container className="w-50">
  <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 12}).map((_, idx) => (
        <Col key={idx}>
            <Card>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
          </Card>
        </Col>
    ))}
  </Row>
  </Container>
);

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function PatientCardRoot(props: {preloadedQuery: PreloadedQuery<PatientCardsListQuery, {}>}) {
    return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={placeholder}>
        <PatientCardsList preloadedQuery={props.preloadedQuery}/>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default PatientCardRoot;
