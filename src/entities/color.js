const red = "\u001B[31m";
const green = "\u001B[32m";
const yellow = "\u001B[33m";
const blue = "\u001B[34m";
const white = "\u001B[37m";
const reset = "\u001B[0m";

/**
 * @param {String} level -The level of the message, being either 'success', 'info', 'warn' or 'error'
 * @param {String} message -The message converted to a string format
 * @returns {String} -The message colored differently depending on the level parameter
 */
export function colorByLevel(level,message){
  switch(level){
    case 'success':
      return green + message + reset;
    case 'info':
      return blue + message + reset;
    case 'warn':
      return yellow + message + reset;
    case 'error':
      return red + message + reset;
    default:
      return white + message + reset;
    }
}