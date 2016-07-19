/**
 * Created by nick on 7/6/16.
 */

const modelsStorage = {};

require('./User.js')(modelsStorage);
require('./Article.js')(modelsStorage);

module.exports = modelsStorage;