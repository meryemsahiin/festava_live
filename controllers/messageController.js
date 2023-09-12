const Message = require('../models/Messages');

exports.createMessage = async (req, res) => {
    try {
      const { name, email, company, description } = req.body;
      await Message.create({ name, email, company, description });
      res.redirect('/');
    } catch (err) {
      console.error("Mesaj oluşturulurken hata oluştu:", err);
      res.status(500).send("Sunucu hatası");
    }
  };
