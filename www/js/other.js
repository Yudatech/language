// Only two languages are used.
/*
html
 <button type="button" class="btn btn-info" id="la">
        <span class="lg_bt d-none">SV</span>
        <span class="lg_bt">EN</span>
      </button>
*/

$("#la").click(function () {
    $(".lg_bt").toggleClass("d-none");
    let lgNotThisOne= document.querySelector('.d-none').textContent; 
    
});