/**
 * Message
 * @class
 * @classdesc a message
 * @param {string} type - the message type
 * @param {string} sender - the message sender, the bot or the user
 * @param {string|number} botId - the bot id
 * @param {string|number} userId - the user id
 * @param {*} value - the message value
 * @param {object} options - the message options
 */
class Message {
  constructor(type, sender, botId, userId, value, options) {
    this.type = type;
    this.sender = sender;
    this.bot = botId;
    this.user = userId;
    this.value = value;
    this.options = options;
  }

  /**
   * Convert a message to json
   * @return {object} the json message
   */
  toJson() {
    if (this.options !== undefined) {
      return {
        type: this.type,
        sender: this.sender,
        bot: this.bot,
        user: this.user,
        payload: {
          value: this.value,
          options: this.options,
        },
      };
    }
    return {
      type: this.type,
      sender: this.sender,
      bot: this.bot,
      user: this.user,
      payload: {
        value: this.value,
      },
    };
  }
}

module.exports = Message;
