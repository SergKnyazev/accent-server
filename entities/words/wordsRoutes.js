import Router from 'express';
import wordsControllers from './wordsControllers.js';

const wordsRoutes = Router();

wordsRoutes.route('/')
  .get(wordsControllers.getWords);

wordsRoutes.route('/:sets_id')
  .get(wordsControllers.getSetWords);

// //_TODO :: переделать и удалить
// wordsRoutes.route('/word/:words_id')
//   .get(wordsControllers.getTrueWord);

wordsRoutes.route('/word')
  .post(wordsControllers.getWordIsTrueOrFalse);




// wordsRoutes.route('/:id')
//   .get(wordsControllers.getUser);
//
// wordsRoutes.route('/delete/:id')
//   .delete(wordsControllers.deleteUser);
//
// wordsRoutes.route('/edit/:id')
//   .put(wordsControllers.editUser);

export { wordsRoutes };

/**
 *
 *
 * app.get('/', (req, res) => {
 *   res.send('<h1>Accent started...</h1>')
 * })
 *
 * */
