import { PrivateKey } from "snarkyjs";

const createPublicKey = async ({ privateKey }: { privateKey: string }) => {
  const publicKey = PrivateKey.fromBase58(privateKey).toBase58();

  return {
    publicKey,
  };
};

export { createPublicKey };
