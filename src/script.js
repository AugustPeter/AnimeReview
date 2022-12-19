

function notAllowed () {
    window.location.href = 'https://augustpeter.github.io/AnimeReview/'
}

// if(localStorage.getItem('token') == null){
//     errorAlertPage()
//     setTimeout(notAllowed, 2000)
// }
if(localStorage.getItem('token') != null){
    perfilData()
}
function exit() {
    localStorage.removeItem('token')
    setTimeout(notAllowed, 300)
}

function perfilFunc(){
    const modal = document.querySelector('.modal')
    modal.classList.add('active')
}

function perfilData (){
    const modalName = document.querySelector('#modalName')
    const modalPass = document.querySelector('#modalPass')
    const modalTittle = document.querySelector('#modalTittle')
    const modalP = document.querySelector('#modalP')
    const imageIcon = document.querySelectorAll('#imageIcon')
    const imageIconItem = document.querySelectorAll('.x')
    let userValid = []
    userValid = JSON.parse(localStorage.getItem('userValid'))

    modalName.value = userValid.name
    modalPass.value = userValid.password

    if(userValid.userType == 1){
        modalTittle.textContent = 'Administrador'
        modalP.textContent = 'Como administrator vc pode ler, criar, editar e excluir reviews '

        for(const icons of imageIcon){
            icons.classList.add('active')
        }
    }else if(userValid.userType == 2){
        modalTittle.textContent = 'Escritor'
        modalP.textContent = 'Como escritor vc pode ler, criar reviews e deletar'
        
        for(const icons of imageIcon){
            icons.classList.add('active')
        }
        for(const icons2 of imageIconItem){
            icons2.style.display = 'none'
        }
    }else{
        modalTittle.textContent = 'Leitor'
        modalP.textContent = 'Leitores apenas podem ler reviews '
    }
}

function perfilClose () {
    const modal = document.querySelector('.modal')
    modal.classList.remove('active')
}

function burgerMenu (){
    const header = document.querySelector('header')
    const ul = document.querySelector('ul')
    const lis = document.querySelectorAll('li')

    header.classList.toggle('active')
    ul.classList.toggle('active')

    for (const li of lis) {
        li.classList.toggle('active');
}
}


