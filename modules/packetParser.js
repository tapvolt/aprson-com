function PacketParser() {

    const RESERVED_DATATYPES = ['&', '+', '.'];
    const UNUSED_DATATYPES = ['&', '+', '.'];

    /**
     *
     * @param payload Uint8Array
     */
    this.process = function(payload) {
        if (payload.length > 0) {
            var packet = {};
            try {
                var payloadString = payload.toString();
                packet.raw = payloadString;

                var head = payloadString.substring(0, payloadString.indexOf(':'));
                if (!head) {
                    throw 'No head found';
                }
                packet.head = head;

                var body = payloadString.substring(0, payloadString.indexOf(':'));
                if (!body) {
                    throw 'No body found';
                }
                var body = payloadString.substring(payloadString.indexOf(':')+1);
                packet.body = body;





                // Page 27 of APRS101.PDF
                var dataType = body.substring(0,1);
                switch(true) {
                    case ('!' === dataType):
                        // Position without timestamp (no APRS messaging), or Ultimeter 2000 WX Station
                        var breakpoint = true;
                        break;

                    case '#':
                        // Peet Bros U-II Weather Station
                        break;

                    case '$':
                        // Raw GPS data or Ultimeter 2000
                        break;

                    case '%':
                        // Agrelo DFJr / MicroFinder
                        break;

                    case '`':
                        // Old Mic-E Data (but Current data for TM-D700)
                        break;

                    case ')':
                        // Item
                        break;

                    case '*':
                        // Peet Bros U-II Weather Station
                        break;

                    case '/':
                        // Position with timestamp (no APRS messaging)
                        break;

                    case ':':
                        // Message
                        break;

                    case ';':
                        // Object
                        break;

                    case '<':
                        // Station Capabilities
                        break;

                    case '=':
                        // Position without timestamp (with APRS messaging)
                        break;

                    case '>':
                        // Status
                        break;

                    case '?':
                        // Query
                        break;

                    case '@':
                        // Position with timestamp (with APRS messaging)
                        break;

                    case 'T':
                        // Telemetry data
                        break;


                    case '[':
                        // Maidenhead grid locator beacon (obsolete)
                        break;

                    case '_':
                        // Weather Report (without position)
                        break;

                    case '\'':
                        // Current Mic-E Data (not used in TM-D700)
                        break;

                    case '{':
                        // User-Defined APRS packet format
                        break;

                    case '}':
                        // Third-party traffic
                        break;

                    case (RESERVED_DATATYPES.indexOf(dataType) >= 0):
                        var breakpoint = true;
                        break;

                    case (UNUSED_DATATYPES.indexOf(dataType) >= 0):
                        var breakpoint = true;
                        break;


                    case (new RegExp('[0-9]').test(dataType)):
                    case (new RegExp('[A-S]').test(dataType)):
                    case (new RegExp('[U-Z]').test(dataType)):
                    case (new RegExp('[a-z]').test(dataType)):
                    case (dataType.match('/|~/g')):
                        // Do not use
                        var breakpoint = true;
                        break;

                    case ',':
                    // Invalid data or test data
                        break;

                }














            } catch (error) {
                console.log('FAIL: %s for %s', error, payload);
                console.log(error);
                var breakpoint = true;
            }



            console.log(packet);
            var breakpoint = true;

        } else {
            console.log('Listener dropped empty payload %s', payload);
        }
    };

}

module.exports = PacketParser;
