var telnet = require('telnet-client');

module.exports = Telnet;

function Telnet() {

    var params = {
        host: '127.0.0.1',
        port: 23,
        shellPrompt: '/ # ',
        timeout: 1500,
        debug: true
    };

    this.init = function() {
        this.connection = new telnet();
        this.connection.on('ready', function(prompt) {
          connection.exec(cmd, function(err, response) {
            console.log(response);
          });
        });

        this.connection.on('timeout', function() {
          console.log('socket timeout!')
          connection.end();
        });

        this.connection.on('close', function() {
          console.log('connection closed');
        });

        this.connection.connect(params);
    }

}
