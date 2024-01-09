import colorByLevel from '../src/entities/color.js';

describe('colorByLevel()',() => {
  it('should return a white message if the data is not a level in levels{}',() =>{
    const data = 'unspecified';
    const message = 'The status of this message is not supported.'
    const color = (colorByLevel(data, message)).slice(0,10);
    expect(color).toBe("\u001B[37m");
  });

  it('should return a red message if the data is "error"', ()=>{
    const level = 'error';
    const message = "This is an error."
    const color = (colorByLevel(data, message)).slice(0,10);
    expect(color).toBe("\u001B[31m")
  });
});