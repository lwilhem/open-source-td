import process from 'node:process'
import { BaseTransport } from './base_transport.js'

/**
 * @template {import("../entities/prepare_message.js").PreparedMessage} T
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
    console.log(log)
  }

  /**
   *
   * @param {T} log
   * @returns {void}
   */
  log(log) {
    const messages = this.prepare_log(log)

    const to_send = messages.map(msg => this.format(msg))

    to_send.forEach(message => this.transport(message))
  }
}
