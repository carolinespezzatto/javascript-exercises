let btnOne = document.querySelector('#btn-one')
let containerOne = document.querySelector('.container-one')

btnOne.addEventListener('click',function() {
    if (containerOne.style.display === 'block') {
        containerOne.style.display = 'none'
        btnOne.src = "arrow.svg"
    } else {
        containerOne.style.display = 'block'
        btnOne.src = "cancel.svg"
    } 
})

let btnTwo = document.querySelector('#btn-two')
let containerTwo = document.querySelector('.container-two')

btnTwo.addEventListener('click',function() {
    if (containerTwo.style.display === 'block') {
        containerTwo.style.display = 'none'
        btnTwo.src = "arrow.svg"       
    } else {
        containerTwo.style.display = 'block'
        btnTwo.src = "cancel.svg"
    } 
})

let btnThree = document.querySelector('#btn-three')
let containerThree = document.querySelector('.container-three')

btnThree.addEventListener('click',function() {
    if (containerThree.style.display === 'block') {
        containerThree.style.display = 'none'
        btnThree.src = "arrow.svg"
    } else {
        containerThree.style.display = 'block'
        btnThree.src = "cancel.svg"
    } 
})
     
let btnFour = document.querySelector('#btn-four')
let containerFour = document.querySelector('.container-four')

btnFour.addEventListener('click',function() {
    if (containerFour.style.display === 'block') {
        containerFour.style.display = 'none'
        btnFour.src = "arrow.svg"
    } else {
        containerFour.style.display = 'block'
        btnFour.src = "cancel.svg"
    } 
})

let btnFive = document.querySelector('#btn-five')
let containerFive = document.querySelector('.container-five')

btnFive.addEventListener('click',function() {
    if (containerFive.style.display === 'block') {
        containerFive.style.display = 'none'
        btnFive.src = "arrow.svg"
    } else {
        containerFive.style.display = 'block'
        btnFive.src = "cancel.svg"
    } 
})