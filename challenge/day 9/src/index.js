const clockTitle = document.querySelector(".js-clock");

function DDay() {
  const setDate = new Date("2022-12-25T00:00:00+0900");

  const now = new Date();
  const diff = setDate.getTime() - now.getTime();

  const day = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minute = String(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const second = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

DDay();
setInterval(DDay, 1000);
