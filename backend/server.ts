import http from 'http';
import app from './app';
import { loadEnv } from './config/env';

const env = loadEnv();
const port = env.PORT;
const mongoUri = env.MONGO_URI;

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
    console.log(` Health check: http://localhost:${port}/health`);
    console.log(` API endpoint: http://localhost:${port}/api/health`);
});


