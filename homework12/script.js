const link = "https://swapi.dev/api/films/";
const planetLink = "https://swapi.dev/api/planets/?page=1";
const infoPage = document.getElementById("list");
const menuPage = document.getElementById("menu");
const moviePosters = {
  1: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  2: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
  3: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
  4: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/star-wars-a-new-hope-one-sheet-i28733.jpg",
  5: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  6: "https://cloud.vistaapps.elcapitantheatre.com/CDN/media/entity/get/FilmPosterGraphic/h-HO00000182",
};

async function fetchImg(name) {
  await fetch("https://akabab.github.io/starwars-api/api//all.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let character = response.find((val) => val.name === name);
      if (character.image) {
        document.getElementById(name).src = character.image;
      }
    });
}

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
  menuPage.style.display = "flex";
  document.getElementById("info").style.display = "none";
  infoPage.innerHTML = "";
}

function getMovies(response) {
  let movies = response.results;
  movies.forEach((value) => {
    let card = document.createElement("div");
    card.classList.add("col-4");
    const number = value.episode_id;
    const title = value.title;
    const date = value.release_date;
    card.innerHTML = `
    <div class = "movie">
        <h2> Episode ${number}.<span class = "episode-tittle"> ${title}</span></h2>
        <img src = ${moviePosters[number]} class ="img-fluid movie-poster"/> 
        <h4>Date of release: ${date}</h4>
        <button onclick = "getInfo(${number})">Get Info</button>
    </ div>
`;
    menuPage.appendChild(card);
  });
}

function getInfo(number) {
  let filmIds = {
    1: 4,
    2: 5,
    3: 6,
    4: 1,
    5: 2,
    6: 3,
  };
  fetch(`${link}${filmIds[number]}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => getChars(response));
  document.getElementById("info").style.display = "flex";
  document.getElementById("menu").style.display = "none";
}

function getChars(response) {
  document.getElementById("title").innerText = response.title;
  let characters = response.characters;
  characters.forEach((value) => {
    fetch(value)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response) {
          getCharInfo(response);
        }
      });
  });
}

function getCharInfo(response) {
  let card = document.createElement("div");
  card.classList.add("col-3", "char-card");
  const gender = response.gender;
  let icon = "";
  if (gender === "female") {
    icon = `<i class="fa-solid fa-venus fem"></i>`;
  } else {
    icon = `<i class="fa-solid fa-mars mask"></i>`;
  }

  card.innerHTML = `
    <h3>${response.name}</h3>
    <img src = "" class = "img-fluid char-pic" id = "${response.name}" alt = "character picture" />
    <div class = "char-info">
    <p>Year of birth: ${response.birth_year}</p>
    <p>Gender: ${icon}</p>
    </div>`;
  fetchImg(response.name);
  infoPage.appendChild(card);
}

function getPlanets(response) {
  let planets = response.results;
  let names = planets.map((value) => {
    return value.name;
  });
  names.forEach((value, index) => {
    let title = document.createElement("div");
    title.classList.add("col-2", `planet-${index}`);
    title.innerText = `${value}`;
    document.getElementById("planets").appendChild(title);
  });
  let previous = response.previous;
  let next = response.next;

  function setNextPage(link) {
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
  document.getElementById("next").addEventListener("click", function () {
    setNextPage(next);
  });
  document.getElementById("back").addEventListener("click", function () {
    setNextPage(previous);
  });
}
