$(function() {
  $(".height-form").change(function() {
    var userFeet   = parseInt($("#feet").val());
    var userInches = parseInt($("#inches").val());

    if ((userFeet === 4 && userInches >= 8) || (userFeet > 4)) {
      // show Majestic
      console.log("Majestic = Yes.");
    }
    if ((userFeet === 5 && userInches >= 2) || (userFeet > 6)) {
      // show Tolerable
      console.log("Tolerable = Yes.");
    }
    if ((userFeet === 5 && userInches >= 5) || (userFeet === 6 && userInches <= 5)) {
      // show Terrifying
      console.log("Terrifying = Yes.");
    }

  });
});
