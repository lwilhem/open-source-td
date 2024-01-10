import { levels, prepare_message } from '../../src/index.js'

describe('prepare_message', () => {
  it('should return an object with the same properties as the input', () => {
    const input = {
      message: 'Test message',
      level: levels.INFO,
      timestamp: new Date(),
    }

    const output = prepare_message(input)

    expect(output).toEqual(input)
  })
})
