import throttle from 'lodash.throttle';

const savedInputs = ' { "email": "h@ukr.net", "message": "Привіт!" } '; //localStorage.getItem('feedback-form-state');

let parsedInputs = {
  email: '',
  message: '',
};
let savedEmail = '';
let savedMessage = '';
if (savedInputs) {
  parsedInputs = JSON.parse(savedInputs);
  console.log('!: ', parsedInputs);
  savedEmail = parsedInputs.email; // ? parsedInputs.email : '';
  savedMessage = parsedInputs.message; // ? parsedInputs.message : '';
}

console.log('savedInputs: ', savedInputs);
console.log('parsedInputs: ', parsedInputs);
console.log('savedEmail: ', savedEmail);
console.log('savedMessage: ', savedMessage);

const form = document.querySelector('.feedback-form');
const email = document.querySelector("[name = 'email']");
const message = document.querySelector("[name = 'message']");

console.log(form);
console.log(email);
console.log(message);
email.textContent = savedEmail;
message.textContent = savedMessage;

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

function onInputChange() {
  parsedInputs.email = email.textContent;
  parsedInputs.message = message.textContent;
  localStorage.setItem('feedback-form-state', JSON.stringify(parsedInputs));
  console.log('saving...');
  console.log('parsedInputs on save: ', parsedInputs);
  console.log('email: ', parsedInputs.email);
  console.log('email in form: ', email.textContent);
  console.log('message: ', parsedInputs.message);
  console.log('message in form: ', message.textContent);
}

function onFormSubmit() {
  console.log('parsedInputs on submit: ', parsedInputs);
  localStorage.removeItem('feedback-form-state');
}
