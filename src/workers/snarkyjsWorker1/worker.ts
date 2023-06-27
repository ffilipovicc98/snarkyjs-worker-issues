import { createPublicKey } from "../../services/createPublicKey";
import { expose } from "comlink";

const worker = {
  createPublicKey,
};

export type WorkerType = typeof worker;
expose(worker);
