let reviewDit = JSON.parse(localStorage.getItem('reviewEdit'))
if(reviewDit != null){
    const imageFile = document.getElementById('url')
    const reviewTittle = document.getElementById('tittle')
    const reviewTextArea = document.getElementById('textArea')

    imageFile.value = reviewDit.reviewSrc
    reviewTittle.value = reviewDit.reviewTit
    reviewTextArea.value = reviewDit.reviewArea

}else console.log("nao tem coisa")