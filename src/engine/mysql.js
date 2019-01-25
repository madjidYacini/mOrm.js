import {
    Client
} from 'mysql';
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

        this.dump();

        this.client = new Client({
            user: username,
            host,
            database,
            password,
            port
        });

        try {
            await this.client.connect();
        } catch (err) {
            throw new Error(`Database ${database} doesn't exist`);
        }
    }
}