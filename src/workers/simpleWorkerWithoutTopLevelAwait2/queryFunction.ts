import { spawn } from "../spawn";
import { WorkerType } from "./worker";

const simpleWorkerWithoutTopLevelAwait2 = async () => {
  const { worker } = await spawn<WorkerType>(
    "./simpleWorkerWithoutTopLevelAwait2/worker.ts"
  );

  const result = await worker.addOne(0);

  return result;
};

export { simpleWorkerWithoutTopLevelAwait2 };
