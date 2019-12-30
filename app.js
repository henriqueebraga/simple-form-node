let express = require('express');
let bodyParser = require('body-parser');
let app = express();

var urlencodeParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact', {qs: req.query});
});
//urlencodeParser middleware to access data in the body of the request
app.post('/contact', urlencodeParser, (req, res) => {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', (req, res) => {
    let data = {age:  26, job:' Developer', hobbies: ['playing', 'cooking', 'skiing']};
    res.render('profile', {person: req.params.name, data:data});
})

app.listen(2000);