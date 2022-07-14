interface Product{
    id: number,
    name: string,
    price: number
}

function getProduct(id: number) : Product{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1);
    console.log(`The product ${product.name} costs ${product.price}`)

const showProduct = (name: string, price:number)  => {
    console.log(`The product ${name} costs ${price}.`);
};


// ================

let Name: string = 'John';
let age: number = 25;
let active: boolean = true;
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

let person: {
    name: string;
    age: number
};

person = {
    name: 'John',
    age: 25
};

let greeting : (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
};

let greeting1 : () => void
greeting1 = function () {
    console.log('Hello');
};

// ================

let counter: number = 0;
let x: number = 100,
    y: number = 200;
let bin = 0b100;
let anotherBin: number = 0B010;
let octal: number = 0o10;
let hexadecimal: number = 0XA;

// ================

let firstName: string = 'John';
let title: string = "Web Developer";
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);

// ================

let pending: boolean;
pending = true;
pending = false;

// ================

let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

let employee1: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// ================

let skills: string[];
skills = ['Problem Solving','Software Design','Programming'];

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];

// ================

let skill: [string, number];
skill = ['Programming', 5];

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// ================

enum Month {
    Jan =1 ,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    console.log('Send email to the Applicant...');
}

// ================

let result: any;
result = 10.123;
console.log(result.toFixed());

// ================

function log(message): void {
    console.log(message);
}

let useless: void = undefined;
useless = null;

// ================

function raiseError(message: string): never {
    throw new Error(message);
}

let loop = function forever() :never {
    while (true) {
        console.log('Hello');
    }
}

// ================

function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

let result1: number | string;
result = 10;
result = 'Hi';

// ============

type chars = string;
let message: chars;

type alphanumeric = string | number;
let input: alphanumeric;
input = 100;
input = 'Hi';

// ============

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click';
mouseEvent = 'dblclick';
mouseEvent = 'mouseup';
mouseEvent = 'mousedown';

// ============

let items = [1, 2, 3, null];
// let items: Array<number | null>

let arr = [new Date(), new RegExp('\d+')];
// (RegExp | Date)[]


// Section 3. Control Flow Statements

const max = 100;
let counter1 = 100;

if (counter1 < max) {
    counter1++;
} else {
    counter1 = 1;
}

const max2 = 100;
let counter2 = 100;

counter2 < max2 ? counter2++ : counter2 = 1;


let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
} else if (discount > 10){
    discount = 15;
} else {
    throw new Error('The number of items cannot be negative!');
}

// ============

let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}

let month = 2,
    year = 2020;

let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
                !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

// ============

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// ============

let counter3 = 0;

while (counter3 < 5) {
    console.log(counter3);
    counter3++;
}
// ============

let i = 0;

do {
    console.log(i);
    i++
} while (i < 10);
// ============

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (let i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
}

// ============

for (let index = 0; index < 9; index++) {
    if (index % 2){
        continue
    }
    console.log(index);
}

// Section 4. Functions

function adding(a: number, b: number): number {
    return a + b;
}
function echo(message: string): void {
    console.log(message.toUpperCase());
}

// ============

let add1: (x: number, y: number) => number;
let add2: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

// ============

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// ============

function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100));

function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                    !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

// ============

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

// ============

function add4(a: number, b: number): number;
function add4(a: string, b: string): string;
function add4(a: any, b: any): any {
    return a + b;
}

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
// ============

class Person1 {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
// ============

class Person {
    protected ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
// ============

class Person3 {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

class Person4 {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}

// ============

class Person5 {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// ============

class Person6 {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person6 {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
// ============

class Employee2 {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee2.headcount++;
    }

    public static getHeadcount() {
        return Employee2.headcount;
    }
}
// ============

abstract class Employee3 {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
class FullTimeEmployee extends Employee3 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

// Section 6. Interfaces

interface Person7 {
    firstName: string;
    lastName: string;
}

interface Person8 {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName1(person: Person8) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};
function getFullName(person: Person8) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

interface Json {
    toJSON(): string
}

class Person9 implements Json {
    constructor(private firstName: string,
                private lastName: string) {
    }
    toJSON(): string {
        return JSON.stringify(this);
    }
}

// ============
class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }

interface A {
    a(): void
}

interface B extends A {
    b(): void
}
interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}

// Section 7. Advanced Types

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee7 = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee7 = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
type Employee8 = Identity & BusinessPartner & Contact;

let e1: Employee8 = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};
// ============

type alphanumeric1 = string | number;

function addd(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

class Customer1 {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        return true;
    }
}

type BusinessPartner1 = Customer1 | Supplier;

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer1) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}


// ============

// let a: typeA;
// let b = a as typeB;
//
// let a: typeA;
// let b = <typeB>a;

let input1 = <HTMLInputElement>document.querySelector('input[type="text"]');

// ============

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string;
let netPrice2 = getNetPrice(100, 0.05, false) as number;
let netPrice3 = <number>getNetPrice(100, 0.05, false);

// ============

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
let result2 = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

// ============

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
let numbers = new Stack<number>(5);

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}
while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}
// ============
interface Pair<K, V> {
    key: K;
    value: V;
}
let month1: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}
class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};

// ============