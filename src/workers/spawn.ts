import { wrap } from "comlink";

const Ready = { ready: true };

const readinessListener = (worker: Worker, callback: () => void) => {
  worker.addEventListener(
    "message",
    function ready(event: MessageEvent<typeof Ready>) {
      console.log({ where: "onMessage > ready", event });

      if (!!event.data && event.data.ready === true) {
        worker.removeEventListener("message", ready);
        callback();
      }
    }
  );
};

const spawn = async <T>(path: URL | string) => {
  const worker = new Worker(
    new URL(path, /* relative to _this_ file */ import.meta.url),
    {
      type: "module",
      name: "spawn_worker_9999999",
    }
  );

  await new Promise<void>((resolve) => readinessListener(worker, resolve));

  return { worker: wrap<T>(worker) };
};

export { spawn, Ready };
