import { wrap } from "comlink";
import { WorkerType } from "./worker";
import { PrivateKey } from "snarkyjs";

const snarkyjsWorker1 = async () => {
  const w = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
    name: "snarkyjsWorker1",
  });

  const worker = wrap<WorkerType>(w);

  const { publicKey } = await worker.createPublicKey({
    privateKey: PrivateKey.random().toBase58(),
  });

  return publicKey;
};

export { snarkyjsWorker1 };
