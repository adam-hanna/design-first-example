import { resolve } from 'path';
import { Pool } from 'pg';
import { migrate } from 'postgres-migrations';
import { Todo, Todos, User } from '../models';
import { CreateTodo, DeleteTodo, ShowTodo, ListTodos, DoesUserOwnTodo } from './todos';
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

  public async createTodo (userID: string, note: string): Promise<Todo> {
    return await CreateTodo(this.pool, userID, note);
  }

  public async deleteTodo (todoID: string, userID: string): Promise<void> {
    return await DeleteTodo(this.pool, todoID, userID); 
  }

  public async showTodo (todoID: string, userID: string): Promise<Todo> {
    return await ShowTodo(this.pool, todoID, userID);
  }

  public async listTodos (userID: string): Promise<Todos> {
    return await ListTodos(this.pool, userID); 
  }

  public async doesUserOwnTodo (todoID: string, userID: string): Promise<boolean> {
    return await DoesUserOwnTodo(this.pool, todoID, userID);
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
