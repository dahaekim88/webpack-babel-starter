const env = process.env.NODE_ENV;

const development = {
  API_URL: "",
};

const production = {
  API_URL: "",
};

const config = {
  development,
  production,
};

console.log(
  `[+] Environment env=${process.env.NODE_ENV}, config[env]=` +
    JSON.stringify(config[env])
);

module.exports = config[env];
