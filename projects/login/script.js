function validateLogin(){

    var username=document.getElementById('username').value
    var password=document.getElementById('password').value

    if(username==0 || password==0 ){
        
    return false 
    } else {
    alert(`Login succesful!\n[Username: ${username}]\n[Password: ${password}]`) 
    }
}
