/* Импортируем константы */
const healthMessage = require('../constants/helth-message'),
      AnswerTemplate = require('../constants/answer-teplate');
/* Описываем сервис */
const MetricsApi = {
  /* Наименование сервиса */
  name: 'metrics',
  /* Версия сервиса */
  version: 'v1',
  /* Настройки сервиса */
  settings: {},
  /* Метаданные сервиса */
  metadata: {},
  /* Действия сервиса (экшены) */
  actions: {
    /* Хелзчек: отдает показатели работы сервиса */
    health(ctx) {
      /* получаем из объекта брокер */
      const { broker } = this;
      /* Возвращаем промис с действием */
      return new Promise((resolve, reject) => {
        broker.call('$node.health')
          .then((data) => resolve(new AnswerTemplate({ data })))
          .catch((error) => reject(error));
      });
    },
    /* Статистика: отдает статистику по сервису */
    stats() {
      /* Получаем из объекта брокер */
      const { broker } = this;
      /* Возвращаем проми с действием */
      return new Promise((resolve, reject) => {
        broker.call('$node.stats')
          .then((data) => resolve(new AnswerTemplate({ data })))
          .catch((error) => reject(error));
      });

    }
  },
  /* События сервиса */
  events: {},
  /* Методы сервиса */
  methods: {},
  /* Событие создания сервиса */
  created() {},
  /* Событие старта сервиса */
  started() {},
  /* Событие остановики сервиса */
  stopped() {}
};


/* Экспортируем сервис */
module.exports = MetricsApi;
