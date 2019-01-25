import {
  Client
} from 'pg';
import Core from './core';

export default class PostgreSQL extends Core {
  constructor(options) {
    super(options);
  }
  async initialize() {
    const {
      host,
      port,
      username,
      password,
      database
    } = this;


    this.client = new Client({
      user: username,
      host,
      database,
      password,
      port
    });
    try {
      await this.client.connect();
      this.dump();

    } catch (err) {
      throw new Error(`Database ${database} doesn't exist`);
    }
  }
}