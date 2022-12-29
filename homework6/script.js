const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getSubject(student) {
  let name = Object.keys(student.subjects);
  let result = [];
  for (let n of name) {
    n = n.trim();
    if (n.includes("_")) {
      n = n.replace("_", " ");
    }
    n = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
    result.push(n);
  }
  return result;
}
function getAverageMark(student) {
  let marks = Object.entries(student.subjects);
  let result = 0;
  let total = 0;
  for (m of marks) {
    let sum = m[1].reduce((total, current) => {
      return total + current;
    }, 0);
    total += m[1].length;
    result += sum;
  }
  result = result / total;
  return result.toFixed(2);
}
function getStudentInfo(student) {
  let { name, course } = student;
  return { name, course, avarageMark: +getAverageMark(student) };
}
function getStudentsNames(obj) {
  let result = [];
  for (value of obj) {
    result.push(value.name);
  }
  return result.sort();
}
function getBestStudent(obj) {
  let result = "";
  for (value of obj) {
    let avarage = 0;
    if (getAverageMark(value) > avarage) {
      avarage = getAverageMark(value);
      result = value.name;
    }
  }
  return result;
}
function calculateWordLetters(str) {
  str = str.toLowerCase();
  let arr = str.split("");
  let result = arr.reduce((total, current) => {
    total[current] = (total[current] || 0) + 1;
    return total;
  }, {});
  return result;
}
document.writeln(`Список предметів Тані:✨${getSubject(students[0])}✨</br>`);
document.writeln(
  `Середня оцінка Тані: ✨${getAverageMark(students[0])}✨</br>`
);
document.writeln(
  `Інфа по Тані:✨${Object.entries(getStudentInfo(students[0]))}✨</br>`
);
document.writeln(`Імена студентів: ✨${getStudentsNames(students)}✨</br>`);
document.writeln(
  `Найкращі оцінки має студент: ✨${getBestStudent(students)}✨</br>`
);
document.writeln(
  `В слові тест: ✨${Object.entries(calculateWordLetters("тест"))}✨</br>`
);
