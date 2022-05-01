/**
 * @generated SignedSource<<95a934d90342ceabfbdd1a2b67dc511b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type PatientDeleteMutation$variables = {
  input: string;
};
export type PatientDeleteMutation$data = {
  readonly deletePatient: string | null;
};
export type PatientDeleteMutation = {
  variables: PatientDeleteMutation$variables;
  response: PatientDeleteMutation$data;
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
    "name": "PatientDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0b755680c784b02a28c51f358050ff82",
    "id": null,
    "metadata": {},
    "name": "PatientDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation PatientDeleteMutation(\n  $input: String!\n) {\n  deletePatient(id: $input)\n}\n"
  }
};
})();

(node as any).hash = "20610a9df44b1a6e68945a6837d20519";

export default node;
