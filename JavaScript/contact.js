// Modal
document.addEventListener("DOMContentLoaded", () => {
    const infoModal = new bootstrap.Modal(document.getElementById("infoModal"));
    const submitButton = document.getElementById("submitRequest");

    // Zeige das Modal beim Laden der Seite
    infoModal.show();

    // Event-Listener für den Submit-Button
    submitButton.addEventListener("click", (e) => {
      e.preventDefault(); // Verhindert das Absenden des Formulars
      infoModal.show(); // Modal erneut anzeigen
    });
});

// Zeichen zählen
function CharacterCount() {
    var textarea = document.getElementById('request');
    var charCount = document.getElementById('charCount');
    var remainingChars = 1000 - textarea.value.length;
    charCount.textContent = remainingChars + " characters remaining";
}
