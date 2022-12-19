

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

    let userValid = []
    userValid = JSON.parse(localStorage.getItem('userValid'))

    modalName.value = userValid.name
    modalPass.value = userValid.password

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


