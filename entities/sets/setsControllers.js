import setsServices from './setsServices.js';

class SetsControllers {
  getSets = async (req, res) => {
    try {
      const sets = await setsServices.getSets();

      console.log('SetsControllers --> getSets --> { sets, error: null } ----------------------------> frontend');
      console.log({
        sets,
        error: null
      });

      return res.status(200).json({
        sets,
        error: null
      });
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  // getSetWords = async (req, res) => {
  //   try {
  //     const { sets_id } = req.params;
  //     const words = await wordsServices.getSetWords(sets_id);
  //     return res.status(200).json({
  //       words,
  //       error: null
  //     });
  //   } catch (error) {
  //     return res.status(500).json({error})
  //   }
  // }
  //
  // getWordIsTrueOrFalse = async (req, res) => {
  //   try {
  //     const { words_id, selectedWord } = req.body;
  //     const isTrueOrFalse = await wordsServices.getWordIsTrueOrFalse(words_id, selectedWord);
  //     return res.status(200).json(isTrueOrFalse)
  //   } catch (error) {
  //     return res.status(500).json({error})
  //   }
  // }

}

export default new SetsControllers();
