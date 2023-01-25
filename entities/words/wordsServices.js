// import { database } from '../../database/database.js';
import { AccentWords } from './wordsModel.js';
import { mixArrayElements, mixWordsInsideEachArrayElements, renamePropertyEachArrayElements } from '../../utils/utils.js';
// import { QueryTypes } from 'sequelize';
// import bcrypt from 'bcryptjs';
// import { v4 as uuidv4 } from 'uuid';

class WordsServices {

  getWords = async () => {
    let words = await AccentWords.findAll({ raw: true });

    // words = renamePropertyEachArrayElements(mixWordsInsideEachArrayElements(mixArrayElements(words)));

    words = mixArrayElements(words);
    words = mixWordsInsideEachArrayElements(words);
    words = renamePropertyEachArrayElements(words);
    console.log('WordsServices --> getWords --> words ----------------------------------------------------------');
    console.log(words);

    return words;

    // // return words
    // return await AccentWords.findAll({ raw: true });
  }

  getSetWords = async (sets_id) => {
    return await AccentWords.findAll({
      where: {
        sets_id,
      }
    });
  }

  // //_TODO :: переделать и удалить
  // getTrueWord = async (words_id) => {
  //   const result = await AccentWords.findByPk(words_id);
  //   return {
  //     trueWord: result.dataValues.true_word,
  //   }
  // }

  getWordIsTrueOrFalse = async (words_id, selectedWord) => {
    const result = await AccentWords.findByPk(words_id);
    return selectedWord === result.dataValues.true_word
  }

  // getUser = async (id) => {
  //   // const sql = `SELECT * FROM users WHERE users_id='${id}'`;
  //   // const user = await database.query(sql, { type: QueryTypes.SELECT });
  //
  //   const user = await User.findOne({
  //     where: {
  //       users_id: id
  //     }
  //   });
  //   return user.dataValues;
  // }

  // registerUser = async ({ email, password }) => {
  //   const id = uuidv4();
  //   const hashPassword = bcrypt.hashSync(password, 10);
  //
  //   // const sql = `INSERT INTO users (users_id, email, password) VALUES ('${id}', '${email}', '${hashPassword}')`;
  //   // await database.query(sql, { type: QueryTypes.INSERT });
  //
  //   const user = await User.create({
  //     users_id: id,
  //     password: hashPassword,
  //     role: 'user',
  //     email,
  //   });
  //
  //   return user.dataValues;
  // }

  // deleteUser = async ({ id }) => {
  //   // const sql = `DELETE FROM users WHERE users_id='${id}'`;
  //   // await database.query(sql, { type: QueryTypes.DELETE });
  //
  //   await User.destroy({
  //     where: {
  //       users_id: id
  //     }
  //   });
  //
  //   return {
  //     message: `Пользователь с id ${id} удален`
  //   };
  // }

  // editUser = async ({ id, email, password }) => {
  //   const hashPassword = bcrypt.hashSync(password, 10);
  //
  //   // const sql = `UPDATE users SET email='${email}', password='${hashPassword}' WHERE users_id='${id}'`;
  //   // await database.query(sql, { type: QueryTypes.UPDATE });
  //
  //   await User.update({
  //     email,
  //     password: hashPassword,
  //   }, {
  //     where: {
  //       users_id: id
  //     }
  //   });
  //
  //   const user = {
  //     users_id: id,
  //     email
  //   }
  //
  //   return user;
  // }

  // loginUser = async ({ email, password }) => {
  //   // const sql = `SELECT * FROM users WHERE email='${email}'`;
  //   // const user = await database.query(sql, { type: QueryTypes.SELECT });
  //
  //   const user = await User.findOne({
  //     where: {
  //       email
  //     }
  //   });
  //
  //   console.log(user);
  //
  //   if (!user) {
  //     return {
  //       error: `Пользователя с таким email не существует`
  //     };
  //   }
  //
  //   const validPassword = bcrypt.compareSync(password, user.dataValues.password);
  //
  //   if (!validPassword) {
  //     return {
  //       error: `Логин или пароль неверный`
  //     };
  //   }
  //
  //   return {
  //     message: `Успешная авторизация`,
  //     role: user.dataValues.role,
  //     email: user.dataValues.email,
  //   }
  // }

}

export default new WordsServices();
