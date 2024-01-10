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
export function format_levels() {
  return (current_message, context) => {
    const toPad = Math.floor((7 - context.level.length) / 2)
    const levelString
      = context.level.length % 2 === 0
        ? `${' '.repeat(toPad)}${context.level}${' '.repeat(toPad + 1)}`
        : `${' '.repeat(toPad)}${context.level}${' '.repeat(toPad)}`

    return `\u001B[1m[${levelString}]\u001B[22m ${current_message}`
  }
}
