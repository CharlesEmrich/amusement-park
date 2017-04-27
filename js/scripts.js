$(function() {
  $(".height-form").change(function() {
    var userFeet   = parseInt($("#feet").val());
    var userInches = parseInt($("#inches").val());

    if ((userFeet === 4 && userInches >= 8) || (userFeet > 4)) {
      // show Majestic
      console.log("Majestic = Yes.");
      $("#majestic").slideDown();
    } else {
      $("#majestic").slideUp();
    }

    if ((userFeet === 5 && userInches >= 2) || (userFeet > 5)) {
      // show Tolerable
      console.log("Tolerable = Yes.");
      $("#tolerable").slideDown();
    } else {
      $("#tolerable").slideUp();
    }

    if (
      ((userFeet === 5 && userInches >= 5) || (userFeet > 5))
       &&
       ((userFeet === 6 && userInches <= 5) || (userFeet < 6))
       ) {
      // show Terrifying
      console.log("Terrifying = Yes.");
      $("#terrifying").slideDown();
    } else {
      $("#terrifying").slideUp();
    }

  });
});
