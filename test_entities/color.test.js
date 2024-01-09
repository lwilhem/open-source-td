import colorMessage from '../src/entities/color.js';

describe('colorMessage()',() => {
  it('should return "#FFFFFF" if the data is not a level in levels{}',() =>{
    const data = 'unspecified';
    expect(colorMessage(data)).toBe('#FFFFFF');
  });

  it('should return "#FF0000" if the data is "error"', ()=>{
    const data = 'error';
    expect(colorMessage(data)).toBe("#FF0000")
  });
});