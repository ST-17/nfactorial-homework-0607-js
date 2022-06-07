// 1 Переменные - let, const
let name = `Dalida University`;
const MANAGER = "Dalida";

// 2 Типы данных - string, number, boolean, null, undefined
let numberOfStudents = 10000;
let open = true
let t;
let n = null;

// 3 Объекты - создание, добавление и удаление свойства (через прямые скобки тоже), добавление функции в объект
let uniInfo = {
    numberOfStu: numberOfStudents,
    age: 25,
    ceo: MANAGER,
    location: "London", 
    isOpen: open,
    sayWelcome: function(name){
        alert(`Welcome to Dalida University, ${name}`)
    }
}
uniInfo.sayWelcome("Samat")

uniInfo["area"] = 700;
delete uniInfo["area"]
console.log(uniInfo);

// 4 Массивы - использовать все методы, которые мы прошли. Не забывать про map, filter, rest и spread операторы. Еще slice ;)
let faculties = ["engineering",'chem-bio','pedagogy']
console.log(faculties.length);

faculties.push('journalism');
faculties.pop();

faculties.unshift("sport");
faculties.shift();

let text = faculties.map((faculty) => {
    return `${faculty} is the best`
})

let fil = faculties.filter(faculty => faculty.length > 8)

console.log(fil)
console.log(text)

function list(p, ...faculties){
    return `${p} ${faculties} `
}
console.log(list("In Dalida University have faculties like:", "engineering",'chem-bio','pedagogy'))

let raitingStore = [9.9, 8.3, 7.9];
let newRaiting = 5.6;
raitingStore = [...raitingStore, newRaiting];
console.log(raitingStore)

let sli = faculties.slice(1,3);
console.log(sli);

let majors = ['is','tfl','tra','cs','math']
faculties.concat(majors)

// 5 Сравнения - нестрогое и строгое, условный оператор, оператор нулевого слияния, преобразование к логическому типу, switch

let ageDalida = 18
let ageUni = "18"
if(ageDalida == ageUni);
if(ageDalida === ageUni);

let selectedFaculty = "chem-bio";
if (selectedFaculty) {
  console.log("Choose " + selectedFaculty);
} else {
  console.log("No faculty");
}

let selectedFac = faculties.includes("chem-bio") ? "we have chem-bio faculty" : "sorry :(";
console.log(selectedFac)

let nameOfMajor;
console.log(nameOfMajor ?? "No majors :(")

let numOfTeachersStr = "750";
let numOfTeachers = Number(numOfTeachersStr);

let point = 90;
let grade;
switch(point){
    case  90:
        grade = 'A';
        break;
    case 80:
        grade = 'B';
        break;
    case 70:
        grade = 'C';
        break;
    case 60:
        grade = 'D';
        break;
    case 50:
        grade = 'E';
        break;
    default: 
        grade = 'RETAKE';
}
console.log(grade);


// 6 Циклы - for, while, do while
for(let i = 0; i < faculties.length; i++){
    console.log(`Our ${i+1} faculty is ${faculties[i]}`)
}

let count = majors.length;
while(count > 0){
    console.log(`One of major is ${majors[count-1]}`)
    count--;
}

do{
    console.log(`One of major is ${majors[count]}`)
    count++;
}while(count < majors.length);

// 7 Функции - обычные, function expression, arrow functions, destructuring
let uni = "Dalida University"
let yourName = "Ali"

function sayHello (uni, yourName){
    return `${yourName}, hello. ${uni} glad to see you!`
}

let sayHello2 = function(uni, yourName){
    return `${yourName}, hello. ${uni} glad to see you!`
}

let sayHello3 = (uni,yourName) => `${yourName}, hello. ${uni} glad to see you!`

// 8 Импорт и экспорт - named export & import, export & import as, default export & import
export {sayHello, sayHello2 as sH2}