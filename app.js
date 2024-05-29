const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const firstNameErrorSpan = document.getElementById('firstName-error');
const lastNameErrorSpan = document.getElementById('lastName-error');
const emailErrorSpan = document.getElementById('email-error');
const passwordErrorSpan = document.getElementById('password-error');
let errorIcon = document.querySelector('.errorIcon');
const passwordIcon = document.getElementById('togglePassword');



//console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    firstNameErrorSpan.textContent = 'First Name cannot be empty';
    firstNameErrorSpan.classList.add('visible');
    errorIcon.style.display = 'inline';
  } else {
    firstName.classList.remove('error');
    firstNameErrorSpan.textContent = '';
    firstNameErrorSpan.classList.remove('visible');
    errorIcon.style.display = 'none';
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastNameErrorSpan.textContent = 'Last Name cannot be empty';
    lastNameErrorSpan.classList.add('visible');
    errorIcon.style.display = 'inline';

  } else {
    lastName.classList.remove('error');
    lastNameErrorSpan.textContent = '';
    lastNameErrorSpan.classList.remove('visible');
    errorIcon.style.display = 'none';

  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailErrorSpan.textContent = 'Looks like this is not an email';
    emailErrorSpan.classList.add('visible');
    errorIcon.style.display = 'inline';
  } else {
    email.classList.remove('error');
    emailErrorSpan.textContent = '';
    emailErrorSpan.classList.remove('visible');
    errorIcon.style.display = 'none';
    
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordErrorSpan.textContent = 'Password cannot be empty';
    passwordErrorSpan.classList.add('visible');
    //errorIcon.style.display = 'inline';
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  } else {
    password.classList.remove('error');
    passwordErrorSpan.textContent = '';
    passwordErrorSpan.classList.remove('visible');
    //errorIcon.style.display = 'none';
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


