/**
 * @typedef {object} TransportConfig
 * @property {(value: any) => string} [format] - Function to format the value.
 * @property {number} [level] - Level of the transport.
 * @property {(info) => string} [template] - Function to create a template.
 */

/**
 * @type {Partial<TransportConfig>}
 */
const defaultConfig = {
  template: ({ message }) => message,
  format: JSON.stringify,
  level: 'info',
}

/**
 * @class
 * @template T
 * @extends {TransportConfig}
 */
class Transport {
  /**
   * @type {T}
   */
  config

  /**
   * @constructor
   * @param {T} config - The configuration for the transport.
   */
  constructor(config) {
    this.config = { ...defaultConfig, ...(config) }
  }

  /**
   * @param {Level} level - The level to check.
   * @returns {boolean} - Whether the level is allowed.
   */
  isAllowed(level) {
    return isAllowed(this.config.level, level)
  }

  /**
   * @param {{ message: string, level: string }} logObject - The log object.
   * @returns {string} - The log message.
   */
  log({ message, _level }) {
    return message
  }

  /**
   * @param {any} value - The value to format.
   * @returns {string} - The formatted value.
   */
  format(value) {
    return this.config.format(value)
  }

  /**
   * @param {any} info - The info to get the message from.
   * @returns {string} - The message.
   */
  getMessage(info) {
    return this.config.template(info)
  }
}

export {
  Transport,
  defaultConfig,
}
