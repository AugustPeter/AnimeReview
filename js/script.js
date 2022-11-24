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




perfil.addEventListener('click', () =>{
    modal.classList.add('active')
})
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

textArea.addEventListener('keyup', e =>{
    let scHeight = e.target.scrollHeight
    textArea.style.height = `${auto}px`
    textArea.style.height = `${scHeight}px`

})

loginButton.addEventListener('click',() => {
    window.location.href="https://augustpeter.github.io/AnimeReview/pages/home.html";  
})
registerButton.addEventListener('click',() => {
    window.location.href="https://augustpeter.github.io/AnimeReview/index.html";  
})
