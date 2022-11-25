import throttle from 'lodash.throttle';

const savedInputs = localStorage.getItem('feedback-form-state');

let parsedInputs = {
  email: '',
  message: '',
};

let savedEmail = '';
let savedMessage = '';

if (savedInputs) {
  parsedInputs = JSON.parse(savedInputs);
  savedEmail = parsedInputs.email;
  savedMessage = parsedInputs.message;
}

const form = document.querySelector('.feedback-form');
const email = document.querySelector("[name = 'email']");
const message = document.querySelector("[name = 'message']");

email.value = savedEmail;
message.value = savedMessage;

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

function onInputChange() {
  parsedInputs.email = email.value;
  parsedInputs.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(parsedInputs));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(parsedInputs);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
