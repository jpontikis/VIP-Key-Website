/* ==================================================
   payment.js (page-payment)
   Κλειδώνει το κουμπί submit μέχρι να συμπληρωθούν ΟΛΑ τα πεδία.
================================================== */
(function () {
  function ready(btn, ok){
    btn.disabled = !ok;
    btn.classList.toggle("is-ready", ok);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("paymentForm");
    var btn  = document.getElementById("submitOrderBtn");
    if (!form || !btn) return;

    function validate(){
      // HTML5 validation: required + email/tel formats
      var ok = form.checkValidity();
      ready(btn, ok);
    }

    form.addEventListener("input", validate);
    form.addEventListener("change", validate);

    form.addEventListener("submit", function(e){
      validate();
      if (btn.disabled){
        e.preventDefault();
        alert("Συμπλήρωσε όλα τα πεδία για να ολοκληρώσεις την παραγγελία.");
      }
    });

    validate();
  });
})();