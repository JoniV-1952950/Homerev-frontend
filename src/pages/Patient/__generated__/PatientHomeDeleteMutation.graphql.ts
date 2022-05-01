/**
 * @generated SignedSource<<27dfcd6e995c7e18cbe93ad4e58d3161>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type PatientHomeDeleteMutation$variables = {
  input: string;
};
export type PatientHomeDeleteMutation$data = {
  readonly deletePatient: string | null;
};
export type PatientHomeDeleteMutation = {
  variables: PatientHomeDeleteMutation$variables;
  response: PatientHomeDeleteMutation$data;
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
        "name": "id",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "deletePatient",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientHomeDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientHomeDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a0f9ea82d8b6f161c243769ac9c5208e",
    "id": null,
    "metadata": {},
    "name": "PatientHomeDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation PatientHomeDeleteMutation(\n  $input: String!\n) {\n  deletePatient(id: $input)\n}\n"
  }
};
})();

(node as any).hash = "1b2b85d7a0c5c9f0d1f3e96000202325";

export default node;
