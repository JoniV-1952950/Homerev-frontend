/**
 * @generated SignedSource<<de710a8fe64b89009410e9c45136ace4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Gender = "M" | "V" | "X" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PatientCard_patient$data = {
  readonly name: string;
  readonly birthdate: any;
  readonly address: string;
  readonly condition: string;
  readonly telephone: string;
  readonly gender: Gender;
  readonly therapists: ReadonlyArray<{
    readonly name: string;
    readonly telephone: string;
    readonly id: string;
  } | null>;
  readonly " $fragmentType": "PatientCard_patient";
};
export type PatientCard_patient$key = {
  readonly " $data"?: PatientCard_patient$data;
  readonly " $fragmentSpreads": FragmentRefs<"PatientCard_patient">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "telephone",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PatientCard_patient",
  "selections": [
    (v0/*: any*/),
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
    (v1/*: any*/),
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
        (v0/*: any*/),
        (v1/*: any*/),
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
  ],
  "type": "Patient",
  "abstractKey": null
};
})();

(node as any).hash = "64d79380aaaed48f27d63a39fb1d9acb";

export default node;
