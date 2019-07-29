import { resolve } from 'path';
import { Pool } from 'pg';
import { migrate } from 'postgres-migrations';
import { Task, Tasks, User } from '../models';
import { CreateTask, DeleteTask, ShowTask, ListTasks, DoesUserOwnTask } from './tasks';
import { IsUsernamePasswordValid } from './auth';
import { CreateUser, FetchUserByUsername } from './users';

export default class {
  constructor(private user: string, private password: string, private host: string, private database: string, private port: number) {
    this.pool = new Pool({
      user,
      host,
      database,
      password,
      port,
    })
  }

  public async createUser (username: string, password: string): Promise<User> {
    return await CreateUser(this.pool, username, password);
  }

  public async fetchUserByUsername(username: string): Promise<User> {
    return await FetchUserByUsername(this.pool, username);
  }

  public async isUsernamePasswordValid (username: string, password: string): Promise<boolean> {
    return await IsUsernamePasswordValid(this.pool, username, password);
  }

  public async createTask (userID: string, note: string): Promise<Task> {
    return await CreateTask(this.pool, userID, note);
  }

  public async deleteTask (taskID: string, userID: string): Promise<void> {
    return await DeleteTask(this.pool, taskID, userID); 
  }

  public async showTask (taskID: string, userID: string): Promise<Task> {
    return await ShowTask(this.pool, taskID, userID);
  }

  public async listTasks (userID: string): Promise<Tasks> {
    return await ListTasks(this.pool, userID); 
  }

  public async doesUserOwnTask (taskID: string, userID: string): Promise<boolean> {
    return await DoesUserOwnTask(this.pool, taskID, userID);
  }

  // TODO: how to `pool.end()` on shutdown???
  public endPool(): void {
    this.pool.end();
  }

  public async migrate () {
    await migrate({
      user: this.user,
      password: this.password,
      host: this.host,
      database: this.database,
      port: this.port,
    }, resolve(__dirname, './migrations/'), undefined);
  }

  private pool: Pool
}
