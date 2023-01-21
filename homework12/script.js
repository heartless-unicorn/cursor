const link = "https://swapi.dev/api/films/";
const planetLink = "https://swapi.dev/api/planets/?page=1";
const infoPage = document.getElementById("info");
const menuPage = document.getElementById("menu");
let back = document.getElementById("back");
let next = document.getElementById("next");
fetch(link)
  .then((response) => {
    return response.json();
  })
  .then((response) => getMovies(response));

fetch(planetLink)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    getPlanets(response);
  });

function backToMenu() {
  document.getElementById("menu").style.display = "flex";
  document.getElementById("info").style.display = "none";
}

function getMovies(response) {
  let movies = response.results;
  movies.forEach((value) => {
    let card = document.createElement("div");
    card.classList.add("col-4");
    const number = value.episode_id;
    const title = value.title;
    const date = value.release_date;
    card.innerHTML = `<h2> ${number}. ${title}</h2>
        <img href = "..."/> 
        <h4>Date of relese: ${date}</h4>
        <button onclick = "getInfo(${number})">Get Info</button>
`;
    menuPage.appendChild(card);
  });
}

function getInfo(number) {
  let backButton = document.createElement("div");
  backButton.innerHTML = `<button onclick = "backToMenu()">Back</button>`;
  infoPage.before(backButton);
  fetch(`${link}${number}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => getChars(response));
  document.getElementById("info").style.display = "flex";
  document.getElementById("menu").style.display = "none";
}

function getChars(response) {
  const title = document.createElement("h1");
  title.innerText = response.title;
  infoPage.before(title);
  let characters = response.characters;
  characters.forEach((value) => {
    fetch(value)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        getCharInfo(response);
      });
  });
}

function getCharInfo(response) {
  let card = document.createElement("div");
  card.classList.add("col-3");
  const gender = response.gender;
  let icon = "";
  if (gender === "female") {
    icon = "👩";
  } else {
    icon = "👦";
  }
  card.innerHTML = `
    <h3>${response.name}</h3>
    <img href = ".../"/>
    <p>Year of birth: ${response.birth_year}</p>
    <p>Gender: ${icon}</p>`;
  document.getElementById("info").appendChild(card);
}

function getPlanets(response) {
  let planets = response.results;
  let names = planets.map((value) => {
    return value.name;
  });
  names.forEach((value, index) => {
    let planet = document.querySelector(`.planet-${index}`);

    let title = document.createElement("div");
    title.classList.add("col-2", `planet-${index}`);
    title.innerText = `${value}`;
    document.getElementById("planets").appendChild(title);
  });
  let previous = response.previous;
  let next = response.next;
  console.log(next);
  let buttonBack = document.getElementById("back");
  let buttonNext = document.getElementById("next");
  function setNextPage(link) {
    console.log(link);
    if (link) {
      fetch(link)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          next = response.next;
          previous = response.previous;
          planets = response.results;
          names = planets.map((value) => {
            return value.name;
          });
          names.forEach((value, index) => {
            let planet = document.querySelector(`.planet-${index}`);
            planet.innerText = `${value}`;
          });
        });
    }
  }
  buttonNext.addEventListener("click", function () {
    setNextPage(next);
  });
  buttonBack.addEventListener("click", function () {
    setNextPage(previous);
  });
}
