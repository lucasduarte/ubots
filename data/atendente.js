const Atendimento = require('./atendimento');

class Atendente {
    constructor(area) {
        this.atendimento = new Atendimento(area)
    }
}

module.exports = Atendente;