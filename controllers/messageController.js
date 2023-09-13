const Message = require('../models/Messages');
const nodemailer = require("nodemailer");
require('dotenv').config();

const gmail = process.env.EMAIL_ADDRESS;
const password = process.env.EMAIL_PASSWORD;

exports.createMessage = async (req, res) => {
    try {
      const { name, email, company, description } = req.body;
      await Message.create({ name, email, company, description });

      const transporter = nodemailer.createTransport({
        service: 'Gmail', // E-posta sağlayıcınıza göre değiştirin
        auth: {
            user: gmail, // E-posta adresiniz
            pass: password // E-posta şifreniz
        }
    });

    const mailOptions = {
        from: 'meerymsahin@gmail.com',
        to: gmail, // Alıcı e-posta adresi
        subject: 'Yeni Bir E-Posta Geldi',
        text: `Gönderen: ${email}\n\nMesaj: ${description}`
    };

    await transporter.sendMail(mailOptions);


      res.redirect('/');
    } catch (err) {
      console.error("Mesaj oluşturulurken hata oluştu:", err);
      res.status(500).send("Sunucu hatası");
    }
  };



  