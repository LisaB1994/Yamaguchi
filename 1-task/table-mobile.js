const tableMob = document.querySelector(".content__table-mobile");
const buttonUpMob = document.querySelector(".content__button-up-mob");
const buttonDownMob = document.querySelector(".content__button-down-mob");
let driveMob = 0;

buttonUpMob.addEventListener("click", function () {
  if (driveMob === 0 || driveMob === 16) {
    driveMob = 3;
    tableMob.style.transform = `scale(1.7, 1.7) translateY(${driveMob}px)`;
  } else if (driveMob === 3) {
    driveMob = -12;
    tableMob.style.transform = `scale(1.7, 1.7) translateY(${driveMob}px)`;
  }
});

buttonDownMob.addEventListener("click", function () {
  if (driveMob === -12) {
    driveMob = 3;
    tableMob.style.transform = `scale(1.7, 1.7) translateY(${driveMob}px)`;
  } else if (driveMob === 3) {
    driveMob = 16;
    tableMob.style.transform = `scale(1.7, 1.7) translateY(${driveMob}px)`;
  }
});
