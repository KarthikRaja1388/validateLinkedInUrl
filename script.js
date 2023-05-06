let btnValidate = document.querySelector(".btn-validate");
let urlInput = document.querySelector(".url");
let display = document.querySelector(".display");
const regex =
  /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

btnValidate.addEventListener("click", () => {
  let url = urlInput.value;
  if (regex.test(url)) {
    display.textContent = "Valid Url";
    display.style.color = "green";
  } else {
    display.textContent = "Invalid Url";
    display.style.color = "red";
  }
});
