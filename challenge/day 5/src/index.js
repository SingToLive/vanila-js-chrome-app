const BGC = document.querySelector("body");
// const size = document.getElementById("size");

window.onresize = function (event) {
  const innerWidth = window.innerWidth;
  // size.textContent = innerWidth;
  // const S = "Small"
  // const MS = "MoreSmall"
  if (innerWidth < 1200 && innerWidth >= 700) {
    BGC.className = "Small";
  } else if (innerWidth < 700) {
    BGC.className = "MoreSmall";
  } else {
    BGC.className = "Origin";
  }
};

// BGC.addEventListener("resize", ChangeColor);
