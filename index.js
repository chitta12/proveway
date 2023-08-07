document.addEventListener("DOMContentLoaded", uncheck);
document.addEventListener("change", handleChange);

function uncheck() {
  const radioBtn = document.querySelectorAll(".radio-btn");
  document.getElementById("child").style.display = "none";
  radioBtn.forEach((btn) => {
    btn.checked = false;
  });
}
function handleChange() {
  const radioBtn = document.querySelectorAll(".radio-btn");
  const child = document.getElementById("child");
  radioBtn.forEach((btn) => {
    if (btn.checked) {
      document
        .getElementById(`fieldset_${btn.value}`)
        .classList.add("extStyle");
      document.getElementById(`parent_${btn.value}`).appendChild(child);
      child.style.display = "block";
    } else {
      document
        .getElementById(`fieldset_${btn.value}`)
        .classList.remove("extStyle");
      if (document.getElementById(`parent_${btn.value}`).firstElementChild) {
        document.getElementById(`parent_${btn.value}`).removeChild(child);
      }
    }
  });
}
