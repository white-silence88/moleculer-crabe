/* jshont esversion:6 */
const ServerSettings = {
    address: process.env.SERVER_ADDR || '0.0.0.0',
    port: process.env.SERVER_PORT || 3000
};

module.exports = ServerSettings;
