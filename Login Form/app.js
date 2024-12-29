function login() {
  let username = document.getElementById("uname").value;
  let password = document.getElementById("pass").value;

  if (username === "admin" && password === "admin") {
    alert("Login Successful");
  } else {
    let error = document.getElementById("err");
    error.style.display = "block";
    error.style.color = "red";
  }
}
