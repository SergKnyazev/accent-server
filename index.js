import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import { database } from './database/database.js';
import { AccentWords } from './entities/words/wordsModel.js';
import { wordsRoutes } from './entities/words/wordsRoutes.js';
import { AccentSets } from './entities/sets/setsModel.js';
import { setsRoutes } from './entities/sets/setsRoutes.js';

// import { usersRoutes } from './entities/users/usersRoutes.js';
// import { authRoutes } from './entities/auth/authRoutes.js';
// import { todosRoutes } from './entities/todos/todosRoutes.js'

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/words', wordsRoutes);
app.use('/sets', setsRoutes);
// app.use('/users', usersRoutes);
// app.use('/auth', authRoutes);
// app.use('/todos', todosRoutes);


const start = async () => {
  try {
    await database.authenticate();
    console.log(chalk.greenBright(`=========================================================== DATABASE CONNECTION...`));
    console.log(chalk.bgGreen.blackBright('  +++++++> Connection has been established successfully!  '));

    await AccentWords.sync({});
    console.log(chalk.greenBright(`=========================================================== ACCENTWORDS SYNC...`));
    console.log(chalk.bgGreenBright.blackBright('  AccentWords model has been synchronized successfully... '));

    await AccentSets.sync({});
    console.log(chalk.greenBright(`=========================================================== ACCENTSETS SYNC...`));
    console.log(chalk.bgGreenBright.blackBright('  AccentSets model has been synchronized successfully... '));

    app.listen(PORT, () => {
      console.log(chalk.greenBright(`============================================================= SERVER STARTED...`));
      console.log(chalk.bgGreen.blackBright(`  +++++++> Server started on port=${PORT}...`))
    });
  } catch (error) {
    console.error(chalk.bgRed.whiteBright('Unable to connect to the database:'), error);
  }
}

start().then(() => {});
