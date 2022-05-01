/**
 * @generated SignedSource<<eb5d84e2dd921a145550c70e634adfd1>>
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
export type PatientModalCreateMutation$variables = {
  input: PatientInput;
};
export type PatientModalCreateMutation$data = {
  readonly createPatient: {
    readonly id: string;
  } | null;
};
export type PatientModalCreateMutation = {
  variables: PatientModalCreateMutation$variables;
  response: PatientModalCreateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "patientInfo",
        "variableName": "input"
      }
    ],
    "concreteType": "Patient",
    "kind": "LinkedField",
    "name": "createPatient",
    "plural": false,
    "selections": [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientModalCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientModalCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cacef799f6fa9b1bdc2c8ea21f72927b",
    "id": null,
    "metadata": {},
    "name": "PatientModalCreateMutation",
    "operationKind": "mutation",
    "text": "mutation PatientModalCreateMutation(\n  $input: PatientInput!\n) {\n  createPatient(patientInfo: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "48cec6ac8cc709e8fbbe9123ffc0c29b";

export default node;
