/**
 * @generated SignedSource<<c7da3e0f772ff831778bf5c090217ff5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PatientAllQuery$variables = {
  perPage: number;
  patientId: string;
};
export type PatientAllQuery$data = {
  readonly getPatient: {
    readonly " $fragmentSpreads": FragmentRefs<"PatientCard_patient" | "TaskList_tasks">;
  };
};
export type PatientAllQuery = {
  variables: PatientAllQuery$variables;
  response: PatientAllQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "patientId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "perPage"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "patientId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "telephone",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Patient",
        "kind": "LinkedField",
        "name": "getPatient",
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PatientAllQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Patient",
        "kind": "LinkedField",
        "name": "getPatient",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
          (v4/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "perPage",
                "variableName": "perPage"
              }
            ],
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "tasksNext",
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
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ac5f716e0a08de4a11e1edbb7a83e21c",
    "id": null,
    "metadata": {},
    "name": "PatientAllQuery",
    "operationKind": "query",
    "text": "query PatientAllQuery(\n  $perPage: Int!\n  $patientId: String!\n) {\n  getPatient(id: $patientId) {\n    ...PatientCard_patient\n    ...TaskList_tasks\n  }\n}\n\nfragment PatientCard_patient on Patient {\n  name\n  birthdate\n  address\n  condition\n  telephone\n  gender\n  therapists {\n    name\n    telephone\n    id\n  }\n}\n\nfragment TaskList_tasks on Patient {\n  tasksNext(perPage: $perPage) {\n    dateCreated\n    task\n    type\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "be7c757aad21682ef86dd2919230ee90";

export default node;
