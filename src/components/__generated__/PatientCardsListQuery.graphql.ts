/**
 * @generated SignedSource<<0ae5fdb938fb82f61c42e3f41f9ec7c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Gender = "M" | "V" | "X" | "%future added value";
export type PatientCardsListQuery$variables = {
  perPage: number;
  therapistId: string;
  name?: string | null;
};
export type PatientCardsListQuery$data = {
  readonly getPatientsOfTherapistNext: ReadonlyArray<{
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
  "name": "perPage"
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
        "name": "perPage",
        "variableName": "perPage"
      }
    ],
    "concreteType": "Patient",
    "kind": "LinkedField",
    "name": "getPatientsOfTherapistNext",
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
    "cacheID": "e2127dd6bf425f03faf36e46097c15b8",
    "id": null,
    "metadata": {},
    "name": "PatientCardsListQuery",
    "operationKind": "query",
    "text": "query PatientCardsListQuery(\n  $perPage: Int!\n  $therapistId: String!\n  $name: String\n) {\n  getPatientsOfTherapistNext(perPage: $perPage, id: $therapistId, name: $name) {\n    name\n    condition\n    gender\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e0322eefbc078fa56bf66e1cfe34f9f1";

export default node;
