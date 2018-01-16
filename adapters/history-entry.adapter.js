const Sequilize = require('sequelize');

/* Описываем модель для базы данных */
const HistoryEntryModel = {
  name: 'history_entries',
  define: {
    name: Sequilize.STRING,
    who: Sequilize.JSONB,
    body: Sequilize.JSONB,
    query: Sequilize.JSONB,
    removed: Sequilize.BOOLEAN,
    oldCondition: Sequilize.JSONB,
    newCondition: Sequilize.JSONB
  },
  options: {}
};

/* Экспорт модели */
module.exports = HistoryEntryModel;
