const BASE_URL = 'https://randomuser.me/api';
// create a function to display dom elements from the api response
const displayUser = ({ results }) => {
  console.log(results);
  const [person] = results;

  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;
  const { email, picture } = person;

  const section = document.createElement('section');
  section.classList.add('card');

  const h2 = document.createElement('h2');
  h2.textContent = fullName;

  const p = document.createElement('p');
  p.textContent = email;

  const img = document.createElement('img');
  img.setAttribute('src', picture.large);
  img.setAttribute('alt', fullName);

  section.append(img, h2, p);
  document.querySelector('.people').append(section);
};


// create a function to display errors from the api response
const displayError = (error) => {
  const section = document.querySelector('section.error');
  section.getElementsByClassName.display = 'block';

  const p = document.createElement('p');
  p.textContent = 'Something went wrong!';

  const eMsg = document.createElement('p');
  eMsg.textContent = error;

  section.append(p, eMsg);
  console.log(error);
};


const button = document.querySelector('button');

button.addEventListener('click', () => {
const people = document.querySelector('.people');
people.innerHTML = '';

// Fetch data from base url using fetch and promises
fetch(BASE_URL)
  .then((res) => {
    return res.json();
  })
  .then(displayUser)
  .catch(displayError);
})