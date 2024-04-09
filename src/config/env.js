require('dotenv').config();
const { get } = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLC_PATH').default('public').asString()
}

module.exports = {
    envs
}