function notAllowed () {
    window.location.href = 'https://augustpeter.github.io/AnimeReview/'
}

if(localStorage.getItem('token') == null){
    errorAlertPage()
    setTimeout(notAllowed, 2000)
}

function exit() {
    localStorage.removeItem('token')
    setTimeout(notAllowed, 300)
}


const burgerMenu = document.querySelector('.burger')
const ul = document.querySelector('ul')
const modal = document.querySelector('.modal')
const perfil = document.querySelector('#perfil')
const closeModal = document.querySelector('.close')
const lis = document.querySelectorAll('li')
const header = document.querySelector('header')
const user = document.querySelector('.user')
const textArea = document.querySelector('textarea')
const loginButton = document.getElementById('button')
const registerButton = document.querySelector('.button')
const icon = document.querySelector('.icon')
const exitButton = document.querySelector('#exit')

// perfil.addEventListener('click', () =>{
//     modal.classList.add('active')
// })
closeModal.addEventListener('click',() =>{
    modal.classList.remove('active')
})


burgerMenu.addEventListener('click',() =>{
    header.classList.toggle('active')
    ul.classList.toggle('active')

    for (const li of lis) {
        li.classList.toggle('active');
}
})


exitButton.addEventListener('click', exit)

// loginButton.addEventListener('click',() => {
//     window.location.href="https://augustpeter.github.io/AnimeReview/pages/home.html";  
// })
// registerButton.addEventListener('click',() => {
//     window.location.href="https://augustpeter.github.io/AnimeReview/index.html";  
// })
