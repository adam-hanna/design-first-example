import { Pool } from 'pg';
import { Tasks, Task } from '../../models';

export const CreateTask = async (pool: Pool, userID: string, note: string): Promise<Task> => {
  let task: Task;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      INSTER INTO
        tasks(user_id, note)

      VALUES
        ($1, $2)

      RETURNING
        id,
        timestamp
    `, [userID, note]);

    if (rows.length > 0)
      task = new Task(rows[0].id, userID, rows[0].timestamp, note);

    return task;
  } finally {
    client.release();
  }
}

export const DeleteTask = async (pool: Pool, taskID: string, userID: string): Promise<void> => {
  const client = await pool.connect();
  try {
    await client.query(`
      DELETE FROM
        tasks

      WHERE
        id = $1 AND
        user_id = $2
    `, [taskID, userID]);
  } finally {
    client.release();
  }
}

export const ShowTask = async (pool: Pool, taskID: string, userID: string): Promise<Task> => {
  let task: Task;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT 
        id,
        user_id,
        timestamp,
        note

      FROM 
        tasks

      WHERE 
        id = $1 AND
        user_id = $2

      LIMIT
        1
    `, [taskID, userID]);

    if (rows.length > 0)
      task = new Task(rows[0].id, rows[0].userID, rows[0].timestamp, rows[0].note);

    return task;
  } finally {
    client.release();
  }
}

export const ListTasks = async (pool: Pool, userID: string): Promise<Tasks> => {
  let tasks: Tasks = new Tasks();
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT 
        id,
        user_id,
        timestamp,
        note

      FROM 
        tasks

      WHERE 
        user_id = $1

      ORDER BY
        timestamp DESC
    `, [userID]);

    for (const row of rows)
      tasks.push(new Task(row.id, row.userID, row.timestamp, row.note));

    return tasks;
  } finally {
    client.release();
  }
}

export const DoesUserOwnTask = async(pool: Pool, taskID: string, userID: string): Promise<boolean> => {
  let valid: boolean;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT EXISTS (
        SELECT
          1

        FROM
          tasks

        WHERE
          id = $1 AND
          task_id = $2 AND

        LIMIT
          1
      );
    `, [taskID, userID]);

    if (rows.length > 0)
      valid = rows[0];

    return valid;
  } finally {
    client.release();
  }
}
