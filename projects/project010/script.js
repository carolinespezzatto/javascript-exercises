function firstButton() {
    if (document.getElementById('checkbox-two').checked == true &&
    document.getElementById('checkbox-three').checked == true) {
        document.getElementById('checkbox-three').checked = false
    }   
}
function secondButton() {
    if (document.getElementById('checkbox-one').checked == true &&
    document.getElementById('checkbox-three').checked == true) {
        document.getElementById('checkbox-one').checked = false
    }
}
function thirdButton() {
    if (document.getElementById('checkbox-one').checked == true &&
    document.getElementById('checkbox-two').checked == true) {
        document.getElementById('checkbox-two').checked = false
    }
} 
