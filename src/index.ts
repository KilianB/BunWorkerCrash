import path from "node:path";

//The higher the count the more likely the crash is
const WORKER_COUNT = 8;

export const spawnThreadsToAnalyzeHistoricTrips = async () => {
  for (let i = 0; i < WORKER_COUNT; i++) {
    console.log(`Spawn worker ${i}`);

    const worker = new Worker(path.resolve(__dirname, "worker.ts"));

    worker.postMessage({
      type: "init",
    });
  }
};

await spawnThreadsToAnalyzeHistoricTrips();
