const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const pageRoute = require('./routes/pageRoute');
const messageController = require('./controllers/messageController');
const ticketController = require('./controllers/ticketController');


// MongoDB'ye bağlan
// mongoose.connect('mongodb://localhost/mesajlar', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/festava')
  .then(() => console.log('Connected!'));

// Veritabanı bağlantısı kontrolü
// db.on('error', console.error.bind(console, 'Veritabanı bağlantı hatası:'));
// db.once('open', function() {
//     console.log('Veritabanı bağlantısı başarılı.');
// });

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// EJS TEMPLETE ENGINE
app.set("view engine", 'ejs');

// STATIC FILES MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method', {
    methods: ['POST', 'GET'],
  }))

// ROUTES
app.use('/', pageRoute);
app.use('/ticket', pageRoute);
app.post('/', messageController.createMessage);
app.post('/ticket', ticketController.createTicket);

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost/${PORT}`)
})