const form = document.getElementById("form");
const email = document.getElementById("email");
const small = document.querySelector("small");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValidation = email.value;

  // check if it is a valid email
  if (!validateEmail(emailValidation)) {
    form.classList.add("error");
    small.style.display = "flex";
  } else {
    form.classList.remove("error");
    small.style.display = "none";
    document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0 auto;"><h1>Thank you!</h1></div>`;
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
