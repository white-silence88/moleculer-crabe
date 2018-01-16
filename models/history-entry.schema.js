/* jshint esversion:6
 *  описываем JSON-схему модели*/
const HistoryEntry = {
  type: 'object',
  properties: {
    action: {
      type: 'string'
    },
    who: {
      type: 'object'
    },
    body: {
      type: 'object'
    },
    query: {
      type: 'object'
    },
    oldCondition: {
      type: 'object'
    },
    newCondition: {
      type: 'object'
    },
    dateAndTime: {}
  }
};
