/**
 * @generated SignedSource<<64285bcd7202c49e97408fb3b848bef7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ProjectType = "bimanueel" | "VR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TodoCard_todo$data = {
  readonly dateCreated: any;
  readonly todo: any;
  readonly deadline: any;
  readonly type: ProjectType;
  readonly id: string;
  readonly " $fragmentType": "TodoCard_todo";
};
export type TodoCard_todo$key = {
  readonly " $data"?: TodoCard_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoCard_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoCard_todo",
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
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "1d077e9bbff25b96837e6d903ce44a56";

export default node;
