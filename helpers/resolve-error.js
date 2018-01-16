/* jshint esversion: 6 */
const AnswerTemplate = require('../constants/answer-teplate');

const responseError = (req, res, err) => {
  const answer = new AnswerTemplate({ err });
  res.setHeader("Content-Type", "application/json");
  res.writeHead(err.code || 500);
  res.end(JSON.stringify(answer));
};


module.exports = responseError;
