import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDB, disconnectDB } from "./config/index.js"
import router from "./routes/index.js"

loadEnv();

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req, res) => res.send('WEE!'))
    .use(router)

export function init(): Promise<Express> {
    connectDB();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app