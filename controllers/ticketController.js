const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
    try {
        const {name, email, phone, ticketType, numberOfTickets, additionalRequest} = req.body;
        await Ticket.create({name, email, phone, ticketType, numberOfTickets, additionalRequest});
        res.redirect('/');
    } catch (err) {
        console.error("Bilet oluşturulurken hata oluştu:", err);
        res.status(500).send("Sunucu hatası");
      }
};