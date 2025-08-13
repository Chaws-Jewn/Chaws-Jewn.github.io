const headerComponent = document.getElementById("header");
let isHeaderActive = false;

function loadComponent(componentName, placeholder = "main-placeholder") {
  fetch(`./components/${componentName}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(placeholder).innerHTML = html;

      if (componentName == "projects") {
        loadProjectComponent({
          target: { value: "0" },
        });
      }
    })
    .catch((err) => {
      console.error("Failed to load HTML:", err);
    });
}

function loadProjectComponent(event) {
  const fileName = `projects/${event.target.value}`;
  loadComponent(fileName, "project-placeholder");
}

function toggleMenu() {
  document.querySelector(".header").classList.toggle("active");
  isHeaderActive = !isHeaderActive;
}

function handleToggleMenuBehavior(event) {
  if (!isHeaderActive) return;

  if (!headerComponent.contains(event.target)) {
    toggleMenu();
  }
}

/* INIT */
loadComponent("home");
document.addEventListener("click", handleToggleMenuBehavior);
window.addEventListener("scroll", handleToggleMenuBehavior);
