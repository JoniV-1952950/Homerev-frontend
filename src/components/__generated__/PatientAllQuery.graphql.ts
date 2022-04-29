/**
 * @generated SignedSource<<2fc3c4bbca82d8d3e5f3634a73996695>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Pagination = {
  next?: boolean | null;
  afterDocID?: string | null;
  beforeDocID?: string | null;
  perPage: number;
};
export type PatientAllQuery$variables = {
  pagination: Pagination;
  patientId: string;
};
export type PatientAllQuery$data = {
  readonly patient: {
    readonly " $fragmentSpreads": FragmentRefs<"PatientCard_patient" | "TaskList_tasks">;
  };
};
export type PatientAllQuery = {
  variables: PatientAllQuery$variables;
  response: PatientAllQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "pagination"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "patientId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "patientId"
  }
],
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Patient",
        "kind": "LinkedField",
        "name": "patient",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PatientCard_patient"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TaskList_tasks"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Patient",
        "kind": "LinkedField",
        "name": "patient",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
          (v3/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "pagination",
                "variableName": "pagination"
              }
            ],
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "tasks",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateCreated",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "task",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "77e6a6e6d9c142888a76e3509102a7e8",
    "id": null,
    "metadata": {},
    "name": "PatientAllQuery",
    "operationKind": "query",
    "text": "query PatientAllQuery(\n  $pagination: Pagination!\n  $patientId: String!\n) {\n  patient(id: $patientId) {\n    ...PatientCard_patient\n    ...TaskList_tasks\n  }\n}\n\nfragment PatientCard_patient on Patient {\n  name\n  birthdate\n  address\n  condition\n  telephone\n  gender\n  therapists {\n    name\n    telephone\n    id\n  }\n}\n\nfragment TaskList_tasks on Patient {\n  tasks(pagination: $pagination) {\n    dateCreated\n    task\n    type\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "dad956e0db33ec8fd900f11ea0c3cee0";

export default node;
