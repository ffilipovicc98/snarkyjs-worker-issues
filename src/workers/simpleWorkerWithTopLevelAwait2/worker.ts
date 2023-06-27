import { addOneTopLevelAwait } from "../../services/addOneTopLevelAwait";
import { expose } from "comlink";
import { Ready } from "../spawn";

const worker = {
  addOneTopLevelAwait,
};

export type WorkerType = typeof worker;
expose(worker);
postMessage(Ready);
