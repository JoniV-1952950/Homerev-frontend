/**
 * @generated SignedSource<<a123fe12f4a49a1d2960c7b17b969b39>>
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
  paginationTask: Pagination;
  paginationTodo: Pagination;
  patientId: string;
};
export type PatientAllQuery$data = {
  readonly patient: {
    readonly tasks: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"TaskCard_task">;
    } | null>;
    readonly todos: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"TodoCard_todo">;
    } | null>;
    readonly " $fragmentSpreads": FragmentRefs<"PatientCard_patient">;
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
    "name": "paginationTask"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "paginationTodo"
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
v2 = [
  {
    "kind": "Variable",
    "name": "pagination",
    "variableName": "paginationTask"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "pagination",
    "variableName": "paginationTodo"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "telephone",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateCreated",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
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
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "tasks",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TaskCard_task"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todos",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoCard_todo"
              }
            ],
            "storageKey": null
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
          (v4/*: any*/),
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
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "condition",
            "storageKey": null
          },
          (v6/*: any*/),
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
              (v4/*: any*/),
              (v6/*: any*/),
              (v5/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "tasks",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "task",
                "storageKey": null
              },
              (v9/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todos",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "todo",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "deadline",
                "storageKey": null
              },
              (v9/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b53f2e92bbe43386ddd5e4a5e4af4936",
    "id": null,
    "metadata": {},
    "name": "PatientAllQuery",
    "operationKind": "query",
    "text": "query PatientAllQuery(\n  $paginationTask: Pagination!\n  $paginationTodo: Pagination!\n  $patientId: String!\n) {\n  patient(id: $patientId) {\n    ...PatientCard_patient\n    tasks(pagination: $paginationTask) {\n      ...TaskCard_task\n    }\n    todos(pagination: $paginationTodo) {\n      ...TodoCard_todo\n    }\n  }\n}\n\nfragment PatientCard_patient on Patient {\n  name\n  birthdate\n  address\n  email\n  condition\n  telephone\n  gender\n  therapists {\n    name\n    telephone\n    email\n    id\n  }\n}\n\nfragment TaskCard_task on Task {\n  dateCreated\n  task\n  type\n  id\n}\n\nfragment TodoCard_todo on Todo {\n  dateCreated\n  todo\n  deadline\n  type\n  id\n}\n"
  }
};
})();

(node as any).hash = "f3cddef9c82e5c982ea5bd84c90e6c22";

export default node;
