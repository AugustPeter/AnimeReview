const registerBox = document.querySelector('.register-box')
const loginBox = document.querySelector('.center-wrapper')
const signUp = document.getElementById('signup')
const signIn = document.getElementById('signin')



signUp.addEventListener('click', () =>{
    registerBox.classList.add('active')
    loginBox.classList.remove('active')
})

signIn.addEventListener('click', () =>{
    registerBox.classList.remove('active')
    loginBox.classList.add('active')
})
