const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    ticketType: {
        type: String,
        enum: ["Early Bird", "Standard"], // İsterseniz farklı tipler ekleyebilirsiniz
        required: true
    },
    numberOfTickets: {
        type: Number,
        required: true
    },
    additionalRequest: String // İsteğe bağlı alan
}, { timestamps: true });

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
