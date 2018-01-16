/* jshint esversion: 6 */
const CacherSettings = {
  ttl: process.env.CACHER_TTL || 30,
  monitor: process.env.CACHER_MONITOR || true,

  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || '',
    db: process.env.REDIS_DBNAME || 2
  }
};

module.exports = CacherSettings;
