import * as log from 'winston'
import * as aprs from 'aprs-parser'


// Main function
async function main() {

    var parser = new aprs.APRSParser();
    var result = parser.parse("SQ7PFS-10>APRS,TCPIP*,qAC,T2SYDNEY:@085502h4903.50N/07201.75W-Hello world/A=001234");

    log.info('hello', result);

    try {

    } catch (e) {

    }
}

//
main().catch((e) => {
    console.log(e);
    process.exit(1);
});
