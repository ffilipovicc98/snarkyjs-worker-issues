import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  simpleWorkerWithTopLevelAwait1,
  simpleWorkerWithTopLevelAwait2,
  simpleWorkerWithoutTopLevelAwait1,
  simpleWorkerWithoutTopLevelAwait2,
  snarkyjsWorker1,
  snarkyjsWorker2,
} from "./workers";

function App() {
  const startSimpleWorkerWithoutTopLevelAwait1 = async () => {
    const result = await simpleWorkerWithoutTopLevelAwait1();
    console.log({ where: "simpleWorkerWithoutTopLevelAwait1", result });
  };

  const startSimpleWorkerWithoutTopLevelAwait2 = async () => {
    const result = await simpleWorkerWithoutTopLevelAwait2();
    console.log({ where: "simpleWorkerWithoutTopLevelAwait2", result });
  };

  const startSimpleWorkerWithTopLevelAwait1 = async () => {
    const result = await simpleWorkerWithTopLevelAwait1();
    console.log({ where: "simpleWorkerWithTopLevelAwait1", result });
  };

  const startSimpleWorkerWithTopLevelAwait2 = async () => {
    const result = await simpleWorkerWithTopLevelAwait2();
    console.log({ where: "simpleWorkerWithTopLevelAwait2", result });
  };

  const startSnarkyjsWorker1 = async () => {
    const result = await snarkyjsWorker1();
    console.log({ where: "startSnarkyjsWorker1", result });
  };

  const startSnarkyjsWorker2 = async () => {
    const result = await snarkyjsWorker2();
    console.log({ where: "snarkyjsWorker2", result });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <h3>Open the console and check the logs.</h3>

      <div className="card">
        <div className="example">
          <p>It doesn't use top level await so we expect this to work.</p>
          <button onClick={startSimpleWorkerWithoutTopLevelAwait1}>
            startSimpleWorkerWithoutTopLevelAwait1
          </button>
        </div>

        <div className="example">
          <p>It doesn't use top level await so we expect this to work.</p>
          <button onClick={startSimpleWorkerWithoutTopLevelAwait2}>
            startSimpleWorkerWithoutTopLevelAwait2
          </button>
        </div>

        <div className="example">
          <p>
            It uses top level await so we expect this not to work, since we
            don't do any protection like proposed in github issue.
          </p>
          <button onClick={startSimpleWorkerWithTopLevelAwait1}>
            startSimpleWorkerWithTopLevelAwait1
          </button>
        </div>

        <div className="example">
          <p>
            It uses top level await and spawn wrapper protection so this fixes
            issue from previous one and we expect this to work.
          </p>
          <button onClick={startSimpleWorkerWithTopLevelAwait2}>
            startSimpleWorkerWithTopLevelAwait2
          </button>
        </div>

        <div className="example">
          <p>
            It uses top level await so we expect this not to work, since we
            don't do any protection like proposed in github issue.
          </p>
          <button onClick={startSnarkyjsWorker1}>startSnarkyjsWorker1</button>
        </div>

        <div className="example">
          <p>
            It uses top level await and spawn wrapper protection so this should
            fixes issue from previous one and it should work. But it doesn't
            work.
          </p>
          <button onClick={startSnarkyjsWorker2}>startSnarkyjsWorker2</button>
        </div>
      </div>
    </>
  );
}

export default App;
