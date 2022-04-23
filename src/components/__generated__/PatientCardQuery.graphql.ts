/**
 * @generated SignedSource<<3bfe62feec8a3582131bcc6498f881ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Gender = "M" | "V" | "X" | "%future added value";
export type PatientCardQuery$variables = {
  patientId: string;
};
export type PatientCardQuery$data = {
  readonly getPatient: {
    readonly name: string;
    readonly birthdate: any;
    readonly address: string;
    readonly condition: string;
    readonly telephone: string;
    readonly gender: Gender;
    readonly therapists: ReadonlyArray<{
      readonly name: string;
    } | null>;
  };
};
export type PatientCardQuery = {
  variables: PatientCardQuery$variables;
  response: PatientCardQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "patientId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "patientId"
      }
    ],
    "concreteType": "Patient",
    "kind": "LinkedField",
    "name": "getPatient",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "birthdate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "address",
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
        "name": "telephone",
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
        "concreteType": "Therapist",
        "kind": "LinkedField",
        "name": "therapists",
        "plural": true,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientCardQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientCardQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3a5d0d7e8cd16f277cedaa4beaf81c21",
    "id": null,
    "metadata": {},
    "name": "PatientCardQuery",
    "operationKind": "query",
    "text": "query PatientCardQuery(\n  $patientId: String!\n) {\n  getPatient(id: $patientId) {\n    name\n    birthdate\n    address\n    condition\n    telephone\n    gender\n    therapists {\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eaf4c0330b0b9da03ef616ea94e37748";

export default node;
