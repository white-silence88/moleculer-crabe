class AnswerTemplate {
  constructor(obj) {
    const { data, err, meta } = obj;
    
    /* Правильно выстраиваем дату */
    if(data && Array.isArray(data)) {
      this.data = data;
    } else if (data && !Array.isArray(data)){
      this.data = [data];
    } else {
      this.data = null;
    }

    /* Правильно сроим ошибку */
    this.error = (err)
      ? { filname: err.fileName, line: err.lineNumber, message: err.message, stack: err.stack }
      : null;
    /* Правильно строим объект меты */
    this.meta = (meta) ? meta : null;

    /* Возвратить объект */
    return { data: this.data, error: this.error, meta: this.meta };
  }

  /* Геттеры и сеттеры данных */
  get data() {
    return this.__data;

  }
  set data(data) {
    this.__data = data;
  }

  /* Геттеры и сеттеры ошибки */
  get error() {
    return this.__error;
  }
  set error(err) {
    this.__error = err;
  }

  /* Геттеры и сеттеры меты */
  get meta() {
    return this.__meta;
  }
  set meta(meta) {
    this.__meta = meta;
  }
}

module.exports = AnswerTemplate;
