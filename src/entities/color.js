/**
 * 
 * @param {String} level -The level of the message, being either 'success', 'info', 'warn' or 'error'
 * @returns {String} -A color corresponding to the level
 */

export function colorMessage(level){
  switch(level){
    case 'success':
      return "#00FF00";
    case 'info':
      return "#0000FF";
    case 'warn':
      return "FFFF00";
    case 'error':
      return "FF0000";
    default:
      return "#FFFFFF";
    }
}