import express from 'express';
import session, { Store } from 'express-session';

import { SESSION_OPTIONS } from './config';

import { registerUserRoute } from './routes/register';

export const createApp = (store: Store) => {
  const app = express();
  app.use(
    session({
      ...SESSION_OPTIONS,
      store: store,
    })
  );

  app.use(express.json());

  app.use(registerUserRoute);

  return app;
};
