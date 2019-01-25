import {
    isEmpty
} from 'lodash';
import PostgreSQL from './engine/postgresql';

export default class mOrm {
    async createConnection(dbConfig = {}) {
        console.log(dbConfig.entities);
        dbConfig.entities.forEach((entity) => {

        })

        if (typeof dbConfig === 'string') {
            const arrConnection = dbConfig.match(/(.*):\/\/(.*):(.*)@(.*):(.*)\/(.*)/)
            this.config = {
                type: arrConnection[1],
                username: arrConnection[2],
                password: arrConnection[3],
                host: arrConnection[4],
                port: arrConnection[5],
                database: arrConnection[6],
            }
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
        const {
            type,
            host,
            port,
            username,
            password,
            database
        } = this.config;
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