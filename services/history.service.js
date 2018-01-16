/* jshint esversion: 6 */

/* Имортируем */
const DbService = require('moleculer-db'),
      SequelizeAdapter = require('moleculer-db-adapter-sequelize');
/* Импортируем настройки адаптера */
const pgSqlAdapterSettings = require('../configs/application.pgsql.adapter');
/* Деструктор объекта */
const { database, username, password, postgres } = pgSqlAdapterSettings;
/* Импортируем модель */
const HistoryEntryModel = require('../adapters/history-entry.adapter');
const AnswerTemplate = require('../constants/answer-teplate');
const history = require('../entities/history');
/* Импортируем константы */
/* Описываем сервис */
const HistoryEntryService = {
  /* Наименование сервиса */
  name: 'histories',
  /* Миксины */
  mixins: [DbService],
  /* Версия сервиса */
  version: 'v1',
  /* Адаптер базы данных */
  adapter: new SequelizeAdapter(database, username, password, postgres),
  /* Модель для ОРМ */
  model: HistoryEntryModel,
  /* Действия */
  actions: {
    /* Получить список */
    list() {
      const filter = {};
      const { adapter } = this;
      /* Возвращаем полный список объектов */
      return history.findAll({adapter, filter});
    },
    /* Создать запись */
    create(ctx) {
      const { adapter } = this;
      const { params } = ctx;

      return history.create({ adapter, entry: params });
    },
    /* Обновить запись */
    update() {
      return { action: 'update' };
    },
    /* Получить конкретную запись */
    get(ctx) {
      /* Деструктуируем объект */
      const { params } = ctx;
      const { adapter } = this;
      /* Возвращаем один конкретный объект */
      return history.findOne({ adapter, filter: params });
    },
    /* Удалить запись */
    remove(ctx) {
      const { params } = ctx;
      const { adapter } = this;

      return history.remove({ adapter, id: params.id });
    }
  },
  /* Настройки сервиса */
  settings: {},
  /* Событие после коннекта к БД */
  afterConnected() {
    this.logger.info('Connected successfully');
  }
};


/* Экспортируем сервис */
module.exports = HistoryEntryService;
