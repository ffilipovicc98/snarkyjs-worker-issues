import { wrap } from "comlink";
import { WorkerType } from "./worker";

const simpleWorkerWithoutTopLevelAwait1 = async () => {
  const w = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
    name: "simpleWorkerWithoutTopLevelAwait1",
  });

  const worker = wrap<WorkerType>(w);

  const result = await worker.addOne(0);

  return result;
};

export { simpleWorkerWithoutTopLevelAwait1 };
