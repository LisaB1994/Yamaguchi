const table = document.querySelector(".content__table");
const buttonUp = document.querySelector(".content__button-up");
const buttonDown = document.querySelector(".content__button-down");
let drive = 0;

buttonUp.addEventListener("click", function () {
  if (drive === 0) {
    drive = "-32";
    table.style.transform = `scale(1.5, 1.5) translateY(${drive}px)`;
  } else if (drive < 0) {
    drive = "-60";
    table.style.transform = `scale(1.5, 1.5) translateY(${drive}px)`;
  }
});

buttonDown.addEventListener("click", function () {
  if (drive === "-60") {
    drive = "-32";
    table.style.transform = `scale(1.5, 1.5) translateY(${drive}px)`;
  } else if (drive === "-32") {
    drive = 0;
    table.style.transform = "scale(1.5, 1.5)";
  }
});
