const config = require('config');

module.exports = {
    gridUrl: 'http://localhost:9515',
    sets: {
        client: {
            files: 'tests',
            browsers: ['clientChrome']
        }
    },
    browsers: {
        clientChrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            baseUrl: config.get('hosts.client'),
            screenshotPath: 'debug/client'
        }
    }
};
