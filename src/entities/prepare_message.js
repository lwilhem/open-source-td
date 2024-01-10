/**
 * @typedef {object} PreparedMessage
 * @property {string} message - content of the log
 * @property {keyof import("./levels.js").Levels} level level log Level
 * @property {Date} timestamp timestamp of the log
 */

/**
 *
 * @param {PreparedMessage} object input
 * @returns {PreparedMessage} `prepared message
 */
export function prepare_message({ message, level, timestamp }) {
  return {
    message,
    level,
    timestamp,
  }
}
