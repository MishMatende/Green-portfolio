// ...........................DYNAMIC YEAR...........................
const year = new Date().getFullYear();

document.getElementById("copyright-span").innerHTML = year;

// ...................................FORM TO GOOGLE SHEETS........................
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyZZ43C6DcYzL__zU8q3ndOc9gWEKcAPuWKhzQiQe6HJjqXZ_me-lgGORUbxx0SB3Bc/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

const button = document.getElementById("submission");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  button.innerHTML = "Loading ...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 1000);
      form.reset();
      button.innerHTML = "submit";
    })
    .catch((error) => console.error("Error!", error.message));
});
