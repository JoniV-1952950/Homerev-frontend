/**
 * @generated SignedSource<<d8aaa1e55c07e8a6888931b67989cb08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ProjectType = "bimanueel" | "VR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TaskList_tasks$data = {
  readonly tasksNext: ReadonlyArray<{
    readonly dateCreated: any;
    readonly task: any;
    readonly type: ProjectType;
    readonly id: string;
  } | null>;
  readonly " $fragmentType": "TaskList_tasks";
};
export type TaskList_tasks$key = {
  readonly " $data"?: TaskList_tasks$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskList_tasks">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "perPage"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskList_tasks",
  "selections": [
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

(node as any).hash = "4c599907e40ff2f8fd0201489a47b0de";

export default node;
