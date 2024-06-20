const express = require ('express');
const app = express ();
const PORT = 4000
const hbs = require('express-handlebars');
const path = require('path');

app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine','hbs');

app.use(express.static(path.join(__dirname + '/public')))

const indexRoute = require('./routes/indexRoute');

app.use('', indexRoute);
 
app.listen(PORT, () => {
    console.log('app is running')
})