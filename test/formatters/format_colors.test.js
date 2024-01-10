import { colorize_by_level, format_colors } from '../../src/index.js'

describe('format_colors', () => {
  it('should return a function', () => {
    const formatter = format_colors()
    expect(typeof formatter).toBe('function')
  })

  it('should return colorized message', () => {
    const formatter = format_colors()
    const message = 'Test message'
    const context = { level: 'success' }
    expect(formatter(message, context)).toBe(`\u001B[32m${message}\u001B[32m`)
  })
})

describe('colorize_by_level', () => {
  it('should return colorized message based on level', () => {
    const message = 'Test message'
    expect(colorize_by_level('success', message)).toBe(`\u001B[32m${message}\u001B[32m`)
    expect(colorize_by_level('warn', message)).toBe(`\u001B[33m${message}\u001B[0m`)
    expect(colorize_by_level('info', message)).toBe(message)
    expect(colorize_by_level('error', message)).toBe(`\u001B[31m${message}\u001B[31m`)
    expect(colorize_by_level('debug', message)).toBe(`\u001B[34m${message}\u001B[0m`)
    expect(colorize_by_level('trace', message)).toBe(`\u001B[34m${message}\u001B[0m`)
    expect(colorize_by_level('unknown', message)).toBe(message)
  })
})
