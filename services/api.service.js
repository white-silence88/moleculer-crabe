/* jshint esversion: 6 */
/* Загружаем модули, установленные из npm */
const ApiGateway = require('moleculer-web');
const { MoleculerError } = require("moleculer").Errors;
/* Прогружаем модуль настроек */
const ServerSettings = require('../configs/application.server');
/* Подключаем константы */
const error = require('../helpers/resolve-error.js');
/* Подключаем мидлвари */
const addRequestId = require('../middlewares/add-request-id');
/* Создаем объект сервиса */
const ApiService = {
  /* Имя сервиса */
  name: 'api',
  /* Примеси */
	mixins: [ApiGateway],
  /* Настройки сервиса */
	settings: {
    /* Добавляем мидлвари в броке API */
    use: [
      addRequestId
    ],
    /* Порт сервиса */
		port: ServerSettings.port || 3030,
    /* Роутеры сервиса*/
		routes: [
      {
			  path: '/api',
			  whitelist: [
				  '*'
			  ],
        /* Настройки бодипарсера (включаем парсер JSON'a) */
        bodyParsers: {
          json: true
        },
        /* Прописывем алиасы */
        aliases: {
          'GET /health': 'v1.metrics.health',
          'GET /stats': 'v1.metrics.stats',
          'REST /histories': 'v1.histories'
        },
        /* Событие до вызова блока действия */
        onBeforeCall(ctx, route, req, res) {
          console.log('>>> BEFOR CALL');
        },
        /* Событие после вызова блока действия */
        onAfterCall(ctx, route, req, res, data, action) {
          /* Событие посл вызова */
          console.log('>>> AFTER CALL ');
        }
		  }
    ],
    /* Обработчик ошибок (глобальный)*/
    onError(req, res, err) { error(req, res, err); }
  }
};
/* Экспортируем объект сервиса */
module.exports = ApiService;
