const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: String,
    email: String,
    company: String,
    description: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
  })

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message