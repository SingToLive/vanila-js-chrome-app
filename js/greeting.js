const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a")
const gretting = document.querySelector("#gretting")

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
};

function onClick(event) {
    event.preventDefault();
    console.dir(event)
};

function paintGreetings(username){
    gretting.innerText = `Hello ${username}`;
    gretting.classList.remove("hidden");
}

// link.addEventListener("click", onClick)

const savedUsername = localStorage.getItem("username")

if(savedUsername===null){
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit", onSubmit);
} else{
    paintGreetings(savedUsername)
}