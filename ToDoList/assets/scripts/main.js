//  Create Date and Time
///////////////////////////////////////////////////
// import { navBarDate } from "../../../Login/assets/scripts/main.js";
// navBarDate;
var now = new Date();

function navBarDate() {
  var date = `${now.toLocaleString("en-NZ", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })}`;
  var time = `${now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  })}`;
  if (time.includes("PM")) {
    time = time.replace("PM", "");
  } else {
    time = time.replace("AM", "");
  }
  document.getElementById("liveDate").innerText = date;
  document.getElementById("liveTime").innerText = time;
}
navBarDate();
setInterval(navBarDate, 1000);

///////////////////////////////////////////////////
var userName = window.localStorage.getItem("userName");
// document.querySelector("h1").innerHTML = `Welcome ${userName}`;
document.querySelector("h1 a").innerHTML = userName;
var btn = document.querySelector(".add-task");
var newTaskDiv = document.querySelector(".new-task");
var tasks = [];
///////////////////////////////////////////////////
btn.onclick = function () {
  var newTask = document.querySelector(".new-task input").value.trim();
  if (newTask === "") {
    alert("You should enter task name");
  } else {
    document.querySelector(".new-task input").value = "";
    var taskDate = now.toLocaleDateString("en-GB");
    var task = {
      taskName: newTask,
      taskDate: taskDate,
      taskState: false,
    };
    createNewTask(newTask, taskDate);
    tasks.push(task);
  }
};
///////////////////////////////////////////////////
function createNewTask(newTask, date) {
  var taskDiv = document.createElement("div");
  var taskInfo = document.createElement("div");
  var taskState = document.createElement("div");
  var taskName = document.createElement("p");
  var taskDate = document.createElement("p");
  var stateButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  taskDiv.classList.add("task");
  taskInfo.classList.add("task-info");
  taskState.classList.add("task-state");
  taskName.classList.add("task-name");
  taskDate.classList.add("task-date");
  stateButton.classList.add("state");
  deleteButton.classList.add("delete");

  stateButton.innerText = "Complete Task";
  deleteButton.innerText = "Delete Task";
  taskName.innerText = newTask;
  taskDate.innerHTML = date;

  newTaskDiv.appendChild(taskDiv);
  taskDiv.appendChild(taskInfo);
  taskDiv.appendChild(taskState);
  taskInfo.appendChild(taskName);
  taskInfo.appendChild(taskDate);
  taskState.appendChild(stateButton);
  taskState.appendChild(deleteButton);

  stateButton.addEventListener("click", changeState);
  deleteButton.addEventListener("click", deleteTask);

  function changeState() {
    stateButton.classList.toggle("complete");
    taskName.classList.toggle("complete-p");
    if (stateButton.classList.contains("complete")) {
      stateButton.innerText = "Resume Work";
    } else {
      stateButton.innerText = "Complete Task";
    }
    taskDate.classList.toggle("complete-date");
  }

  function deleteTask() {
    taskDiv.remove();
  }
}
// var btn = document.querySelector(".state");
// btn.onclick = function changeState() {
//   stateButton.classList.toggle("complete");
//   taskName.classList.toggle("complete-p");
//   if (stateButton.classList.contains("complete")) {
//     stateButton.innerText = "Resume Work";
//   } else {
//     stateButton.innerText = "Complete Task";
//   }
//   taskDate.classList.toggle("complete-date");
// };
// var delBtn = document.querySelector(".delete");
// delBtn.onclick = function deleteTask() {
//   taskDiv.remove();
// };
///////////////////////////////////////////////////
