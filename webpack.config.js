// function buildConfig(env) {
//   return require('./webpack.' + process.env.NODE_ENV + '.js')(env)
// }



module.exports = require('./webpack.' + process.env.NODE_ENV + '.js')();