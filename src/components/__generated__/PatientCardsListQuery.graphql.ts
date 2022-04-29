/**
 * @generated SignedSource<<749a5ef2c35c75c267964c6e432d5872>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Gender = "M" | "V" | "X" | "%future added value";
export type Pagination = {
  next?: boolean | null;
  afterDocID?: string | null;
  beforeDocID?: string | null;
  perPage: number;
};
export type PatientCardsListQuery$variables = {
  pagination: Pagination;
  therapistId: string;
  name?: string | null;
};
export type PatientCardsListQuery$data = {
  readonly patientsOfTherapist: ReadonlyArray<{
    readonly name: string;
    readonly condition: string;
    readonly gender: Gender;
    readonly id: string;
  } | null>;
};
export type PatientCardsListQuery = {
  variables: PatientCardsListQuery$variables;
  response: PatientCardsListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pagination"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "therapistId"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "therapistId"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "pagination",
        "variableName": "pagination"
      }
    ],
    "concreteType": "Patient",
    "kind": "LinkedField",
    "name": "patientsOfTherapist",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "condition",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gender",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientCardsListQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PatientCardsListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8e15cb8ef6ff1ecdc79611921f9471d3",
    "id": null,
    "metadata": {},
    "name": "PatientCardsListQuery",
    "operationKind": "query",
    "text": "query PatientCardsListQuery(\n  $pagination: Pagination!\n  $therapistId: String!\n  $name: String\n) {\n  patientsOfTherapist(pagination: $pagination, id: $therapistId, name: $name) {\n    name\n    condition\n    gender\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e09c296f74a86b903c1b59451bc2b09f";

export default node;
