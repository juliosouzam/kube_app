import os from 'node:os';
import express from 'express';
const app = express();

app.get('/', (_, response) => {
  const data = {
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
    uptime: os.uptime(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces(),
  };
  return response.json(data);
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
