import Logger from '../src/index.js'

describe('test logger class', () => {
  it('should initialieze a logger insntance', () => {
    const logger = new Logger()
    expect(logger).toBeInstanceOf(Logger)
  })
})

describe('test class method', () => {})
