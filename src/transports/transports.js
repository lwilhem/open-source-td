import process from 'node:process'

// If no formatters options are passed, the default formatters will be used
export class BaseTransport {
  formatters = []

  constructor(opts) {
    if (opts && opts.formatterts)
      this.formatters = opts.formatters
  }

  transporter(message) {
    process.stdout.write(`${message}\n`)
  }

  log(log) {
    // array of message to be send
    const output = log

    for (const msg of output)
      this.transporter(msg)
  }
}
