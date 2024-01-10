/**
 * @typedef {import("../entities/index.js").PreparedMessage} PreparedMessage
 */

/**
 * @template {PreparedMessage} T
 * @typedef {(current: string, context: T) => string} Formatter
 */

/**
 *
 * @returns {Formatter<PreparedMessage>} return chainable output
 */
export function format_timestamp() {
  return (current_message, context) => {
    const timestamp = context.timestamp
      .toISOString()
      .replace(/T/, ' ')
      .replace(/\..+/, '')

    return `${timestamp} ${current_message}`
  }
}
