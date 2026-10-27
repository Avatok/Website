"use strict";
function calculateAge(date = new Date()) {
  const year = date.getFullYear();
  return (
    year -
    2004 -
    (date.getMonth() + 1 < 12 ||
    (date.getMonth() + 1 === 12 && date.getDate() < 20)
      ? 1
      : 0)
  );
}
function refreshDates() {
  document.querySelectorAll(".age").forEach((el) => {
    el.textContent = calculateAge();
  });
  document.querySelectorAll(".year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}
refreshDates();
const menu = document.getElementById("menu");
const mobile = document.getElementById("mobile");
if (menu && mobile) {
  menu.addEventListener("click", () => {
    const opening = mobile.hidden;
    mobile.hidden = !opening;
    menu.setAttribute("aria-expanded", String(opening));
    menu.setAttribute("aria-label", opening ? "Menü schließen" : "Menü öffnen");
    menu.textContent = opening ? "✕" : "☰";
  });
  mobile.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      mobile.hidden = true;
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Menü öffnen");
      menu.textContent = "☰";
    }),
  );
}
// Aktualisiert das Alter auch dann, wenn die Seite über Mitternacht geöffnet bleibt.
setInterval(refreshDates, 60 * 60 * 1000);

// Portfolio category filters (equivalent to the original Isotope filters).
document
  .querySelectorAll("#portfolio-filters [data-filter]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      document
        .querySelectorAll("#portfolio-filters [data-filter]")
        .forEach((b) => {
          const active = b === button;
          b.classList.toggle("active", active);
          b.setAttribute("aria-pressed", String(active));
        });
      document
        .querySelectorAll("#portfolio-grid .portfolio-item")
        .forEach((item) => {
          item.hidden =
            selected !== "all" && item.dataset.category !== selected;
        });
    });
  });

// Videos nur nach ausdrücklichem Klick auf den Platzhalter laden.
document.addEventListener("click", function (event) {
  const button = event.target.closest("[data-load-youtube]");
  if (!button) return;
  const holder = button.closest("[data-video-id]");
  if (!holder) return;
  const id = holder.getAttribute("data-video-id");
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
  const frame = document.createElement("iframe");
  frame.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
  frame.title = "YouTube-Videoplayer";
  frame.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  frame.setAttribute("loading", "lazy");
  holder.replaceChildren(frame);
});
