import mOrm from './mOrm';
import Student from './entities/student'
import Project from './entities/project'
import Note from './entities/note'
// Let's Rock!
(async () => {
    const orm = new mOrm();

    try {
        await orm.createConnection({

            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'madjid',
            password: '',
            database: 'mOrm',

            synchronize: false,
            entities: [
                Student,
                Project,
                Note
            ]

        });


    } catch (err) {
        console.log(err);
        process.exit(-1);
    }
})();