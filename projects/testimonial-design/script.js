var btnOne = document.getElementById('btn-one')
var btnTwo = document.getElementById('btn-two')
var btnThree = document.getElementById('btn-three')
var btnFour = document.getElementById('btn-four')
var btnFive = document.getElementById('btn-five')
var textDescription = document.getElementById('text__description')
var textAuthor = document.getElementById('text__author')
var body = document.querySelector('body')

body.className = "btn-one"
textDescription.innerHTML = ("I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!")
textAuthor.innerHTML = ("ARTHUR BIRNBAUM")

btnOne.onclick = function(){
  body.className = "btn-one"
  textDescription.innerHTML = ("I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!")
  textAuthor.innerHTML = ("ARTHUR BIRNBAUM")
}
btnTwo.onclick = function(){
  body.className = "btn-two";
  textDescription.innerHTML = ("Second time hiring him. Finished everything in a timely manner and his work is excellent. Can't recommend him enough.")
  textAuthor.innerHTML = ("PHOEBE KOTLIAR")
}
btnThree.onclick = function(){
  body.className = "btn-three";
  textDescription.innerHTML = ("Alexandru Florin never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Alexandru even when deadlines are tight and pressure is great. It's reassuring to have a project in such good hands.")
  textAuthor.innerHTML = ("LOUISA P. HUARD")
}
btnFour.onclick = function(){
  body.className = "btn-four";
  textDescription.innerHTML = ("Florin has been of great help on our different web projects. He is very trustworthy and serious in the work done. Keep on the good work and energy, been a pleasure to collaborate.")
  textAuthor.innerHTML = ("CRISTINA AURMOOGUM")
}
btnFive.onclick = function(){
  body.className = "btn-five";
  textDescription.innerHTML = ("I hired Florin Pop based on others positive experiences, and I understand why he's so highly rated. His code is very clean, he communicates well, and he likes to offer alternative solutions.")
  textAuthor.innerHTML = ("J. KENT PEPPER")
} 