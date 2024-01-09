import { BaseTransport } from './transports/transports.js'

const transport = new BaseTransport()

transport.log(['Hello World !', 'my logging is working'])
