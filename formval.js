


const isSignupPage = document.getElementById('signupForm') !== null;
const isSigninPage = document.getElementById('signinForm') !== null;


function displayMessage(success, messageElement) {
    messageElement.style.display = success ? 'block' : 'none';
}


if (isSignupPage) {
    const signupForm = document.getElementById('signupForm');
    const signupError = document.getElementById('signupError');
    const signupSuccess = document.getElementById('signupSuccess');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            displayMessage(false, signupSuccess);
            displayMessage(true, signupError); 
        } else {
            displayMessage(false, signupError);
            displayMessage(true, signupSuccess); 

            
            setTimeout(() => {
                window.location.href = 'home.html'; 
            }, 2000);
        }
    });
}


if (isSigninPage) {
    const signinForm = document.getElementById('signinForm');
    const signinError = document.getElementById('signinError');
    const signinSuccess = document.getElementById('signinSuccess');

    signinForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            displayMessage(false, signinSuccess);
            displayMessage(true, signinError); 
        } else {
            displayMessage(false, signinError);
            displayMessage(true, signinSuccess); 

            
            setTimeout(() => {
                window.location.href = 'home.html'; 
            }, 2000);
        }
    });
}
