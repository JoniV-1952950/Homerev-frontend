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

// Define a query
export const patientCardsListQuery = graphql`
    query PatientCardQuery($patientId: String!) {
        getPatient(id: $patientId) {
            name
            birthdate
            address
            condition
            telephone
            gender
            therapists {
                name
            }
        }
    }
`;