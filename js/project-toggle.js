document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");
  const panels = document.querySelectorAll(".project-detail-panel");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");

      panels.forEach(panel => {
        panel.style.display = "none";
      });

      const targetPanel = document.getElementById(id);
      if (targetPanel) {
        targetPanel.style.display = "block";
        targetPanel.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
