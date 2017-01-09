var Listener = require('./listener');
var PacketParser = require('./packetParser');

function Worker(obj) {

    var self = obj;

    var init = function() {
        var packetParser = new PacketParser();
        var listener = new Listener();
        listener.setCallback(packetParser.process);
        listener.init();
        sendLog('Initialised');
    };

    var getId = function() {
        return self.id;
    };

    var getPid = function() {
        return self.process.pid;
    };

    var sendLog = function(message) {
        console.log('Worker #%s pid #%s: %s', getId(), getPid(), message);
    };

    return {
        init: init
    }

}

module.exports = Worker;
