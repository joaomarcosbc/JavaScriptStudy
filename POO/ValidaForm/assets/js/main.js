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

            if(campo.classList.contains('usuario')){
                const usuario = campo.value
                if(!this.validaUsuario(usuario)) {
                    this.mostraErro(campo)
                    valid = false
                }
                    
            }
            if(campo.classList.contains('senha')){
                const senha = campo.value
                if(!this.validaUsuario(senha)) {
                    this.mostraErro(campo)
                    valid = false
                }
                    
            }

        }
    }

    validaUsuario(campoUsuario) {
        if (campoUsuario.length < 3 || campoUsuario.length > 20) {
            return false
        }
        else if(!campoUsuario.match(/[a-zA-Z0-9]+$/g)) {
            return false
        }
        else {
            return true
        }
    }

    validaCPF(campoCPF) {
        const cpf = new ValidaCPF(campoCPF.value)
        return cpf.valida()
    }

    validaSenha(campoSenha) {
        if (campoSenha.length < 3 || campoSenha.length > 20) {
            return false
        }
    }
        

    mostraErro(campo) {
        campo.classList.add('error-text')
    }

}

const valida = new Validation();