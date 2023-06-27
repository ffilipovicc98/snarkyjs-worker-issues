import { addOneTopLevelAwait } from "../../services/addOneTopLevelAwait";
import { expose } from "comlink";

const worker = {
  addOneTopLevelAwait,
};

export type WorkerType = typeof worker;
expose(worker);
