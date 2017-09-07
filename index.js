window.onload = () => {

  let nav = document.getElementById("page-nav");

  setTimeout(() => {
    nav.style.visibility = "visible";
  }, 700);

  addListeners();
}

function addListeners() {
  let content = document.getElementById("content"),
        about = document.getElementById("about"),
     aboutBox = document.getElementById("about-box");

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      aboutBox.className += " toggle-close";
      workBox.className = "work-box";
      setTimeout(()=> {
        aboutBox.className = "about-box";
      }, 300);
      content.className = "content";
    }
  });

  // Listener for About element
  about.addEventListener("click", (e) => {
    aboutBox.className += " toggle";
  });

  let workOpen = document.getElementById("work"),
       workBox = document.getElementById("work-box");
  workOpen.addEventListener("click", (e) => {
    workBox.className += " toggle";
    content.className += " hide-overflow";
  });

  let escAbout = aboutBox.children[0],
      escWork = workBox.children[0];
  // Listener for About element, close action
  escAbout.addEventListener("click", (e) => {
    aboutBox.className += " toggle-close";
    setTimeout(()=> {
      aboutBox.className = "about-box";
    }, 300)
  });

  escWork.addEventListener("click", (e) => {
    workBox.className = "work-box";
    content.className = "content";
  });

}
