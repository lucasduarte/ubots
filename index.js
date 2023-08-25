const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const Atendente = require('./data/atendente');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

var atendimento = {
    cartoes: new Atendente('cartoes'),
    emprestimos: new Atendente('emprestimos'),
    outros: new Atendente('outros')
}

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('home', {atendimentos: atendimento});
});

app.get('/atendimentos', (req, res) => {
    res.send(atendimento);
});

app.post('/inicia_atendimento', (req, res) => {
    const cliente = req.query.cliente;
    const area = req.query.area;

    if (area === 'cartoes') {
        atendimento.cartoes.atendimento.iniciaAtendimento(cliente);
    } else if (area === 'emprestimos') {
        atendimento.emprestimos.atendimento.iniciaAtendimento(cliente);
    } else {
        atendimento.outros.atendimento.iniciaAtendimento(cliente);
    }

    res.send({success: true})
});

app.post('/finaliza_atendimento', (req, res) => {
    const cliente = req.query.cliente;
    const area = req.query.area;

    if (area === 'cartoes') {
        atendimento.cartoes.atendimento.finalizaAtendimento(cliente);
    } else if (area === 'emprestimos') {
        atendimento.emprestimos.atendimento.finalizaAtendimento(cliente);
    } else {
        atendimento.outros.atendimento.finalizaAtendimento(cliente);
    }

    res.send({success: true})
});

app.listen(3001, () => {
    console.log('running o port 3001');
});

