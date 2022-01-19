class Validation {
    constructor() {
        this.formulario = document.querySelector('.formulario')

        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            const elemento = e
            this.handleSubmit(elemento)
        })
    }

    handleSubmit(elemento) {
        elemento.preventDefault()
        const camposValidos = this.camposValidos()
    }

    camposValidos() {
        let valid = true
        for (let campo of this.formulario.querySelectorAll('input[type="text"], input[type="password"]')) {
            if(!campo.value) {
                this.mostraErro(campo)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) {
                    this.mostraErro(campo)
                    valid = false
                }
            }

        }
    }

    validaCPF(campoCPF) {
        const cpf = new ValidaCPF(campoCPF.value)
        return cpf.valida()
    }

    mostraErro(campo) {
        campo.classList.add('error-text')
    }

}

const valida = new Validation();