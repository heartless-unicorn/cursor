const link = "https://swapi.dev/api/films/";
fetch(link)
  .then((response) => {
    return response.json();
  })
  .then((response) => getMovies(response));
function getMovies(response) {
  let movies = response.results;
  movies.forEach((value) => {
    let card = document.createElement("div");
    card.classList.add("card");
    const number = value.episode_id;
    const title = value.title;
    const date = value.release_date;
    card.innerHTML = `<h2> ${number}. ${title}</h2>
        <img href = "..."/> 
        <h4>Date of relese: ${date}</h4>
        <button onclick = "getInfo(${number})">Get Info</button>
`;
    console.log(card);
    document.getElementById("menu").appendChild(card);
  });
}
function getInfo(number) {
  fetch(`${link}${number}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => getChars(response));
  document.getElementById("menu").hidden = true;
}
function getChars(response) {
  const title = document.createElement("h1");
  title.innerText = response.title;
  document.getElementById("info").appendChild(title);
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
  card.classList.add("character");
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
