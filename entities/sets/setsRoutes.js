import Router from 'express';
import setsControllers from './setsControllers.js';

const setsRoutes = Router();

setsRoutes.route('/')
  .get(setsControllers.getSets);

// setsRoutes.route('/:sets_id')
//   .get(setsControllers.getSetWords);
//
// setsRoutes.route('/word')
//   .post(setsControllers.getWordIsTrueOrFalse);
//
// setsRoutes.route('/delete/:id')
//   .delete(setsControllers.deleteUser);
//
// setsRoutes.route('/edit/:id')
//   .put(setsControllers.editUser);

export { setsRoutes };





