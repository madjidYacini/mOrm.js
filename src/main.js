import mOrm from './mOrm';
import Student from './entities/student';
import Project from './entities/project';
import Note from './entities/note';

import config from './../orm.config.json';

(async () => {
  const orm = new mOrm();

  try {
    await orm.createConnection({
      ...config,
      synchronize: false,
      entities: [Student, Project, Note]
    });
  } catch (err) {
    console.log(err);
    process.exit(-1);
  }
})();
