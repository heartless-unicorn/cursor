const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
function getPairs(people = []) {
  let femaleNames = [];
  let maleNames = [];
  let result = [];
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person[person.length - 1] === "а") {
      femaleNames.push(person);
    } else {
      maleNames.push(person);
    }
  }
  for (i in femaleNames) {
    result.push([femaleNames[i], maleNames[i]]);
  }
  return result;
}
function getTheme(names = [], theme = []) {
  let result = [];
  for (i in theme) {
    let pair = names[i];
    result.push([`${pair[0]} i ${pair[1]}`, theme[i]]);
  }
  return result;
}
function getMark(names = [], mark = []) {
  let result = [];
  for (i in mark) {
    result.push([names[i], mark[i]]);
  }
  return result;
}
function randomMark(names = []) {
  let result = [];
  for (i in names) {
    let random = Math.round(Math.random() * (5 - 1) + 1);
    result.push([names[i][0], names[i][1], random]);
  }
  return result;
}
const pairs = getPairs(students);
const withThemes = getTheme(pairs, themes);
const withMarks = getMark(students, marks);
const withRandomMarks = randomMark(withThemes);
document.writeln(`
${pairs} </br>
${withThemes} </br>
${withMarks} </br>
${withRandomMarks} </br>`);
