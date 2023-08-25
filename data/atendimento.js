class Atendimento {
    constructor(area) {
        this.area = area;
        this.emAtendimento = [];
        this.filaAtendimento = [];
    }

    iniciaAtendimento(cliente) {
        if (this.emAtendimento.length === 3) {
            this.filaAtendimento.push(cliente);
        } else {
            this.emAtendimento.push(cliente);
        }
    }

    finalizaAtendimento(cliente) {
        this.emAtendimento = this.emAtendimento.filter((value, index, arr) => {
            return value != cliente;
        });

        if(this.filaAtendimento.length > 0) {
            this.emAtendimento.push(this.filaAtendimento.shift());
        }        
    }

    getFilaAtendimento() {
        return filaAtendimento;
    }
}

module.exports = Atendimento;