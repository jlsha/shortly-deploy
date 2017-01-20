var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;

var Schema = mongoose.Schema;

var urlSchema = Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  createdAt: Date
});

// urlSchema.methods = function () {
  
// };

var Url = mongoose.model('Url', urlSchema);

var createShortUrl = function (url) {
  var hashFunc = crypto.createHash('sha1');
  hashFunc.update(url);
  return hashFunc.digest('hex').slice(0, 5);
};

module.exports = Url;