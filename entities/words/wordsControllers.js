import wordsServices from './wordsServices.js';

class WordsControllers {

  getWords = async (req, res) => {
    try {
      const words = await wordsServices.getWords();

      console.log('WordsControllers --> getWords --> { words, error: null } ----------------------------> frontend');
      console.log({
        words,
        error: null
      });

      return res.status(200).json({
        words,
        error: null
      });
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  getSetWords = async (req, res) => {
    try {
      const { sets_id } = req.params;
      const words = await wordsServices.getSetWords(sets_id);
      return res.status(200).json({
        words,
        error: null
      });
    } catch (error) {
      return res.status(500).json({error})
    }
  }

// //_TODO :: переделать и удалить
//   getTrueWord = async (req, res) => {
//     try {
//       const { words_id } = req.params;
//       const trueWord = await wordsServices.getTrueWord(words_id);
//       return res.status(200).json(trueWord)
//     } catch (error) {
//       return res.status(500).json({error})
//     }
//   }

  getWordIsTrueOrFalse = async (req, res) => {
    try {
      const { words_id, selectedWord } = req.body;
      const isTrueOrFalse = await wordsServices.getWordIsTrueOrFalse(words_id, selectedWord);
      return res.status(200).json(isTrueOrFalse)
    } catch (error) {
      return res.status(500).json({error})
    }
  }




  // getUser = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const user = await usersServices.getUser(id);
  //
  //     if (!user) {
  //       return res.status(400).json({
  //         error: `Пользователь с id ${id} не обнаружен`
  //       });
  //     }
  //
  //     return res.status(200).json({
  //       user,
  //       error: null
  //     });
  //   } catch (error) {
  //     return res.status(500).json({error})
  //   }
  // }

  // deleteUser = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //
  //     if (!id) {
  //       return res.status(400).json({
  //         error: `Параметр id не передан`
  //       })
  //     }
  //
  //     const result = await usersServices.deleteUser({ id });
  //
  //     return res.status(200).json({
  //       ...result,
  //       error: null
  //     });
  //   } catch (error) {
  //     return res.status(500).json({error})
  //   }
  // }

  // editUser = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //
  //     if (!id) {
  //       return res.status(400).json({
  //         error: `Параметр id не передан`
  //       })
  //     }
  //
  //     const { email, password } = req.body;
  //     if (!email || !password) {
  //       return res.status(400).json({
  //         error: `Неверный email или password`
  //       });
  //     }
  //
  //     const user = await usersServices.editUser({ id, email, password });
  //
  //     return res.status(200).json({
  //       user,
  //       error: null
  //     });
  //   } catch (error) {
  //     return res.status(500).json({error})
  //   }
  // }

}

export default new WordsControllers();
