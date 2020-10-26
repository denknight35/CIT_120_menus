function app() {
  var pages = ["home", "about", "interact"];
  init();
  nav(pages);
  renderPage("home");
}

function init() {
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
}

function nav(list) {
  for (var i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    const val = list[i];
    button.innerHTML = list[i];
    button.addEventListener("click", function() {
      renderPage(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}

function renderPage(page) {
  if (page === "home") {
    home();
  } else if (page === "about") {
    about();
  } else if (page === "interact") {
    interact();
  }
}

function home() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "Home";
}

function about() {
    var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "About";
}

function interact() {
   var button2 = document.createElement("button");
  button2.addEventListener("click" , function (){
    
  })
}

app();