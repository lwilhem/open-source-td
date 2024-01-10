import Logger, { levels } from '../src/index.js'

describe('testing logger class methods', () => {
  let logger
  let mockLog

  beforeEach(() => {
    logger = new Logger()
    mockLog = jest.spyOn(logger, '_log')
  })

  it('should call _log with DEBUG level and message', () => {
    const message = 'Debug message'
    logger.debug(message)
    expect(mockLog).toHaveBeenCalledWith(levels.DEBUG, message)
  })

  it('should call _log with SUCCESS level and message', () => {
    const message = 'Success message'
    logger.success(message)
    expect(mockLog).toHaveBeenCalledWith(levels.SUCCESS, message)
  })

  it('should call _log with TRACE level and message', () => {
    const message = 'Trace message'
    logger.trace(message)
    expect(mockLog).toHaveBeenCalledWith(levels.TRACE, message)
  })

  it('should call _log with INFO level and message', () => {
    const message = 'Info message'
    logger.info(message)
    expect(mockLog).toHaveBeenCalledWith(levels.INFO, message)
  })

  it('should call _log with WARNING level and message', () => {
    const message = 'Warning message'
    logger.warn(message)
    expect(mockLog).toHaveBeenCalledWith(levels.WARNING, message)
  })

  it('should call _log with ERROR level and message', () => {
    const message = 'Error message'
    logger.error(message)
    expect(mockLog).toHaveBeenCalledWith(levels.ERROR, message)
  })
})
