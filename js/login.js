document.getElementById('login-submit').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    console.log(userEmail)

    // user-userPassword

    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;

    if (userEmail == 'abcd@gmail.com' && userPassword == 'ghushimarmu') {
        console.log('valid user');
        window.location.href = "banking.html"
    }
    else {
        alert('password or email is not correct');
    }

})



