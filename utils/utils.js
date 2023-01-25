// случайное число от min до (max+1)
export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// перемешать элементы массива,
// где каждый элемент является объектом
export const mixArrayElements = (arr) => {
  let len = arr.length - 1;
  while (len) {
    let index = randomInteger(0, len);
    let tempElement = {...arr[len]};
    arr[len] = { ...arr[index]};
    arr[index] = { ...tempElement};
    len -= 1;
  }
  return arr;
}

// перемешать слова внутри каждого элементы массива
export const mixWordsInsideEachArrayElements = (arr) => {
  const modifiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    const modifiedObj = {};
    modifiedObj.words_id = arr[i].words_id;
    modifiedObj.sets_id = arr[i].sets_id;
    if (Math.random() > 0.5) {
      modifiedObj.true_word = arr[i].true_word;
      modifiedObj.false_word = arr[i].false_word;
    } else {
      modifiedObj.true_word = arr[i].false_word;
      modifiedObj.false_word = arr[i].true_word;
    }
    modifiedArr.push(modifiedObj);
  }
  return modifiedArr;
}

// переименовать свойства внутри каждого элементы массива
export const renamePropertyEachArrayElements = (arr) => {
  const modifiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    const modifiedObj = {};
    modifiedObj.words_id = arr[i].words_id;
    modifiedObj.sets_id = arr[i].sets_id;
    modifiedObj.oneWord = arr[i].true_word;
    modifiedObj.twoWord = arr[i].false_word;
    modifiedArr.push(modifiedObj);
  }
  return modifiedArr;
}
