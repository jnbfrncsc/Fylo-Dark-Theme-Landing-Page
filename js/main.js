const form = document.querySelectorAll('joinForm')
const emailInput = document.getElementById('validEmail')
const invalidEmail = document.getElementById('errorMsg')
const submitBtn = document.getElementById('submitBtn')

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    const email = emailInput.value.trim();

    if(validateEmail(email)){
        invalidEmail.classList.remove('active')
    }else {
        invalidEmail.classList.add('active')
    }
})