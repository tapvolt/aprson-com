var cluster = require('cluster');

var Config = require('./modules/config');
var Worker = require('./modules/worker');

if (cluster.isMaster) {

    for (var i = 0; i < Config.getCPUs(); i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    var app = new Worker(cluster.worker).init();
}


