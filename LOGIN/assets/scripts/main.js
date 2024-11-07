// live date
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
//--------------------------------------------------------------------------------------------------
// email validation

function validateFormEmail() {
  var emailInput = document.getElementById("email").value.trim();
  if (emailInput === "") {
    alert("Email is required.");
    return false;
  }

  if (!emailInput.endsWith("@gmail.com")) {
    alert("Email must end with '@gmail.com'.");
    return false;
  }

  return true;
}

//--------------------------------------------------------------------------------------------------
// fullname validation
function validateFormName() {
  var nameInput = document.getElementById("fullname").value.trim();

  if (nameInput === "") {
    alert("name is required.");
    return false;
  }

  return true;
}
//--------------------------------------------------------------------------------------------------
// password validation
function validateFormPassword() {
  var passwordInput = document.getElementById("password").value.trim();

  if (passwordInput === "") {
    alert("password is required.");
    return false;
  }

  return true;
}
//--------------------------------------------------------------------------------------------------
// password toggle
document.addEventListener("DOMContentLoaded", function () {
  var togglePassword = document.querySelector(".password-wrapper img");
  var passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});

//----------------------------------------------------------------------------------------------------
//go to other page after submit
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (
      validateFormEmail() === true &&
      validateFormName() === true &&
      validateFormPassword() === true
    ) {
      var userName = document.querySelector("[name='fullname']").value.trim();
      window.localStorage.setItem("userName", userName);
      window.location.href = "../../../ToDoList/list.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
