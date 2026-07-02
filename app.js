const conceptList = document.querySelector("#conceptList");
const taskList = document.querySelector("#taskList");
const exerciseType = document.querySelector("#exerciseType");
const exerciseTitle = document.querySelector("#exerciseTitle");
const exerciseGoal = document.querySelector("#exerciseGoal");
const exerciseSteps = document.querySelector("#exerciseSteps");
const exerciseCode = document.querySelector("#exerciseCode");
const demoRoot = document.querySelector("#demoRoot");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const markDoneButton = document.querySelector("#markDoneButton");
const copyButton = document.querySelector("#copyButton");
const resetDemoButton = document.querySelector("#resetDemoButton");

const storageKey = "modern-js-exercises-done";
const state = {
  activeId: exercises[0].id,
  done: new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"))
};

function saveProgress() { localStorage.setItem(storageKey, JSON.stringify([...state.done])); }
function updateProgress() {
  const doneCount = state.done.size;
  progressText.textContent = doneCount + " of " + exercises.length + " done";
  progressBar.style.width = (doneCount / exercises.length * 100) + "%";
}
function renderNavigation() {
  conceptList.innerHTML = "";
  taskList.innerHTML = "";
  exercises.forEach((exercise) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lesson-button";
    button.innerHTML = "<span>" + exercise.title + "</span><span class=\"done-dot\"></span>";
    if (exercise.id === state.activeId) button.classList.add("active");
    if (state.done.has(exercise.id)) button.classList.add("done");
    button.addEventListener("click", () => { state.activeId = exercise.id; renderApp(); });
    (exercise.type === "Concept" ? conceptList : taskList).appendChild(button);
  });
}
function renderExercise() {
  const exercise = exercises.find((item) => item.id === state.activeId);
  exerciseType.textContent = exercise.type;
  exerciseTitle.textContent = exercise.title;
  exerciseGoal.textContent = exercise.goal;
  exerciseCode.textContent = exercise.code;
  exerciseSteps.innerHTML = "";
  exercise.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    exerciseSteps.appendChild(li);
  });
  markDoneButton.textContent = state.done.has(exercise.id) ? "Done" : "Mark done";
  renderDemo(exercise.id);
}
function renderApp() { renderNavigation(); renderExercise(); updateProgress(); }
markDoneButton.addEventListener("click", () => { state.done.add(state.activeId); saveProgress(); renderApp(); });
copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(exerciseCode.textContent);
  copyButton.textContent = "Copied";
  setTimeout(() => { copyButton.textContent = "Copy"; }, 900);
});
resetDemoButton.addEventListener("click", () => renderDemo(state.activeId));
function panel(html) { demoRoot.innerHTML = "<div class=\"demo-panel\">" + html + "</div>"; }
function list(items) { return "<ul class=\"result-list\">" + items.map((item) => "<li class=\"result-item\">" + item + "</li>").join("") + "</ul>"; }
function field(id, label, value, type) { return "<label class=\"field\"><span>" + label + "</span><input id=\"" + id + "\" type=\"" + (type || "text") + "\" value=\"" + value + "\"></label>"; }
function renderDemo(id) {
  if (id === "login-validation") return loginDemo();
  if (id === "search-users") return searchUsersDemo(false);
  if (id === "filter-tasks") return filterTasksDemo();
  if (id === "sort-projects") return sortProjectsDemo();
  if (id === "pagination") return paginationDemo();
  if (id === "debounced-search") return debouncedSearchDemo();
  if (id === "promise") return promiseDemo(false);
  if (id === "async-await") return promiseDemo(true);
  if (id === "fetch") return fetchDemo();
  if (id === "arrays") return arrayDemo();
  if (id === "map") return panel("<div class=\"output\">[100, 200, 500].map(price => price * 1.18) gives 118, 236, 590</div>");
  if (id === "filter") return filterTasksDemo();
  if (id === "reduce") return panel("<div class=\"output\">Cart total using reduce: Rs 1000</div>");
  if (id === "objects") return panel("<div class=\"output\">Nina uses nina@example.com. Admin: false.</div>");
  if (id === "destructuring") return panel("<div class=\"output\">Dashboard is active. Lead: Asha.</div>");
  if (id === "spread") return panel("<div class=\"output\">Copied skills: HTML, CSS, JavaScript<br>Updated user: Ira is intermediate.</div>");
  return basicDemo();
}
function basicDemo() {
  panel("<div class=\"row\">" + field("first", "First value", "Asha") + field("second", "Second value", "Modern JS") + "</div><div class=\"output\" id=\"basicOut\"></div>");
  const update = () => { document.querySelector("#basicOut").textContent = document.querySelector("#first").value + " is practicing " + document.querySelector("#second").value + "."; };
  document.querySelector("#first").addEventListener("input", update);
  document.querySelector("#second").addEventListener("input", update);
  update();
}
function arrayDemo() {
  const skills = ["HTML", "CSS", "JavaScript"];
  panel("<div class=\"row\"><input id=\"skillInput\" value=\"React\"><button class=\"primary-button\" id=\"addSkill\">Add skill</button></div><ul class=\"pill-list\" id=\"skills\"></ul>");
  const render = () => { document.querySelector("#skills").innerHTML = skills.map((skill) => "<li class=\"pill\">" + skill + "</li>").join(""); };
  document.querySelector("#addSkill").addEventListener("click", () => { const skill = document.querySelector("#skillInput").value.trim(); if (skill) skills.push(skill); render(); });
  render();
}
function promiseDemo(useAwait) {
  panel("<button class=\"primary-button\" id=\"loadAsync\">Run delayed task</button><div class=\"output\" id=\"asyncOutput\">Ready</div>");
  const wait = () => new Promise((resolve) => setTimeout(() => resolve("Lesson loaded after a promise resolved."), 800));
  document.querySelector("#loadAsync").addEventListener("click", async () => {
    document.querySelector("#asyncOutput").textContent = useAwait ? "Awaiting result..." : "Promise pending...";
    if (useAwait) document.querySelector("#asyncOutput").textContent = await wait();
    else wait().then((message) => { document.querySelector("#asyncOutput").textContent = message; });
  });
}
function fetchDemo() {
  panel("<button class=\"primary-button\" id=\"loadPost\">Fetch sample post</button><div class=\"output\" id=\"fetchOutput\">Uses a public test API.</div>");
  document.querySelector("#loadPost").addEventListener("click", async () => {
    const output = document.querySelector("#fetchOutput");
    output.textContent = "Fetching...";
    try { const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); const post = await response.json(); output.textContent = post.title; }
    catch (error) { output.textContent = "Fetch failed. Check your internet connection and try again."; }
  });
}
function loginDemo() {
  panel("<div class=\"row\">" + field("email", "Email", "student@example.com") + field("password", "Password", "secret1", "password") + "<button class=\"primary-button\" id=\"validate\">Validate</button></div><div class=\"output\" id=\"loginOutput\"></div>");
  document.querySelector("#validate").addEventListener("click", () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    document.querySelector("#loginOutput").textContent = !email.includes("@") ? "Enter a valid email." : password.length < 6 ? "Password is too short." : "Login looks good.";
  });
}
function searchUsersDemo() {
  const users = [{name:"Asha", role:"Designer"}, {name:"Ravi", role:"Developer"}, {name:"Mira", role:"Manager"}, {name:"Noor", role:"Tester"}];
  panel("<label class=\"field\"><span>Search users</span><input id=\"userSearch\" placeholder=\"Try ra or mi\"></label><div id=\"userResults\"></div>");
  const render = () => { const q = document.querySelector("#userSearch").value.toLowerCase(); const matches = users.filter((user) => user.name.toLowerCase().includes(q)); document.querySelector("#userResults").innerHTML = list(matches.map((user) => user.name + " - " + user.role)); };
  document.querySelector("#userSearch").addEventListener("input", render); render();
}
function filterTasksDemo() {
  const tasks = [{title:"Read lesson", done:true}, {title:"Solve exercise", done:false}, {title:"Review code", done:true}, {title:"Build task", done:false}];
  panel("<label class=\"field\"><span>Status</span><select id=\"taskStatus\"><option value=\"all\">All</option><option value=\"done\">Done</option><option value=\"open\">Open</option></select></label><div id=\"taskResults\"></div>");
  const render = () => { const status = document.querySelector("#taskStatus").value; const filtered = status === "all" ? tasks : tasks.filter((task) => task.done === (status === "done")); document.querySelector("#taskResults").innerHTML = list(filtered.map((task) => task.title + " - " + (task.done ? "done" : "open"))); };
  document.querySelector("#taskStatus").addEventListener("change", render); render();
}
function sortProjectsDemo() {
  const projects = [{name:"Portfolio", priority:2, deadline:"2026-07-20"}, {name:"Dashboard", priority:5, deadline:"2026-07-12"}, {name:"Landing page", priority:3, deadline:"2026-07-08"}];
  panel("<label class=\"field\"><span>Sort by</span><select id=\"sortBy\"><option value=\"priority\">Priority</option><option value=\"deadline\">Deadline</option></select></label><div id=\"projectResults\"></div>");
  const render = () => { const sortBy = document.querySelector("#sortBy").value; const sorted = [...projects].sort((a, b) => sortBy === "priority" ? b.priority - a.priority : new Date(a.deadline) - new Date(b.deadline)); document.querySelector("#projectResults").innerHTML = list(sorted.map((project) => project.name + " - P" + project.priority + " - " + project.deadline)); };
  document.querySelector("#sortBy").addEventListener("change", render); render();
}
function paginationDemo() {
  const items = Array.from({ length: 18 }, (_, index) => "Lesson item " + (index + 1)); let page = 1; const pageSize = 5; const totalPages = Math.ceil(items.length / pageSize);
  panel("<div class=\"row\"><button class=\"small-button\" id=\"prevPage\">Previous</button><span id=\"pageLabel\"></span><button class=\"small-button\" id=\"nextPage\">Next</button></div><div id=\"pageResults\"></div>");
  const render = () => { const start = (page - 1) * pageSize; document.querySelector("#pageResults").innerHTML = list(items.slice(start, start + pageSize)); document.querySelector("#pageLabel").textContent = "Page " + page + " of " + totalPages; };
  document.querySelector("#prevPage").addEventListener("click", () => { page = Math.max(1, page - 1); render(); });
  document.querySelector("#nextPage").addEventListener("click", () => { page = Math.min(totalPages, page + 1); render(); }); render();
}
function debouncedSearchDemo() {
  const users = ["Asha", "Ravi", "Mira", "Noor", "Dev", "Ira"];
  panel("<label class=\"field\"><span>Debounced search</span><input id=\"debouncedInput\" placeholder=\"Type a name\"></label><div class=\"output\" id=\"debounceStatus\">Search runs after you pause typing.</div><div id=\"debouncedResults\"></div>");
  const debounce = (callback, delay) => { let timeoutId; return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => callback(...args), delay); }; };
  const search = (query) => { const matches = users.filter((user) => user.toLowerCase().includes(query.toLowerCase())); document.querySelector("#debounceStatus").textContent = "Searched for \"" + query + "\""; document.querySelector("#debouncedResults").innerHTML = list(matches); };
  const debounced = debounce(search, 500);
  document.querySelector("#debouncedInput").addEventListener("input", (event) => { document.querySelector("#debounceStatus").textContent = "Waiting for pause..."; debounced(event.target.value); }); search("");
}
renderApp();
