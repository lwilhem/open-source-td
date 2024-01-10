import { levels } from '../../src/index.js'

describe('levels', () => {
  it('should have the correct properties and values', () => {
    expect(levels).toEqual({
      TRACE: 'trace',
      INFO: 'info',
      DEBUG: 'debug',
      SUCCESS: 'success',
      WARNING: 'warn',
      ERROR: 'error',
    })
  })
})
