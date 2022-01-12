const _velocidade = Symbol('velocidade') // private
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(velocidade) {
        console.log('SETTER')
        if(typeof velocidade !== 'number') return
        if(velocidade >= 100 || velocidade <= 0) return
        this[_velocidade] = velocidade
    }

    get velocidade() {
        console.log('GETTER')
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade] ++
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade] --
    }
}

const c1 = new Carro('HB20')
c1.velocidade = 57
console.log(c1.velocidade)