import { expose } from "comlink";
import { addOne } from "../../services/addOne";

const worker = {
  addOne,
};

export type WorkerType = typeof worker;
expose(worker);
