import process from 'node:process'
import { BaseTransport } from './base_transport.js'

/**
 * @template {import("../entities/index.js").PreparedMessage} T
 * @extends {BaseTransport<T>}
 */
export class ConsoleTransport extends BaseTransport {
  constructor(opts) {
    super(opts)
  }

  /**
   * @param {string} log
   * @returns {void}
   */
  transport(log) {
    process.stdout.write(log)
  }

  /**
   *
   * @param {T} log
   */
  log(log) {
    const messages = this.prepare_log(log)

    messages.forEach(msg => this.format(msg))

    for (const message in messages)
      this.log(message)
  }
}
