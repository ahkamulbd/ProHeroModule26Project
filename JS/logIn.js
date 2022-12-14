//console.log('THis is JS');

// Step 1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('submit button clicked');

    // Step 2: get the email address inside the email input field

    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    // Step 3: get password
    // 3.a Set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email.password);

    // Do not verify email password on the client side

    // Step 4: verify email and password

    if (email === 'sontan@bap.com' && password === 'secret') {
        console.log('valid user');
    }
    else {
        console.log('invalid user');
    }
})