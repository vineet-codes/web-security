import mongoose from 'mongoose';

import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import session, { Store } from 'express-session';

import { createApp } from './app';

import { REDIS_OPTIONS, APP_PORT, MONGO_URI, MONGO_OPTIONS } from './config';

const start = async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

  const RedisStore = connectRedis(session);
  const client = new Redis(REDIS_OPTIONS);
  const cacheStore = new RedisStore({ client });

  const app = createApp(cacheStore);

  app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));
};

start();
