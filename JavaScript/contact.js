//Modal
document.addEventListener("DOMContentLoaded", () => {
    const infoModal = new bootstrap.Modal(document.getElementById("infoModal"));
    const submitButton = document.getElementById("submitRequest");
  
    infoModal.show(); //Modal Anzeige
  
    submitButton.addEventListener("click", (e) => {
      infoModal.show(); //Modal Anzeige
    });
});

// Word Count
function CharacterCount() {
    var textarea = document.getElementById('request');
    var charCount = document.getElementById('charCount');
    var remainingChars = 1000 - textarea.value.length;
    charCount.textContent = remainingChars + " characters remaining";
}
