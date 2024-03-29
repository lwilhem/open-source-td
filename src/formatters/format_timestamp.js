/**
 * @template {import("../entities/prepare_message.js").PreparedMessage} T
 * @typedef {(current: string, context: T) => string} Formatter
 */

/**
 *
 * @returns {Formatter<import("../entities/prepare_message.js").PreparedMessage>} return chainable output
 */
export function format_timestamp() {
  return (current_message, context) => {
    const timestamp = context.timestamp
      .toISOString()
      .replace(/T/, ' ')
      .replace(/\..+/, '')

    return `${timestamp}:  ${current_message}`
  }
}
