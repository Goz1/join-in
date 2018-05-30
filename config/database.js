const { db } = require('./serverVariable');

module.exports = {
  database:`mongodb://${db}`,
  secret: 'yoursecret'
}
