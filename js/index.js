

const registerBox = document.querySelector('.register-box')
const loginBox = document.querySelector('.center-wrapper')
const signUp = document.getElementById('signup')
const signIn = document.getElementById('signin')
const icon = document.querySelector('.icon')
const icon2 = document.querySelector('.icon2')
const icon3 = document.querySelector('.icon3')

const registerName = document.querySelector('#registerName')
const registerPass = document.querySelector('#registerPass')
const confirmPass = document.querySelector('#confirmPass')

const registerButton = document.querySelector('#registerButton')

const name = document.querySelector('#user')
const password = document.querySelector('#password')


//signup
function register(){

    let user = JSON.parse(localStorage.getItem('user') ?? '[]')

    user.push({
        name: registerName.value,
        password: registerPass.value
    })
    localStorage.setItem('user', JSON.stringify(user))

    clearForms()
    backToLogin()
    alert()
}

//signin
function login (){
    event.preventDefault()

    let user = []
    
    let userValid ={
        name: '',
        password: ''
    }
    user = JSON.parse(localStorage.getItem('user'))
    
    user.forEach((item) => {
        if (name.value == item.name && password.value == item.password){
            userValid ={
                name: item.name,
                password: item.password
            }
        }
    })
    if(name.value == userValid.name && password.value == userValid.password){
        window.location.href = '../pages/home.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
    }else{
        errorAlert()
        name.focus()
    }
}

//validação de campos
registerName.addEventListener('keyup', () =>{
    if(registerName.value.length <= 3){
        registerName.setAttribute('class', 'error')
    }else{
        registerName.setAttribute('class', 'passed')
    }
})

registerPass.addEventListener('keyup', () =>{
    if(registerPass.value.length <= 3  ){
        registerPass.setAttribute('class', 'error')
    }else{
        registerPass.setAttribute('class', 'passed')
    }
})

confirmPass.addEventListener('keyup', () =>{
    if(confirmPass.value != registerPass.value ){
        confirmPass.setAttribute('class', 'error')
    }else{
        confirmPass.setAttribute('class', 'passed')
    }
})


//UMA HORA AJEITAR ISSO AQUI, GRANDAO
icon.addEventListener('click', () =>{
    if(registerPass.type === 'password'){
        registerPass.type = 'text'
    }else{
        registerPass.type = 'password'
    } 
})
icon2.addEventListener('click', () =>{
    if(confirmPass.type === 'password'){
        confirmPass.type = 'text'
    }else{
        confirmPass.type = 'password'
    } 
})
//do login
icon3.addEventListener('click', () =>{
    if(password.type === 'password'){
        password.type = 'text'
    }else{
        password.type = 'password'
    } 
})
//------------------------------------------------------------

//funçoes pequenas

function clearForms(){
    registerName.value = ''
    registerPass.value = ''
    confirmPass.value = ''

    registerName.removeAttribute('class', 'passed')
    registerPass.removeAttribute('class', 'passed')
    confirmPass.removeAttribute('class', 'passed')
        
}
function backToLogin(){
    
        registerBox.classList.remove('active')
        loginBox.classList.add('active')
    
    
}

//events
signIn.addEventListener('click', () =>{
    registerBox.classList.remove('active')
    loginBox.classList.add('active')

})
signUp.addEventListener('click', () =>{
    registerBox.classList.add('active')
    loginBox.classList.remove('active')
})

registerButton.addEventListener('click', (event) =>{
    event.preventDefault()
    register()
})

