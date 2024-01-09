import message from '../src/entities/message.js';

describe('message()', () => {

})
it('should create a valid Message', () => {
  const timestamp = new Date();
  const obj = new Message('This is the content', 'info', timestamp);
  expect(obj.a).toBe('This is the content');
  expect(obj.b).toBe('info');
  expect(obj.c).toBe(timestamp);
  expect(message).toBeInstanceOf(Message);
});