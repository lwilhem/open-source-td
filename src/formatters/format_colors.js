/**
 * @typedef {import("../entities/index.js").PreparedMessage} PreparedMessage
 * @typedef {import("../entities/index.js").Levels} Levels
 */

/**
 * @template {PreparedMessage} T
 * @typedef {(current: string, context: T) => string} Formatter
 */

/**
 *
 * @returns {Formatter<PreparedMessage>} return chainable output
 */
export function format_colors() {
  return (current_message, context) => {
    return colorize_by_level(context.level, current_message)
  }
}

/**
 *
 * @param {Levels} level
 * @param {string} message
 * @returns {string} colorized message
 */
export function colorize_by_level(level, message) {
  switch (level) {
    case level.SUCCESS: {
      return `\u001B[32m${message}\u001B[0m`
    }
    case level.WARNING: {
      return `\u001B[33m${message}\u001B[0m`
    }
    case level.INFO: {
      return message
    }
    case level.ERROR: {
      return `\u001B[31m${message}\u001B[0m`
    }
    case level.DEBUG: {
      return `\u001B[34m${message}\u001B[0m`
    }
    case level.TRACE: {
      return `\u001B[34m${message}\u001B[0m`
    }
    default: {
      return message
    }
  }
}
