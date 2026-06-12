// TypeScript 2 - Classroom Practice Tasks
// 1. Tuple - Talaba Ma'lumotlari
// Tuple yordamida talabaning ismi va yoshini saqlang. Kamida 3 ta talaba uchun alohida tuple
// yarating. Tuple va oddiy array o'rtasidagi farqni kuzating.
let student1:[string, number] = [
  "Nuriddin",
  17
];
let student2:[string, number] = [
  "Eldor",
  18
];
let student3:[string, number] = [
  "Muslim",
  17
];


// 2. Tuple - Lokatsiya Tizimi
// Latitude va longitude qiymatlarini saqlovchi tuple yarating. Kamida 3 ta joy uchun koordinatalar
// saqlansin.
let place1: [string | number, string | number] = [
  "40.8517° N", "69.5857° E"
]
let place2: [string | number, string | number] = [
  "55.37805° N", "-3.43597° W"
]
let place3: [string | number, string | number] = [
  "37.0902° N", "-95.7129° W"
]




// 3. Type Alias - Product
// Product nomli Type Alias yarating. Unda nomi, narxi va soni bo'lsin. Shu type asosida 3 ta mahsulot
// yarating.
type Product = {name: string; price: number | string; number: number};
const product1: Product = {
  name: "Mobile Phone",
  price: "$500",
  number: 1000
}
const product2: Product = {
  name: "Laptop",
  price: "$5000",
  number: 100
}
const product3: Product = {
  name: "Computer",
  price: "$7000",
  number: 100
}

// 4. Literal Types - User Role
// Foydalanuvchi roli uchun faqat admin, user va teacher qiymatlariga ruxsat bering. Bir nechta
// foydalanuvchi yarating va ularning role larini belgilang.
type Role = "admin" | "user" | "teacher";
interface User {
  name: string,
  role: Role
}
const user1: User = {
  name: "Nuriddin",
  role: "admin"
}
const user2: User = {
  name: "Go'zal",
  role: "user"
}
const user3: User = {
  name: "Ravza",
  role: "teacher"
}


// 5. Enum - Order Status
// Buyurtma holati uchun Enum yarating. Pending, Success va Cancelled qiymatlari bo'lsin. Bir nechta
// buyurtma obyektlari yarating.
enum Status {Pending, Success, Cancalled};
const product4: Status = Status.Pending;
const product5: Status = Status.Success;
const product6: Status = Status.Cancalled;


// 6. Interface vs Type
// Book uchun Interface yarating va Product uchun Type Alias yarating. Har ikkisi asosida kamida 2
// tadan object yarating.
interface Book {
  name: string;
  pages: number;
}
type AnotherProduct = {name: string; price: number};
const book4: Book = {
  name: "nimadir",
  pages: 123
}
 const product7: AnotherProduct = {
  name: "nimadir",
  price: 1234
 }


// 7. Generic Function
// Generic ishlatib showData() nomli function yarating. Function string, number va boolean qiymatlar
// bilan ishlashi kerak.
function showData<T>(data: T):T{
  return data;
}
console.log(showData("Nuriddin"))
console.log(showData(123));
console.log(showData(true))


// 8. Class va Public
// Student class yarating. Unda ism va yosh property lari bo'lsin. Public property lar yordamida
// ma'lumotlarni tashqaridan o'qing.
class Student {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const student5 = new Student("Nuriddin", 17);
console.log(student5.name)


// 9. Private, Protected va Readonly
// Employee class yarating. id readonly bo'lsin, salary protected bo'lsin va password private bo'lsin.
// Har bir modifier nima uchun ishlatilishini amalda tekshiring.
class Employee {
  public id: number;
  protected salary: number | string;
  private password: number | string;

  constructor(id: number,
  salary: number | string,
  password: number | string) {
    this.id = id;
    this.salary = salary;
    this.password = password;
  }
}
const employee1 = new Employee(12, 123456, "parol nima");
console.log(employee1.id);