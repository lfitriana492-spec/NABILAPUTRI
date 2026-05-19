const landing = document.getElementById('landing');
const ppdb = document.getElementById('ppdb');
const formSection = document.getElementById('formSection');
const success = document.getElementById('success');
const startButton = document.getElementById('startButton');
const registerButton = document.getElementById('registerButton');
const resetButton = document.getElementById('resetButton');
const registrationForm = document.getElementById('registrationForm');

const showSection = section => {
  [landing, ppdb, formSection, success].forEach(card => {
    card.classList.toggle('active', card === section);
  });
};

startButton.addEventListener('click', () => showSection(ppdb));
registerButton.addEventListener('click', () => showSection(formSection));
resetButton.addEventListener('click', () => {
  registrationForm.reset();
  showSection(landing);
});

registrationForm.addEventListener('submit', event => {
  event.preventDefault();
  showSection(success);
});
