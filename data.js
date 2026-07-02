const exercises = [
  {
    "id": "variables",
    "type": "Concept",
    "title": "Variables",
    "goal": "Practice storing values with let and const, then updating only values that should change.",
    "steps": [
      "Create constants for name and course.",
      "Create a let variable for completed lessons.",
      "Increase the number and print a sentence."
    ],
    "code": "const name = \"Asha\";\nconst course = \"Modern JavaScript\";\nlet completed = 2;\n\ncompleted = completed + 1;\nconsole.log(name + \" completed \" + completed + \" lessons in \" + course);"
  },
  {
    "id": "functions",
    "type": "Concept",
    "title": "Functions",
    "goal": "Write reusable blocks of logic that accept inputs and return useful results.",
    "steps": [
      "Create a calculateTotal function.",
      "Pass price and quantity as parameters.",
      "Return the final total."
    ],
    "code": "function calculateTotal(price, quantity) {\n  return price * quantity;\n}\n\nconsole.log(calculateTotal(299, 3));"
  },
  {
    "id": "arrow-functions",
    "type": "Concept",
    "title": "Arrow Functions",
    "goal": "Use compact function syntax for small transformations and callbacks.",
    "steps": [
      "Create an arrow function.",
      "Return a formatted name.",
      "Try a one-line return."
    ],
    "code": "const formatName = (firstName, lastName) => firstName + \" \" + lastName;\nconsole.log(formatName(\"Mira\", \"Kapoor\"));"
  },
  {
    "id": "template-literals",
    "type": "Concept",
    "title": "Template Literals",
    "goal": "Build readable strings with backticks and placeholders.",
    "steps": [
      "Create name, role, and score variables.",
      "Place them inside a template literal.",
      "Print a clean sentence."
    ],
    "code": "const name = \"Ravi\";\nconst role = \"Frontend Developer\";\nconst score = 92;\n\nconst message = `${name} is a ${role} with a score of ${score}.`;\nconsole.log(message);"
  },
  {
    "id": "objects",
    "type": "Concept",
    "title": "Objects",
    "goal": "Group related data together and access values with dot notation.",
    "steps": [
      "Create a user object.",
      "Add name, email, and isAdmin.",
      "Read values to create a summary."
    ],
    "code": "const user = {\n  name: \"Nina\",\n  email: \"nina@example.com\",\n  isAdmin: false\n};\n\nconsole.log(user.name);"
  },
  {
    "id": "arrays",
    "type": "Concept",
    "title": "Arrays",
    "goal": "Store lists of values and access them by position.",
    "steps": [
      "Create an array of skills.",
      "Add a new skill with push.",
      "Read the first and last skill."
    ],
    "code": "const skills = [\"HTML\", \"CSS\", \"JavaScript\"];\nskills.push(\"React\");\n\nconsole.log(skills[0]);\nconsole.log(skills[skills.length - 1]);"
  },
  {
    "id": "map",
    "type": "Concept",
    "title": "map()",
    "goal": "Transform every item in an array into a new array.",
    "steps": [
      "Start with prices.",
      "Use map to add tax.",
      "Keep the original array unchanged."
    ],
    "code": "const prices = [100, 200, 500];\nconst pricesWithTax = prices.map((price) => price * 1.18);\n\nconsole.log(pricesWithTax);"
  },
  {
    "id": "filter",
    "type": "Concept",
    "title": "filter()",
    "goal": "Keep only array items that match a condition.",
    "steps": [
      "Create an array of tasks.",
      "Use filter to keep incomplete tasks.",
      "Render the remaining titles."
    ],
    "code": "const tasks = [\n  { title: \"Learn variables\", done: true },\n  { title: \"Practice arrays\", done: false }\n];\n\nconst openTasks = tasks.filter((task) => task.done === false);\nconsole.log(openTasks);"
  },
  {
    "id": "reduce",
    "type": "Concept",
    "title": "reduce()",
    "goal": "Turn an array into one final value, such as a total.",
    "steps": [
      "Create cart items.",
      "Use reduce to calculate total.",
      "Return the running total."
    ],
    "code": "const cart = [\n  { name: \"Notebook\", price: 80 },\n  { name: \"Pen\", price: 20 },\n  { name: \"Bag\", price: 900 }\n];\n\nconst total = cart.reduce((sum, item) => sum + item.price, 0);\nconsole.log(total);"
  },
  {
    "id": "destructuring",
    "type": "Concept",
    "title": "Destructuring",
    "goal": "Pull values out of objects and arrays into clear variable names.",
    "steps": [
      "Create a project object.",
      "Extract title and status.",
      "Extract the first team member."
    ],
    "code": "const project = { title: \"Dashboard\", status: \"active\", team: [\"Asha\", \"Dev\"] };\nconst { title, status } = project;\nconst [lead] = project.team;\n\nconsole.log(title + \" is \" + status + \". Lead: \" + lead);"
  },
  {
    "id": "spread",
    "type": "Concept",
    "title": "Spread Operator",
    "goal": "Copy and combine arrays or objects without mutating originals.",
    "steps": [
      "Copy an array with spread.",
      "Add a new item while copying.",
      "Update an object by creating a new one."
    ],
    "code": "const oldSkills = [\"HTML\", \"CSS\"];\nconst newSkills = [...oldSkills, \"JavaScript\"];\n\nconst user = { name: \"Ira\", level: \"beginner\" };\nconst upgradedUser = { ...user, level: \"intermediate\" };"
  },
  {
    "id": "promise",
    "type": "Concept",
    "title": "Promise",
    "goal": "Represent work that finishes later, then handle success with then().",
    "steps": [
      "Create a promise.",
      "Resolve after a short delay.",
      "Use then to receive the result."
    ],
    "code": "const loadUser = new Promise((resolve) => {\n  setTimeout(() => resolve({ name: \"Sam\" }), 800);\n});\n\nloadUser.then((user) => console.log(user.name));"
  },
  {
    "id": "async-await",
    "type": "Concept",
    "title": "async/await",
    "goal": "Write promise-based code in a readable top-to-bottom style.",
    "steps": [
      "Create an async function.",
      "Await a promise inside it.",
      "Use try/catch for errors."
    ],
    "code": "async function runLesson() {\n  const result = await Promise.resolve(\"Async lesson loaded\");\n  console.log(result);\n}\n\nrunLesson();"
  },
  {
    "id": "fetch",
    "type": "Concept",
    "title": "Fetch API",
    "goal": "Request data from an API and turn the response into JavaScript objects.",
    "steps": [
      "Call fetch with a URL.",
      "Await response.json().",
      "Render returned data."
    ],
    "code": "async function loadPost() {\n  const response = await fetch(\"https://jsonplaceholder.typicode.com/posts/1\");\n  const post = await response.json();\n  console.log(post.title);\n}\n\nloadPost();"
  },
  {
    "id": "login-validation",
    "type": "Mini task",
    "title": "Login Validation",
    "goal": "Validate an email and password before allowing a user to log in.",
    "steps": [
      "Check that email includes @.",
      "Check that password has at least six characters.",
      "Show success or a helpful error."
    ],
    "code": "function validateLogin(email, password) {\n  if (!email.includes(\"@\")) return \"Enter a valid email.\";\n  if (password.length < 6) return \"Password is too short.\";\n  return \"Login looks good.\";\n}"
  },
  {
    "id": "search-users",
    "type": "Mini task",
    "title": "Search Users",
    "goal": "Search a user list with filter and case-insensitive matching.",
    "steps": [
      "Store users in an array of objects.",
      "Use filter to match names.",
      "Render matching users."
    ],
    "code": "function searchUsers(users, query) {\n  return users.filter((user) =>\n    user.name.toLowerCase().includes(query.toLowerCase())\n  );\n}"
  },
  {
    "id": "filter-tasks",
    "type": "Mini task",
    "title": "Filter Tasks",
    "goal": "Filter task objects by status using a dropdown value.",
    "steps": [
      "Keep all tasks for all.",
      "Filter by done or open status.",
      "Render matching tasks."
    ],
    "code": "function filterTasks(tasks, status) {\n  if (status === \"all\") return tasks;\n  const shouldBeDone = status === \"done\";\n  return tasks.filter((task) => task.done === shouldBeDone);\n}"
  },
  {
    "id": "sort-projects",
    "type": "Mini task",
    "title": "Sort Projects",
    "goal": "Sort project objects by priority or deadline without changing the original array.",
    "steps": [
      "Copy the array with spread.",
      "Use sort on the copy.",
      "Compare numbers or dates."
    ],
    "code": "function sortProjects(projects, sortBy) {\n  return [...projects].sort((a, b) => {\n    if (sortBy === \"priority\") return b.priority - a.priority;\n    return new Date(a.deadline) - new Date(b.deadline);\n  });\n}"
  },
  {
    "id": "pagination",
    "type": "Mini task",
    "title": "Pagination",
    "goal": "Show a small page of items from a larger list.",
    "steps": [
      "Choose page and page size.",
      "Calculate the start index.",
      "Use slice for visible items."
    ],
    "code": "function paginate(items, page, pageSize) {\n  const start = (page - 1) * pageSize;\n  return items.slice(start, start + pageSize);\n}"
  },
  {
    "id": "debounced-search",
    "type": "Mini task",
    "title": "Debounced Search",
    "goal": "Wait until the user pauses typing before running search.",
    "steps": [
      "Store a timeout id.",
      "Clear previous timeout on each keypress.",
      "Run search after the delay."
    ],
    "code": "function debounce(callback, delay) {\n  let timeoutId;\n  return (...args) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => callback(...args), delay);\n  };\n}"
  }
];
