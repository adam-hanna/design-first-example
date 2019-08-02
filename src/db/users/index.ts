import { Pool } from 'pg';
import { User } from '../../models';

export const CreateUser = async(pool: Pool, username: string, password: string): Promise<User> => {
  let user: User;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      INSERT INTO
        users(username, password, is_admin)

      VALUES
        ($1, crypt($2, gen_salt('bf', 10)), false)

      RETURNING
        id
    `, [username, password]);

    if (rows.length > 0)
      user = new User(rows[0].id, username, false);

    return user;
  } finally {
    client.release();
  }
}

export const FetchUserByUsername = async(pool: Pool, username: string): Promise<User> => {
  let user: User;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT 
        id,
        is_admin

      FROM 
        users

      WHERE 
        username = $1

      LIMIT
        1
    `, [username]);

    if (rows.length > 0)
      user = new User(rows[0].id, username, rows[0].isAdmin);

    return user;
  } finally {
    client.release();
  }
}
