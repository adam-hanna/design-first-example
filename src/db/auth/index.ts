import { Pool } from 'pg';
import { User } from '../../models';

export const IsUsernamePasswordValid = async(pool: Pool, username: string, password: string): Promise<boolean> => {
  let valid: boolean;
  const client = await pool.connect();
  try {
    const { rows } = await client.query(`
      SELECT EXISTS (
        SELECT
          1

        FROM
          users

        WHERE
          UPPER(username) = UPPER($1) AND
          password IS NOT NULL AND
          password = crypt($2, password)

        LIMIT
          1
      );
    `, [username, password]);

    if (rows.length > 0)
      valid = rows[0];

    return valid;
  } finally {
    client.release();
  }
}
