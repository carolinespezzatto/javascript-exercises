
const inputEle = document.getElementById('enter');
inputEle.addEventListener('keyup', function(e){
    
  if (e.key === 'Enter') {
    let suggestion = document.getElementById("enter").value
    document.getElementById("suggestions").innerHTML += `<div class="container">
    <div>
        <button id="btn-one"><img src="arrow.svg" alt=""></button>
        <p class="number">1</p>
        <p class="votes">votes</p>
    </div>
    <div id="frase">
        <p>${suggestion}</p>
    </div>
    
</div>` 
    document.getElementById("enter").value = ''
    count()
  } 
});

let c = 2
function count() {
    c++;
    document.getElementById("frase-sug").innerText = `${c} suggestions`
}