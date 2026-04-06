const navButtons = Array.from(document.querySelectorAll(".nav-button"));
const panels = Array.from(document.querySelectorAll(".panel"));
const ackButton = document.getElementById("ack-button");

function activatePanel(name) {
  navButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.panel === name);
  });

  panels.forEach(panel => {
    panel.classList.toggle("active", panel.id === `panel-${name}`);
  });
}

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    activatePanel(button.dataset.panel);
  });
});

ackButton.addEventListener("click", () => {
  activatePanel("links");
});
