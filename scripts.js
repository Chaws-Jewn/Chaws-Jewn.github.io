function loadComponent(componentName) {
  fetch(`./components/${componentName}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("main-placeholder").innerHTML = html;
    })
    .catch((err) => {
      console.error("Failed to load HTML:", err);
    });
}

/* INIT */
loadComponent("home");
