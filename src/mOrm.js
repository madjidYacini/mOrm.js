import { isEmpty } from 'lodash';
import PostgreSQL from './engine/postgresql';

export default class mOrm {
  async createConnection(dbConfig = {}) {
    if (typeof dbConfig == 'string') {
      // postgres://user:pass@host:port/db
      //string => object
    } else {
      if (isEmpty(dbConfig)) {
        if (!existsSync()) {
          throw new Error('NO CONFIG');
        }
        this.config = require(this);
      } else {
        this.config = dbConfig;
      }
    }
    const { type, host, port, username, password, database } = this.config;
    switch (type) {
      case 'postgres':
        this.dbInstance = new PostgreSQL({
          host,
          port,
          username,
          password,
          database
        });
        break;

      default:
        break;
    }
    await this.dbInstance.initialize();
  }
}
