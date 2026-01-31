/* ==================================================
   payment.js
   - Ενεργοποιεί το κουμπί "Ολοκλήρωση Παραγγελίας"
     ΜΟΝΟ όταν συμπληρωθούν ΟΛΑ τα πεδία.
================================================== */
(function () {
  function setState(btn, ok){
    btn.disabled = !ok;
    btn.style.opacity = ok ? "1" : ".65";
    btn.style.cursor = ok ? "pointer" : "not-allowed";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("paymentForm");
    var btn = document.getElementById("submitOrderBtn");
    if (!form || !btn) return;

    function validate(){
      // Όλα required πεδία πρέπει να έχουν τιμή
      var required = form.querySelectorAll("[required]");
      var ok = true;
      required.forEach(function(el){
        if (!el.value || !el.value.trim()) ok = false;
      });
      setState(btn, ok);
    }

    form.addEventListener("input", validate);
    form.addEventListener("change", validate);

    // Τελικός έλεγχος πριν submit
    form.addEventListener("submit", function(e){
      validate();
      if (btn.disabled){
        e.preventDefault();
        alert("Συμπλήρωσε όλα τα πεδία πριν ολοκληρώσεις την παραγγελία.");
      }
    });

    validate();
  });
})();