function alert () {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cadastrado com sucesso',
        showConfirmButton: false,
        timer: 2000,
        background: '#22242b',
        color: '#00a8cc',
        // iconColor: 'green'
    })
}

function errorAlert () {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Usuário e/ou senha inválido',
        showConfirmButton: false,
        timer: 1500,
        background: '#22242b',
        color: '#00a8cc',
        // iconColor: 'green'
    })
}
function errorAlertPage () {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Você precisa logar para entrar',
        showConfirmButton: false,
        // timer: 1500,
        background: '#22242b',
        color: '#00a8cc',
        // iconColor: 'green'
    })
}

// errorAlert()