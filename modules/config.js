var OS = require('os');

function Config() {

    /**
     * Number of processes to fork, one per CPU
     */
    var getCPUs = function() {
        var numCPUs = OS.cpus().length;
        var override = parseInt(process.env.APRSON_FORK_CPUS);
        if (override > 0) {
            numCPUs = override;
        }
        return numCPUs;
    };

    /**
     * Bind configuration for the UDP socket listener
     * @returns {{address: string, port: number, exclusive: boolean}}
     */
    var getListener = function() {
        return {
            address: '0.0.0.0',
            port: 54321,
            exclusive: false
        };
    };

    return {
        getCPUs: getCPUs,
        getListener: getListener
    }

}

module.exports = new Config();