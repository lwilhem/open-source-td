/**
 * @template {import("../entities/prepare_message.js").PreparedMessage} T
 * @typedef {(current: string, context: T) => string} Formatter
 */

/**
 *
 * @returns {Formatter<import("../entities/prepare_message.js").PreparedMessage>} return chainable output
 */
export function format_colors() {
  return (current_message, context) => {
    return colorize_by_level(context.level, current_message)
  }
}

/**
 *
 * @param {string} level
 * @param {string} message
 * @returns {string} colorized message
 */
export function colorize_by_level(level, message) {
  switch (level) {
    case 'success': {
      return `\u001B[32m${message}\u001B[32m`
    }
    case 'warn': {
      return `\u001B[33m${message}\u001B[0m`
    }
    case 'info': {
      return message
    }
    case 'error': {
      return `\u001B[31m${message}\u001B[31m`
    }
    case 'debug': {
      return `\u001B[34m${message}\u001B[0m`
    }
    case 'trace': {
      return `\u001B[34m${message}\u001B[0m`
    }
    default: {
      return message
    }
  }
}
