/* jshint esversion: 6 */
const AnswerTemplate = require('../constants/answer-teplate');


const updateInPgsql = (adapter, id, update) => {
  return new Promise((resolve, reject) => {
    adapter.updateById(id, { $set: update })
      .then((data) => resolve(new AnswerTemplate({ data })))
      .catch((err) => reject(new AnswerTemplate({ err })));
  });
};


module.exports = updateInPgsql;
