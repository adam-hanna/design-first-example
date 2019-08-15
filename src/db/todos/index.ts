import { Pool } from 'pg';
import { Todos, Todo } from '../../models';

export const CreateTodo = async (pool: Pool, userID: string, note: string): Promise<Todo> => {
  let todo: Todo;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      INSERT INTO
        todos(user_id, note)

      VALUES
        ($1, $2)

      RETURNING
        id,
        timestamp
    `, [userID, note]);

    if (rows.length > 0)
      todo = new Todo(rows[0].id, userID, rows[0].timestamp, note);

    return todo;
  } finally {
    client.release();
  }
}

export const DeleteTodo = async (pool: Pool, todoID: string, userID: string): Promise<void> => {
  const client = await pool.connect();
  try {
    await client.query(`
      DELETE FROM
        todos

      WHERE
        id = $1 AND
        user_id = $2
    `, [todoID, userID]);
  } finally {
    client.release();
  }
}

export const ShowTodo = async (pool: Pool, todoID: string, userID: string): Promise<Todo> => {
  let todo: Todo;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT 
        id,
        user_id,
        timestamp,
        note

      FROM 
        todos

      WHERE 
        id = $1 AND
        user_id = $2

      LIMIT
        1
    `, [todoID, userID]);

    if (rows.length > 0)
      todo = new Todo(rows[0].id, rows[0].userID, rows[0].timestamp, rows[0].note);

    return todo;
  } finally {
    client.release();
  }
}

export const ListTodos = async (pool: Pool, userID: string): Promise<Todos> => {
  let todos: Todos = new Todos();
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT 
        id,
        user_id,
        timestamp,
        note

      FROM 
        todos

      WHERE 
        user_id = $1

      ORDER BY
        timestamp DESC
    `, [userID]);

    for (const row of rows)
      todos.push(new Todo(row.id, row.userID, row.timestamp, row.note));

    return todos;
  } finally {
    client.release();
  }
}

export const DoesUserOwnTodo = async(pool: Pool, todoID: string, userID: string): Promise<boolean> => {
  let valid: boolean;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT EXISTS (
        SELECT
          1

        FROM
          todos

        WHERE
          id = $1 AND
          user_id = $2

        LIMIT
          1
      );
    `, [todoID, userID]);

    if (rows.length > 0)
      valid = rows[0];

    return valid;
  } finally {
    client.release();
  }
}
