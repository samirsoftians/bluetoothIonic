var exec = require('cordova/exec');

module.exports.add = function(){
 exec(success, error, 'BleTracker', 'add', [arg0]);

};
module.exports.sub = function(){
 exec(success, error, 'BleTracker', 'sub', [arg0]);

};
