const config = {
  production: {

  },
  development: {

  }
}

exports.getConfigByEnvironment= function getConfigByEnvironment(env) {
  return config[env] || config.development
}
