
// console.log('js file');
document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    //get user pasword
    const paswordFild = document.getElementById('user-password');
    const userPassword = paswordFild.value;
    // console.log(userPassword);

    if(userEmail == 'fahad@gmail.com' && userPassword == 'fahad')
    {
        // console.log('Valid User!');
        window.location.href = 'banking.html';
    }
    else{
        console.log('Invalid email or password!');
    }
});
