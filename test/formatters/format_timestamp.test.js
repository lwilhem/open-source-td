import { format_timestamp } from '../../src/index.js'

describe('format_timestamp', () => {
  it('should return a function', () => {
    const formatter = format_timestamp()
    expect(typeof formatter).toBe('function')
  })

  it('should return timestamp-formatted message', () => {
    const formatter = format_timestamp()
    const message = 'Test message'
    const context = { timestamp: new Date() }
    const timestamp = context.timestamp.toISOString().replace(/T/, ' ').replace(/\..+/, '')
    expect(formatter(message, context)).toBe(`${timestamp}:  ${message}`)
  })
})
