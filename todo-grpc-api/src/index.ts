import { ENV } from './env';
import { store } from './db';

import { GrpcServer } from '@types-first-api/grpc-server';

import * as generated from './generated/todo';

const service = generated.services.create('TodoService', { store });

service.registerServiceHandlers({
  listTodos: async (req$, ctx, { store }) => {
    const todos = await store.listTodos();
    return { todos };
  },
  createTodo: async (req$, ctx, { store }) => {
    const { text } = await req$.toPromise();
    const todo = await store.createTodo(text);
    return { todo };
  },
  updateTodo: (req$, ctx, { store }) => {
    throw new Error('not implimented');
  },
  deleteTodo: (req$, ctx, { store }) => {
    throw new Error('not implimented');
  },
});

const server = new GrpcServer(service);

server
  .bind({ port: parseInt(ENV.PORT) })
  .then(port => console.log(`listening on port ${port}...`));
