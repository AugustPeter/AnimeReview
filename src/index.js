//Sorteio e apply do background
function videoBackground (){

    const videosBg = [
        'https://cdn.discordapp.com/attachments/502625527572725762/1054558517689864282/anime-anime-girl_4.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118901008990278/QxOSE6.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118888624128020/3s326y.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118850154102810/SEIBkz.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118865953783818/EEaCv8.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118873025118228/Ll75aq.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118904322490408/f68lbu.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118860651659314/OZJVKJ.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118862937292822/kwRK39.mp4',
        'https://cdn.discordapp.com/attachments/792449672480292865/821118898790465586/w64le3.mp4'
    ]
    
    const video = document.querySelector('#myVideo')
    const bg = Math.floor(Math.random() * videosBg.length);
    video.innerHTML = `<source src="${videosBg[bg]}" type="video/mp4">`;
}

function register(){

    function verificar(){

    let radio = document.querySelectorAll("input[name^='radio']:checked");     
    
    if (radio.length === 1) {
    return radio[0].value;      
    }

    return false;
}

    const registerName = document.querySelector('#registerName')
    const registerPass = document.querySelector('#registerPass')
    const confirmPass = document.querySelector('#confirmPass')
    
    if(registerName.value.length <= 3 || registerPass.value.length <= 3 || confirmPass.value != registerPass.value || verificar() == false ){
        errorAlertCad()
        return
    }else{
        let radioValue = document.querySelector("input[name='radio']:checked");     
        
        let user = JSON.parse(localStorage.getItem('user') ?? '[]')
        
        user.push({ 
            name: registerName.value,
            password: registerPass.value,
            userType: radioValue.value
        })
        localStorage.setItem('user', JSON.stringify(user))

        clearForms()
        backToLogin()
        alert()
        }

}

//signin
function login (){
    event.preventDefault()

    const name = document.querySelector('#user')
    const password = document.querySelector('#password')

    let user = []
    
    let userValid ={
        name: '',
        password: '',
        userType: ''
    }
    user = JSON.parse(localStorage.getItem('user'))
    if(user == null){
        errorNoUser()
        return
    }else{
    user.forEach((item) => {
        if (name.value == item.name && password.value == item.password){
            userValid ={
                name: item.name,
                password: item.password,
                userType: item.userType
            }
        }
    })}
    
    if(name.value == userValid.name && password.value == userValid.password){
        window.location.href = 'https://augustpeter.github.io/AnimeReview/pages/home.html'
        
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        localStorage.removeItem('userValid')
        localStorage.setItem('userValid',JSON.stringify(userValid))
        
    }else{
        errorAlert()
        name.focus()
    }
}



//valida????o de campos

function registerNameKeyUp () {
    const registerName = document.querySelector('#registerName')

    if(registerName.value.length <= 3){
        registerName.setAttribute('class', 'error')
    }else{
        registerName.setAttribute('class', 'passed')
    }
}

function registerPassKeyUp () {

    const registerPass = document.querySelector('#registerPass')

    if(registerPass.value.length <= 3  ){
        registerPass.setAttribute('class', 'error')

    }else{
        registerPass.setAttribute('class', 'passed')
    }
}

function confirmPassKeyUp () {
    const confirmPass = document.querySelector('#confirmPass')
    const registerPass = document.querySelector('#registerPass')

    if(confirmPass.value != registerPass.value ){
        confirmPass.setAttribute('class', 'error')
    }else{
        confirmPass.setAttribute('class', 'passed')
    }
}

//UMA HORA AJEITAR ISSO AQUI, GRANDAO

function icon1 (){
    const registerPass = document.querySelector('#registerPass')

    if(registerPass.type === 'password'){
        registerPass.type = 'text'
    }else{
        registerPass.type = 'password'
    } 
} 
function icon2 (){
    const confirmPass = document.querySelector('#confirmPass')

    if(confirmPass.type === 'password'){
        confirmPass.type = 'text'
    }else{
        confirmPass.type = 'password'
    } 
} 
//do login
function icon3 (){
    const password = document.querySelector('#password')

    if(password.type === 'password'){
        password.type = 'text'
    }else{
        password.type = 'password'
    } 
} 
//------------------------------------------------------------

//fun??oes pequenas

function clearForms(){
    const registerName = document.querySelector('#registerName')
    const registerPass = document.querySelector('#registerPass')
    const confirmPass = document.querySelector('#confirmPass')
    let radioValue = document.querySelector("input[name='radio']:checked");     

    registerName.value = ''
    registerPass.value = ''
    confirmPass.value = ''
    
    radioValue.checked = false
    registerName.removeAttribute('class', 'passed')
    registerPass.removeAttribute('class', 'passed')
    confirmPass.removeAttribute('class', 'passed')
}
function backToLogin(){
    const registerBox = document.querySelector('.register-box')
    const loginBox = document.querySelector('.center-wrapper')

    registerBox.classList.remove('active')
    loginBox.classList.add('active')
}

function seeBg(){
    const registerBox = document.querySelector('.register-box')
    const loginBox = document.querySelector('.center-wrapper')
    
    if(loginBox.classList.contains('active') ){
        loginBox.classList.toggle('active')
    }else if(!loginBox.classList.contains('active') && !registerBox.classList.contains('active')){
        loginBox.classList.toggle('active')
    }else if(registerBox.classList.contains('active')){
        registerBox.classList.toggle('active')
    }
}

//events

function buttomSignIn () {
    const registerBox = document.querySelector('.register-box')
    const loginBox = document.querySelector('.center-wrapper')

    registerBox.classList.remove('active')
    loginBox.classList.add('active')
}

function buttomSignUp () {
    const registerBox = document.querySelector('.register-box')
    const loginBox = document.querySelector('.center-wrapper')

    registerBox.classList.add('active')
    loginBox.classList.remove('active')
}

function buttomRegister () {
    event.preventDefault()
    register()
}
