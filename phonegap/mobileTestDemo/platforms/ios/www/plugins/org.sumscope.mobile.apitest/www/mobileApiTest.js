cordova.define("org.sumscope.mobile.apitest.mobileApiTest", function(require, exports, module) { 
var exec = require('cordova/exec');

module.exports = {
    apiTest: function(message, completeCallback)
    {
        exec(completeCallback, null, "mobileApiTest", "apiTest", [message]);
    },

    };


});
