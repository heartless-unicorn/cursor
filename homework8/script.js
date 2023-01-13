class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.name = fullName;
    this.marks = [5, 4, 4, 5];
    this.active = true;
  }
  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.name}`;
  }
  get mark() {
    return this.active ? this.marks : null;
  }
  set mark(value) {
    if (this.active) {
      this.marks.push(value);
    }
  }
  getAvarageMark() {
    return this.marks.reduce((sum, val) => sum + val, 0) / this.marks.length;
  }
  dismiss() {
    this.active = false;
  }
  recover() {
    this.active = true;
  }
}
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    this.timer = setInterval(() => this.getScholarship(), 30000);
  }
  getScholarship() {
    if (this.active && this.getAvarageMark() > 4) {
      console.log("Ви отримали 1400 грн. стипендії");
    }
  }
}

let student1 = new Student(
  "Вища Школа Психотерапії м.Одеса,",
  1,
  "Остап Родоманський Бендер"
);
let student2 = new BudgetStudent(
  "Вища Школа Психотерапії м.Одеса,",
  1,
  "Лариса Косач-Квітка"
);
