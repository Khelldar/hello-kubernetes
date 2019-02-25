import { DB_TODO } from './db';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';
import { ENV } from './env';
import { Todo } from './generated/todo';

const pgp: IMain = pgPromise({
  // Initialization Options
});

export const db: IDatabase<any> = pgp(ENV.DATABASE_URL);

export interface DB_TODO {
  id: string;
  date_created: string;
  text: string;
  completed: boolean;
  data_completed: string;
}

export const store = {
  listTodos: async (): Promise<Todo[]> => {
    const dbTodos = await db.manyOrNone(`SELECT * FROM todos`);
    return dbTodos.map(toTodo);
  },

  createTodo: async (text: string): Promise<Todo> => {
    const dbTodo = await db.one(`INSERT INTO todos (text) VALUES($1) RETURNING *`, text);
    return toTodo(dbTodo);
  },
};

function toTodo(dbTodo: DB_TODO): Todo {
  return {
    ...dbTodo,
    dateCreated: dbTodo.date_created,
    dateCompleted: dbTodo.data_completed,
  };
}
