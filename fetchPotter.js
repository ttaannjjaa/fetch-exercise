export default async function fetchPotter() {
  const apiUrl = 'https://hp-api.herokuapp.com/api/characters/students';
  let houseHogwarts;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    workFunction(data);
  } catch (error) {
    console.error('ERROR', error);
  }

  function workFunction(dataArray) {
    dataArray.forEach(person => {
      const name = person.name;
      const yearOfBirth = person.yearOfBirth;
      houseHogwarts = person.house;
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.textContent = `${name}, ${yearOfBirth}, ${houseHogwarts}`;
      //cardElement.getAttribute(hidden);//
      if (houseHogwarts === 'Gryffindor') {
        cardElement.style.backgroundcolor = 'red';
      } else if (houseHogwarts === 'Slytherin') {
        cardElement.style.backgroundcolor = 'green';
      } else if (houseHogwarts === 'Hufflepuff') {
        cardElement.style.backgroundcolor = 'yellow';
      } else {
        cardElement.style.backgroundcolor = 'blue';
      }
      const htmlPlace = document.querySelector('[data-js="fetchContent"]');
      htmlPlace.append(cardElement);
      //  console.log(houseHogwarts);
    }); //end of forEach-method
  } // end of workFunction
} // end of export function
