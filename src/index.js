import { A3TDLogger } from './logger.js'

export * from './entities/index.js'
export * from './transports/index.js'
export * from './formatters/index.js'

const logger = new A3TDLogger()

logger.warn('hello World')
