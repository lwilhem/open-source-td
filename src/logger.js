import util from 'node:util'
import { BaseTransport, ConsoleTransport } from './transports/index.js'
import { levels } from './entities/index.js'

/**
 * @template {import("./entities/prepare_message.js").PreparedMessage} T
 * @typedef {{transports?: BaseTransport<T>[]}} A3TDLoggerOptions
 */

/**
 * @typedef {keyof import("./entities/levels.js").Levels} Level
 * @typedef {import('./entities/index.js').PreparedMessage} PreparedMessage
 */

/**
 * @template {import("./entities/prepare_message.js").PreparedMessage} T
 */
export class A3TDLogger {
  /**
   * @type {BaseTransport<T>[]}
   */
  transports = [new ConsoleTransport()]

  /**
   * @param {A3TDLoggerOptions<T>} opts
   */
  constructor(opts) {
    if (opts && opts.transports)
      this.transports = opts.transports
  }

  /**
   *
   * @param {Level} level
   * @param {string} out
   * @returns {T} prepared object
   */
  _prepare_object(level, out) {
    const timestamp = new Date()
    return { timestamp, level, message: out }
  }

  /**
   *
   * @param {Level} level
   * @param {unknown?} message
   * @returns {void}
   */
  _log(level, message) {
    const log_object = this._prepare_object(level, message)

    for (const transport of this.transports)
      transport.log(log_object)
  }

  /**
   *
   * @param {string} message
   */
  info(message) {
    this._log(levels.INFO, message)
  }

  /**
   *
   * @param {string} message
   */
  warn(message) {
    this._log(levels.WARNING, message)
  }

  /**
   *
   * @param {string} message
   */
  error(message) {
    this._log(levels.ERROR, message)
  }

  /**
   *
   * @param {string} message
   */
  debug(message) {
    this._log(levels.DEBUG, message)
  }

  /**
   * @param {string} message
   */
  success(message) {
    this._log(levels.SUCCESS, message)
  }

  /**
   * @param {string} message
   */
  trace(message) {
    this._log(levels.TRACE, message)
  }
}
