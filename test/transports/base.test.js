import { Transport } from './base'

describe('transport', () => {
  const mockConfig = {
    format: jest.fn(value => JSON.stringify(value)),
    template: jest.fn(info => info.message),
    level: 'info',
  }

  let transport

  beforeEach(() => {
    transport = new Transport(mockConfig)
  })

  it('should create a new Transport instance', () => {
    expect(transport).toBeInstanceOf(Transport)
  })

  it('should call the format function with the correct value', () => {
    const value = { message: 'test' }
    transport.format(value)
    expect(mockConfig.format).toHaveBeenCalledWith(value)
  })

  it('should call the template function with the correct info', () => {
    const info = { message: 'test' }
    transport.getMessage(info)
    expect(mockConfig.template).toHaveBeenCalledWith(info)
  })

  it('should return the correct message', () => {
    const logObject = { message: 'test', level: 'info' }
    const message = transport.log(logObject)
    expect(message).toBe(logObject.message)
  })

  // Todo: Refaire un passage sur la qualité des tests
})
