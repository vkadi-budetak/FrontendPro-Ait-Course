console.log("Hello Vlad");

//* Неявное определение типа -- implicit - когда тип определяется сам 
// по значению, которое мы присвоили
let x = 10;

// здесь будет ошибка: нельзя присвоить стринг в переменную типа number
// x = "hello"; 
x = 12;

//* Явное обьявления типа - явная типизация - explicit typing
let y: number = 0;
y = 60;
// здесь будет ошибка - нельзя присовить boolean в переменную типа string
// y = true;

//! Примитывные типы
// string, number, boolean, bigint, null, undefind, symbol

//? Как типизировать массив?
let nums : number[] = [1,2,3];

//? Как типизировать КАРТЕЖ tuple? Это массив со значениями разных типов
let userInfo: [string, number, boolean] = ["John", 18, true];

//? Тип any - нежелательно использоваться
let z: any;
z = "hello"
z = 10;

//? либо число, либо строка = number | string 
//? Union - 
let age: number | string = "18"

//? Можно более строго выбирать, какие значения могут быть в переменной 
let gender: "male" | "female" = "female"

gender = "male";
// gender = "child";

//? Мы можем обьявлять типры при помощи слова type
//? Типы всегда называем с большой буквы
type Gender = "male" | "female"; // создаю свой тип - Gender

let myGender: Gender = "male";

//? Расширенный пол: музчина, женщины, non-binary
//? сделали один тип - расширив исходный
type ExtendedGender = Gender | "non-binary"
// создал переменную eltonJohnGender типа ExtendedGender
// и присвоил ей значение "non-binary"
const eltonJohnGender: ExtendedGender = "non-binary";

// Создайте тип Weapon, в котором могут быть следующие варианты:
// - "saber"
// - "pistole"
// - "muscete"
// Создайте переменную, типизуруйте ее и присвойте случайное значение
type Weapon = "saber" | "pistole" | "muscete";
let myWeapen: Weapon = "muscete";
console.log(myWeapen)

//? Как типизировать обьекты?
//? - самой основной способ через слово interface
interface User {
    email: string;
    age: number
}

const user: User = {
    email: "asd@gmai.com",
    age: 25
}

const stepan: User = {
    email: "stepan@gmail.com",
    age: 39,
}

//* Типизируем пирата 
interface Pirate {
    name: string;
    numberOfLegs: 0 |1 | 2;
    wepons?: Weapon[]; // ? - обозначает необязательное поле - опциональное
}


//? Расирил interface Pirate
interface Capitain extends Pirate{
    ship: string;
}

const jackSparrow: Capitain = {
    name: "Jack Sparrow",
    numberOfLegs: 2,
    wepons: ["pistole", "saber"],
    ship: "Black Pearl"
}

function sum(a:number, b:number):number {
    return a + b
}

const fruits = ["apple", "orange", "lemon"];
//* аргумент типа string[]
//* возвращаемое значениу string | undefined
function getFirsttFruit(arr: string[]): string | undefined {
    return arr[0];
}

//* Задание
function getLength (arr: string): number {
    return arr.length;
}

console.log(getLength("apple"))


//? Как типизировать стрелочную функцию 
const multiply = (a:number, b:number):number => a * b;

console.log(multiply(2,5));


//! GENERICS
//? с методами
function print<T>(a: T){
    console.log(a)
}

print<number>(3);
print<string>("3");

//? с интерфейсами
interface Box<T> {
    weight: number;
    content: T;
}

const weaponBox: Box<Weapon> = {
    weight: 20,
    content: "saber",
}

interface BloodTest<T, K>{
    testA: T;
    testB: K;
    price: number;
}

const bloodSugsrHolesterol : BloodTest<string, string> = {
    testA: "sugar",
    testB: "holesterol",
    price: 36,
}

//! Enum
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

const myRole: UserRole = UserRole.Admin;

// Создайте тип Coffee с полями 
// size - должно быть по типу enum Size - 
//  доступные варианты: sm, regular, big 

// milk - должно быть enum Milk (cow, oat, coco, almond)

// price - числовое



enum Size {
    Sm = "sm",
    Regular = "regular",
    Big = "big",
}

enum Milk {
    Cow = "cow",
    Oat = "oat",
    Coco = "coco",
    Almond = "almond",
}

interface Coffee {
    size: Size;
    milk: Milk;    
    price: number;
}

const myLatte: Coffee = {
    size: Size.Big,
    milk: Milk.Oat,
    price: 5.50
};

//? есть типизация обьектов через слово type
//? object literal
type Tea = {
    category: "green" | "black" | "olong";
    price?: number;
}

type Response = {status: 201} | {status: 404; message: "Not found"}

const serverResponse: Response = {status: 201};
