// stap-1
document.getElementById('btn-fild').addEventListener('click', function(){
    // stap-2
    const emailFiled = document.getElementById('email-filed') ;
    const email = emailFiled.value ;
    // stap-3
    const passwordFiled = document.getElementById('password-filed') ;
    const password = passwordFiled.value ;
    // stap-4s
    if(email === 'kaziabutaleb.hammayat@gmail.com' &&  password === 'hamayat77'){
        window.location.href ='https://abutalebhammayat.github.io/baparbank/new.html';
    }
    else{
        alert('Abutaleb boss is it you? I think you do it, Sorry Sorry Sorry 🙏🙏🙏🙏 password show again. ')
    }
})