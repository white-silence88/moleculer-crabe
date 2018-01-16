const AnswerTemplate = require('../constants/answer-teplate');


const create = (adapter, entry) => {
  return new Promise((resolve, reject) => {
    adapter.insert(entry)
      .then((data) => resolve(new AnswerTemplate({ data })))
      .catch((err) => reject(new AnswerTemplate({ err })));
  });
};


module.exports = create;
