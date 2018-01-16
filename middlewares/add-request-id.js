/* jshint esversion:6 */
const addRequestId = (req, res, next) => {
  /* Получем X-Request-Id */
  const xRequestId = (req && req.headers && req.headers['x-request-id']) ? req.headers['x-request-id'] : '--';
  /* Добавляем x-request-id, если передан. Если нет - ставим прочеки */
  req.headers['x-request-id'] = xRequestId;
  /* Проваливаемся далее */
  next();
};

/* Экспорт мидлвари */
module.exports = addRequestId;
