$(document).ready(function () {

    var btnA = false;
    $("#btnA").on("click", function (event) {
      if (btnA) {
        $("#infoA").addClass("hidden");
        this.innerText="See More";
        btnA = false;
      } else {
        $("#infoA").removeClass("hidden");
        this.innerText="See Less";
        btnA = true;
      }
    });
  
    var btnB = false;
    $("#btnB").on("click", function (event) {
      if (btnB) {
        $("#infoB").addClass("hidden");
        this.innerText="See More";
        btnB = false;
      } else {
        $("#infoB").removeClass("hidden");
        this.innerText="See Less";
        btnB = true;
      }
    });
  
    var btnC = false;
    $("#btnC").on("click", function (event) {
      if (btnC) {
        $("#infoC").addClass("hidden");
        this.innerText="See More";
        btnC = false;
      } else {
        $("#infoC").removeClass("hidden");
        this.innerText="See Less";
        btnC = true;
      }
    });
  
    /* w3schools, "Try jquery eff animate smoothscroll," 2017. [Online]. Available: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll. [Accessed 22 05 2017]. */
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  });