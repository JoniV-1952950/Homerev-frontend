/**
 * @generated SignedSource<<e653192d385b8e859c2fdbcfc18fb86d>>
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
  readonly tasks: ReadonlyArray<{
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
      "name": "pagination"
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
          "name": "pagination",
          "variableName": "pagination"
        }
      ],
      "concreteType": "Task",
      "kind": "LinkedField",
      "name": "tasks",
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

(node as any).hash = "470f7108044c149fd5843affb99ae823";

export default node;
