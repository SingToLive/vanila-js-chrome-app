const title = document.getElementById("title");

function handleTitleClick() {
    title.style.color = "blue"
}

function handleMouseEnter() {
    title.innerText = "Here is mouse";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone"
}


// title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave)

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

window.addEventListener("resize", handleWindowResize)