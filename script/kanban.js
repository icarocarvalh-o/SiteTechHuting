var cartoes = document.querySelectorAll('.cartoes');
var dropzones = document.querySelectorAll('.dropzone')

cartoes.forEach(function(cartoes) {
    cartoes.addEventListener('dragstart', dragstart)
    cartoes.addEventListener('drag', drag)
    cartoes.addEventListener('dragend', dragend)
})

function dragstart() {

    this.classList.add('is-dragging')
}

function drag() {
    
}

function dragend() {

    this.classList.remove('is-dragging')
}


dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
   
}

function dragover() {

    
    var arrastandoCartao = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(arrastandoCartao)
}

function dragleave() {

}

function drop() {

    
}