/* jshint esversion:6 */
const findInPgsql = require('../helpers/findInPgsql'),
      createInPgsql = require('../helpers/createInPgsql'),
      updateInPgsql = require('../helpers/updateInPgsql');


const create = (obj) => {
  let { adapter, entry } = obj;

  entry.removed = false;

  return createInPgsql(adapter, entry);
};


const findAll = (obj) => {
  let { adapter, filter } = obj;
  filter.removed = false;

  return findInPgsql(adapter, filter);
};


const findOne = (obj) => {
  let { adapter, filter } = obj;
  filter.removed = false;
  console.log('========================', filter);
  return findInPgsql(adapter, filter);
};


const update = (obj) => {
  const { adapter, id, update } = obj;

  return updateInPgsql(adapter, id, update);
};


const remove = (obj) => {
  const { adapter, id } = obj;
  const update = { removed: true };

  return updateInPgsql(adapter, id, update);
};

module.exports = { findAll, findOne, create, remove };
