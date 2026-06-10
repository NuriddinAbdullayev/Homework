// TASK 1
interface Food {
  id: number;
  name: string;
  price: number;
  category: string;
  available: boolean;
}

const foods: Food[] = [
  {
    id: 1,
    name: "Burger",
    price: 35000,
    category: "Fast Food",
    available: true,
  },
  {
    id: 2,
    name: "Lavash",
    price: 28000,
    category: "Fast Food",
    available: true,
  },
  {
    id: 3,
    name: "Pizza",
    price: 60000,
    category: "Italian",
    available: false,
  },
  {
    id: 4,
    name: "Osh",
    price: 30000,
    category: "National",
    available: true,
  },
  {
    id: 5,
    name: "Somsa",
    price: 8000,
    category: "National",
    available: false,
  },
  {
    id: 6,
    name: "Sushi",
    price: 70000,
    category: "Japanese",
    available: true,
  },
];

// 1
function showFoods(): Food[] {
  return foods;
}

// 2
function findAvailableFoods(): Food[] {
  return foods.filter((food) => food.available);
}

// 3
function findFoodsByCategory(category: string): Food[] {
  return foods.filter(
    (food) => food.category.toLowerCase() === category.toLowerCase()
  );
}

// 4
function calculateTotalPrice(foodIds: number[]): number {
  return foods
    .filter((food) => foodIds.includes(food.id))
    .reduce((total, food) => total + food.price, 0);
}

// 5
function getMostExpensiveFood(): Food {
  return foods.reduce((max, food) =>
    food.price > max.price ? food : max
  );
}

console.log(showFoods());
console.log(findAvailableFoods());
console.log(findFoodsByCategory("National"));
console.log(calculateTotalPrice([1, 4, 6]));
console.log(getMostExpensiveFood());




// TASK 2
interface Course {
  id: number;
  title: string;
  teacher: string;
  students: number;
  price?: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: "JavaScript",
    teacher: "Ali",
    students: 150,
    price: 500000,
  },
  {
    id: 2,
    title: "React",
    teacher: "Vali",
    students: 120,
    price: 700000,
  },
  {
    id: 3,
    title: "Node.js",
    teacher: "Ali",
    students: 80,
  },
  {
    id: 4,
    title: "TypeScript",
    teacher: "Hasan",
    students: 60,
    price: 400000,
  },
  {
    id: 5,
    title: "Git & GitHub",
    teacher: "Vali",
    students: 200,
  },
];

// 1
function showCourses(): Course[] {
  return courses;
}

// 2
function findPopularCourses(): Course[] {
  return courses.filter((course) => course.students > 100);
}

// 3
function calculateTotalStudents(): number {
  return courses.reduce(
    (total, course) => total + course.students,
    0
  );
}

// 4
function findCourseByTeacher(teacher: string): Course[] {
  return courses.filter(
    (course) => course.teacher.toLowerCase() === teacher.toLowerCase()
  );
}

// 5
function getFreeCourses(): Course[] {
  return courses.filter((course) => course.price === undefined);
}

console.log(showCourses());
console.log(findPopularCourses());
console.log(calculateTotalStudents());
console.log(findCourseByTeacher("Ali"));
console.log(getFreeCourses());