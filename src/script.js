

function notAllowed () {
    window.location.href = 'https://augustpeter.github.io/AnimeReview/'
}
function onEnter(){
    // if(localStorage.getItem('token') == null){
//     errorAlertPage()
//     setTimeout(notAllowed, 2000)
// }
if(localStorage.getItem('token') != null){
    putReview()
    perfilData()
}

}
function onEnterWrite(){
    if(localStorage.getItem('token') != null){
        perfilData()
    }
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
    const writeLink = document.querySelector('#writeLink')

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
        writeLink.classList.add('disability')
    }
}
function icon4 (){
    const modalPass = document.querySelector('#modalPass')

    if(modalPass.type === 'password'){
        modalPass.type = 'text'
    }else{
        modalPass.type = 'password'
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

//write pag
function getReview(){
    const imageFile = document.getElementById('url')
    const reviewTittle = document.getElementById('tittle')
    const reviewTextArea = document.getElementById('textArea')
    
    if(imageFile.value == '' || reviewTextArea.value == '' || reviewTittle.value == ''){
        errorWrite()
        return
    }else{
        let review = JSON.parse(localStorage.getItem('review') ?? '[]')

        review.push({ 
            url: imageFile.value,
            reviewTittle: reviewTittle.value,
            reviewTextArea: reviewTextArea.value
        })
        localStorage.setItem('review', JSON.stringify(review))
    }
}
function clearReviewForms(){
    const imageFile = document.getElementById('url')
    const reviewTittle = document.getElementById('tittle')
    const reviewTextArea = document.getElementById('textArea')

    imageFile.value = ''
    reviewTittle.value = ''
    reviewTextArea.value = ''
}
function publishButton(){
    event.preventDefault
    
    getReview()
    clearReviewForms()
    backToHome()
    localStorage.removeItem('reviewEdit')
}

function putReview(){
    if(localStorage.getItem('review') != null){
        const imageContainer = document.getElementById('imageContainer')
        
        let reviewPush = JSON.parse(localStorage.getItem('review'))
        let k = 0
        reviewPush.forEach((item) => {
            
            imageContainer.innerHTML += `
                <div class="content" onload="perfilData()">
                    <div class="image-box">
                        <picture>
                        <source media="">
                        <img class="cc" src="${item.url}" alt="thumbnail">
                        </picture>
                    </div>
                
                    <div class="legenda">
                        <h3 class="hj "id="${k++}">${item.reviewTittle}</h3>
                    </div>
                    <div id="imageIcon" class="imageIcon" >
                        <span class="imageIconItem " onclick="editReview(event)">
                            <i class="fa-solid fa-pencil "></i>
                        </span>
                        <span class="imageIconItem x" onclick="deleteItem(event)">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                        <div class="disability a">${item.reviewTextArea}</div>
                    </div>
                </div>
            `
        })
    }else return
}

function deleteItem(event){
    let reviewPush = JSON.parse(localStorage.getItem('review'))
    let target =event.currentTarget.parentNode.parentNode
    let h3 = target.querySelector('.hj')
    let h4 = h3.id
    
    reviewPush.splice(h4,1)
    
    localStorage.setItem("review",JSON.stringify(reviewPush))
    location.reload();

    // let deleteTittle = document.getElementById('h3')
}
function editReview(event){
    let reviewPush = JSON.parse(localStorage.getItem('review'))
    let target =event.currentTarget.parentNode.parentNode
    let h3 = target.querySelector('.cc')

    let reviewSrc = h3.src
    let reviewTit= target.querySelector('.hj')
    let reviewArea= target.querySelector('.a')
    
    let reviewEdit = {
        reviewSrc: h3.src,
        reviewTit: target.querySelector('.hj').textContent,
        reviewArea: target.querySelector('.a').textContent
    }

    localStorage.setItem('reviewEdit',JSON.stringify(reviewEdit))

    let target2 =event.currentTarget.parentNode.parentNode
    let h32 = target2.querySelector('.hj')
    let h4 = h32.id

    reviewPush.splice(h4,1)

    localStorage.setItem("review",JSON.stringify(reviewPush))
    writePag()
}

// console.log(reviewPush[2].reviewTittle)
function writePag(){
    window.location.href = 'https://augustpeter.github.io/AnimeReview/pages/write.html'
}
function backToHome(){
    // setTimeout(location.reload(), 4500)
    window.location.href = 'https://augustpeter.github.io/AnimeReview/pages/home.html'
}