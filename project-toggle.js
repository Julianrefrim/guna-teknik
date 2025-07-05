document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");
  const panels = document.querySelectorAll(".project-detail-panel");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");

      // Sembunyikan semua panel
      panels.forEach(panel => {
        panel.style.display = "none";
      });

      // Tampilkan yang dipilih
      const targetPanel = document.getElementById(id);
      if (targetPanel) {
        targetPanel.style.display = "block";
        targetPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
