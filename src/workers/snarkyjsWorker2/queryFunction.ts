import { spawn } from "../spawn";
import { WorkerType } from "./worker";
import { PrivateKey } from "snarkyjs";

const snarkyjsWorker2 = async () => {
  const { worker } = await spawn<WorkerType>("./snarkyjsWorker1/worker.ts");

  const { publicKey } = await worker.createPublicKey({
    privateKey: PrivateKey.random().toBase58(),
  });

  return publicKey;
};

export { snarkyjsWorker2 };
