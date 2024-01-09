class Message{
  /**
   * represent a message
   *@constructor
   *@param {string} message - The content of the message.
   *@param {string} level -The status of the message, being 'success', 'info', 'warn' or 'error'
   *@param {Date} timestamp -The timestamp of the message
   *param {string} color -The color of the message, depending on the level  
   */
  
  constructor(message, level, timestamp){//, color){
    this.message = message;
    this.level = level;
    this.timestamp = timestamp;
    //this.color = color;
  }
  

  /**
   * 
   * @returns -The message as a string with the timestamp, the status and the content of the message
   */
  toString(){
    return "["+timestamp+"]"+ level + message
  }

}