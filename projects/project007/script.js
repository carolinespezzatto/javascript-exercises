let count = 0

function 
nexJoke() {
    let array = ["My first time using an elevator was an uplifting experience. The second time let me down.","Two satellites decided to get married. The wedding wasn't much, but the reception was incredible.","Where do bees go to the bathroom? The BP station.","How do you get two whales in a car? Start in England and drive West.","I just read a book about Stockholm syndrome. It was pretty bad at first, but by the end I liked it.","It's difficult to say what my wife does, she sells sea shells by the sea shore."] 
    document.getElementById('result').innerText=array[count]
    count++ //count = count + 1  
    if (count == array.length) {
        count = 0
    } console.log(array.length)
}