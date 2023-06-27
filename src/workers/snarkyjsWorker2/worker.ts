import { createPublicKey } from "../../services/createPublicKey";
import { Ready } from "../spawn";
import { expose } from "comlink";

const worker = {
  createPublicKey,
};

export type WorkerType = typeof worker;
expose(worker);
postMessage(Ready);
