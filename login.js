function checkInput(){
    var usernameValue=document.getElementById("Username").value;
    var passwordValue=document.getElementById("password").value;
    var loginBtn=document.getElementById("loginBtn");

    if(usernameValue !=='' && passwordValue !== ''){
        loginBtn.disabled= false;
        // loginBtn.style.backgroundColor='orange';
    }else{
        loginBtn.disabled=true;
        // loginBtn.style.backgroundColor='aquamarine';
    }
}

var a;
function pass(){
    if(a==1){
        document.getElementById('password').type='password';
        document.getElementById('eye-icon').src='eye-close.png';
        a=0;
    }
    else{
        document.getElementById('password').type='text';
        document.getElementById('eye-icon').src='eye-open.png';
        a=1;
    }
}