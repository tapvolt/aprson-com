var dgram = require('dgram');

var Config = require('./config');

function Listener() {

    var parse = {};

    this.setCallback = function(callback) {
        parse = callback;
    };

    this.init = function() {
        var srv = dgram.createSocket('udp4');

        srv.on('listening', function () {
          //console.log('server listening ' + address.address + ':' + address.port);
        });

        srv.on('message', function (payload, rinfo) {
          console.log("server got: " + payload + " from " + rinfo.address + ":" + rinfo.port);
            parse(payload);
        });


        srv.on('error', function (err) {
          console.error(err);
          process.exit(0);
        });

        srv.bind(Config.getListener());
    };

}

module.exports = Listener;
