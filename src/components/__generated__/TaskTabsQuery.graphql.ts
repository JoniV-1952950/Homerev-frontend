/**
 * @generated SignedSource<<7212cd2c6f6df39bd4a86b10fab24e7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Gender = "M" | "V" | "X" | "%future added value";
export type ProjectType = "bimanueel" | "VR" | "%future added value";
export type TaskTabsQuery$variables = {
  nrPatients: number;
  nrTasksPerPatient: number;
  gender?: Gender | null;
  bdGt?: any | null;
  bdLt?: any | null;
  condition?: string | null;
  type?: ProjectType | null;
};
export type TaskTabsQuery$data = {
  readonly tasksOfPatients: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TaskCard_task">;
  } | null>;
};
export type TaskTabsQuery = {
  variables: TaskTabsQuery$variables;
  response: TaskTabsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bdGt"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bdLt"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "condition"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "gender"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nrPatients"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nrTasksPerPatient"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v7 = [
  {
    "kind": "Variable",
    "name": "bd_gt",
    "variableName": "bdGt"
  },
  {
    "kind": "Variable",
    "name": "bd_lt",
    "variableName": "bdLt"
  },
  {
    "kind": "Variable",
    "name": "condition",
    "variableName": "condition"
  },
  {
    "kind": "Variable",
    "name": "gender",
    "variableName": "gender"
  },
  {
    "kind": "Variable",
    "name": "nr_patients",
    "variableName": "nrPatients"
  },
  {
    "kind": "Variable",
    "name": "nr_tasks_per_patient",
    "variableName": "nrTasksPerPatient"
  },
  {
    "kind": "Variable",
    "name": "type",
    "variableName": "type"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskTabsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "tasksOfPatients",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TaskCard_task"
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
      (v4/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "TaskTabsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "tasksOfPatients",
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
    ]
  },
  "params": {
    "cacheID": "5ee15bd93e7c9a826daf63cec522470f",
    "id": null,
    "metadata": {},
    "name": "TaskTabsQuery",
    "operationKind": "query",
    "text": "query TaskTabsQuery(\n  $nrPatients: Int!\n  $nrTasksPerPatient: Int!\n  $gender: Gender\n  $bdGt: Date\n  $bdLt: Date\n  $condition: String\n  $type: ProjectType\n) {\n  tasksOfPatients(nr_patients: $nrPatients, nr_tasks_per_patient: $nrTasksPerPatient, gender: $gender, bd_gt: $bdGt, bd_lt: $bdLt, condition: $condition, type: $type) {\n    ...TaskCard_task\n  }\n}\n\nfragment TaskCard_task on Task {\n  dateCreated\n  task\n  type\n  id\n}\n"
  }
};
})();

(node as any).hash = "7d5cf66013df719a4562f07b9fe30b53";

export default node;
