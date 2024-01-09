/**
 * @class represent a message
 */
class Message{
  /**
   *@constructor
   *@param {string} message - The content of the message.
   *@param {string} level -The status of the message, being 'success', 'info', 'warn' or 'error'
   *@param {Date} timestamp -The timestamp of the message
   */
  
  constructor(message, level, timestamp){
    this.message = message;
    this.level = level;
    this.timestamp = timestamp;
  }
  

  /**
   * @returns -The message as a string with the timestamp, the status and the content of the message
   */
  messageToString(){
    return "["+timestamp.toString()+"]"+ level + message
  }


  /**
   * 
   * @returns message content
   */
  getMessage(){
    return this.message;
  }

  /**
   * 
   * @returns status of the message
   */
  getLevel(){
    return this.level;
  }

  /**
   * 
   * @returns timestamp of the message
   */
  getTimestamp(){
    return this.timestamp;
}


}