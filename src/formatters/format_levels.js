/**
 * @template {import("../entities/prepare_message.js").PreparedMessage} T
 * @typedef {(current: string, context: T) => string} Formatter
 */

/**
 *
 * @returns {Formatter<import("../entities/prepare_message.js").PreparedMessage>} return chainable output
 */
export function format_levels() {
  return (current_message, context) => {
    return `\u001B[1m[${context.level}]\u001B[22m ${current_message}`
  }
}
