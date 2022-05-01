/**
 * @generated SignedSource<<7319767e690cddfcfdf03257750fd465>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Gender = "M" | "V" | "X" | "%future added value";
export type PatientInput = {
  email: string;
  password: string;
  name: string;
  birthdate: any;
  address: string;
  condition: string;
  telephone: string;
  gender: Gender;
};
export type PatientModalUpdateMutation$variables = {
  input: PatientInput;
  patientId: string;
};
export type PatientModalUpdateMutation$data = {
  readonly updatePatient: {
    readonly id: string;
    readonly name: string;
    readonly therapists: ReadonlyArray<{
      readonly name: string;
      readonly id: string;
      readonly telephone: string;
      readonly email: string;
    } | null>;
    readonly email: string;
    readonly telephone: string;
    readonly address: string;
    readonly birthdate: any;
    readonly condition: string;
    readonly gender: Gender;
  } | null;
};
export type PatientModalUpdateMutation = {
  variables: PatientModalUpdateMutation$variables;
  response: PatientModalUpdateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  },
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
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "telephone",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "patientId"
      },
      {
        "kind": "Variable",
        "name": "patientInfo",
        "variableName": "input"
      }
    ],
    "concreteType": "Patient",
    "kind": "LinkedField",
    "name": "updatePatient",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Therapist",
        "kind": "LinkedField",
        "name": "therapists",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      (v4/*: any*/),
      (v3/*: any*/),
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
        "name": "birthdate",
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
    "name": "PatientModalUpdateMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientModalUpdateMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "6b52390de6b656359eb49bfca6df647a",
    "id": null,
    "metadata": {},
    "name": "PatientModalUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation PatientModalUpdateMutation(\n  $input: PatientInput!\n  $patientId: String!\n) {\n  updatePatient(patientInfo: $input, id: $patientId) {\n    id\n    name\n    therapists {\n      name\n      id\n      telephone\n      email\n    }\n    email\n    telephone\n    address\n    birthdate\n    condition\n    gender\n  }\n}\n"
  }
};
})();

(node as any).hash = "c60da789a8ce9875ebb41b6df3908ff4";

export default node;
