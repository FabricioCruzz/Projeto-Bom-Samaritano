let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

const divComentarios = document.getElementById('container')
const button = document.getElementById('button')

const saveButtonEvent = event => {
    const textarea = document.getElementById('testemunho')

    const p = document.createElement('p')
    const contentParagraph = document.createTextNode(`"${textarea.value}"`)

    p.appendChild(contentParagraph)

    divComentarios.appendChild(p)

    clearFields(textarea)
}

function clearFields(field) {
    field.value = ''
}

function start(){
    setInterval(() => {
        nextImage()   
    }, time)

    button.onclick = saveButtonEvent
}

function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++
    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
    
    images[currentImageIndex].classList.add("selected")
}


window.addEventListener("load", start)