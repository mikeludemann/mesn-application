const secrets = {
  dbUri: 'mongodb://127.0.0.1:27017/mesn'
};

const getSecret = key => secrets[key];

module.exports = getSecret;