import { AccentSets } from './setsModel.js';
// import { mixArrayElements, mixWordsInsideEachArrayElements, renamePropertyEachArrayElements } from '../../utils/utils.js';

class SetsServices {
  getSets = async () => {
    let sets = await AccentSets.findAll({ raw: true });

    console.log('SetsServices --> getSets --> sets ----------------------------------------------------------');
    console.log(sets);

    return sets;

  }

  // getSetWords = async (sets_id) => {
  //   return await AccentWords.findAll({
  //     where: {
  //       sets_id,
  //     }
  //   });
  // }
  //
  // getWordIsTrueOrFalse = async (words_id, selectedWord) => {
  //   const result = await AccentWords.findByPk(words_id);
  //   return selectedWord === result.dataValues.true_word
  // }

}

export default new SetsServices();
