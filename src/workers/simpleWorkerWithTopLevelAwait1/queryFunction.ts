import { wrap } from "comlink";
import { WorkerType } from "./worker";

const simpleWorkerWithTopLevelAwait1 = async () => {
  const w = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
    name: "simpleWorkerWithTopLevelAwait1",
  });

  const worker = wrap<WorkerType>(w);

  const result = await worker.addOneTopLevelAwait(0);

  return result;
};

export { simpleWorkerWithTopLevelAwait1 };
