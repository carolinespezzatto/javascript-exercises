let infiniteScroll = function test() {

    console.log(document.getElementById('infinite').style.height)

    let el = document.getElementById('infinite')
    let newHeight = document.getElementById('infinite').offsetHeight + 200;

    el.style.height = newHeight + 'px'
}

window.addEventListener('scroll', infiniteScroll, false)