/**
 * @generated SignedSource<<957eb310f987c227b1bafeb6ef90a2c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ProjectType = "bimanueel" | "VR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TaskCard_task$data = {
  readonly dateCreated: any;
  readonly task: any;
  readonly type: ProjectType;
  readonly id: string;
  readonly " $fragmentType": "TaskCard_task";
};
export type TaskCard_task$key = {
  readonly " $data"?: TaskCard_task$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskCard_task">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskCard_task",
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
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "ac0d3a1348e99226050b5bed1b349b67";

export default node;
