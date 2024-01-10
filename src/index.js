import { A3TDLogger } from './logger.js'

export * from './entities/index.js'
export * from './transports/index.js'
export * from './formatters/index.js'

const logger = new A3TDLogger()

logger.warn('warn')
logger.debug('debug')
logger.info('info')
logger.error('error')
logger.trace('trace')
logger.success('success')
