/* jshint esversion: 6*/
const AnswerTemplate = require('../constants/answer-teplate');

const find = (adapter, filter) => {
  const query = { query: filter };
  
  return new Promise((resolve, reject) => {
    adapter.find(query)
      .then((data) => resolve(new AnswerTemplate( { data } )))
      .catch((err) => reject(new AnswerTemplate({ err })));
  });
};


module.exports = find;
