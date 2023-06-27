import { expose } from "comlink";
import { Ready } from "../spawn";
import { addOne } from "../../services/addOne";

const worker = {
  addOne,
};

export type WorkerType = typeof worker;
expose(worker);
postMessage(Ready);
