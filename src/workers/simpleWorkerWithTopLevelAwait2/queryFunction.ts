import { WorkerType } from "./worker";
import { spawn } from "../spawn";

const simpleWorkerWithTopLevelAwait2 = async () => {
  const { worker } = await spawn<WorkerType>(
    "./simpleWorkerWithTopLevelAwait2/worker.ts"
  );

  const result = await worker.addOneTopLevelAwait(0);

  return result;
};

export { simpleWorkerWithTopLevelAwait2 };
