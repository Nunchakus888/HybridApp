cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.sumscope.mobile.apitest/www/mobileApiTest.js",
        "id": "org.sumscope.mobile.apitest.mobileApiTest",
        "clobbers": [
            "cordova.plugins.mobileApiTest"
        ]
    },
                  {
                  "file": "plugins/org.sumscope.mobile.apitest2/www/mobileApiTest2.js",
                  "id": "org.sumscope.mobile.apitest2.mobileApiTest2",
                  "clobbers": [
                               "cordova.plugins.mobileApiTest2"
                               ]
                  }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.dialogs": "0.3.0",
    "org.sumscope.mobile.apitest": "0.0.1",

               "org.sumscope.mobile.apitest2": "0.0.1"
}
// BOTTOM OF METADATA
});