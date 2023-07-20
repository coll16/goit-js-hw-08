
var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

const feedbackForm = 'feedback-form-state';
let feedbackFormState = {}

const updateStorage = throttle((e) => {
  feedbackFormState[e.target.name] = e.target.value.trim();
  localStorage.setItem(
    feedbackForm,
    JSON.stringify(feedbackFormState)
  );
}, 500);

const fillFormFields = () => {
  try {
    const data = localStorage.getItem(feedbackForm);
    if (!data) return;
    feedbackFormState = JSON.parse(data);
    Object.entries(feedbackFormState).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch (error) {
    console.log(message);
  }
}

function onSubmit(e){
  e.preventDefault();
  console.log(feedbackFormState);
  feedbackFormState = {};
  form.reset();
  localStorage.removeItem(feedbackForm);
}

fillFormFields();
form.addEventListener('input', updateStorage)
form.addEventListener('submit', onSubmit)

