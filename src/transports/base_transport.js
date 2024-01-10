import { format_colors, format_levels, format_timestamp } from '../formatters/index.js'

/**
 * @template {import("../entities/prepare_message.js").PreparedMessage} T
 * @typedef {(current: string, context: T) => string} Formatter
 */

/**
 * @typedef {object} BaseOptions
 * @template {import("../entities/index.js").PreparedMessage} T
 * @property {Formatter<T>} formatters - formatter functions
 */

/**
 * BaseTransport class represents a base transport for sending messages.
 * @template {import("../entities/prepare_message.js").PreparedMessage} T
 */
export class BaseTransport {
  /**
   * @type {Formatter<T>[]}
   */
  formatters = [format_timestamp(), format_colors()]

  constructor(opts) {
    if (opts && opts.formatters)
      this.formatters = opts.formatters
  }

  /**
   * @param {T} log
   * @returns {T[]} prepared log
   */
  prepare_log(log) {
    if (typeof log.message !== 'string')
      throw new Error('log.message must be a string')

    const out = log.message.split('\n').map((message) => {
      return {
        level: log.level,
        timestamp: log.timestamp,
        message,
      }
    })

    return out
  }

  /**
   *
   * @param {T} preparedLine
   * @returns {string} formatted message
   */
  format(preparedLine) {
    let formattedMessage = preparedLine.message
    for (const formatter of this.formatters)
      formattedMessage = formatter(formattedMessage, preparedLine)

    return formattedMessage
  }
}
