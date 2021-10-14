
$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
});

/* 
Add JavaScript (in the form of jQuery) to the scripts.js file that will 
activate the Reserve Campsite and Login modals when the 
corresponding button is clicked.
*/


$(function () {
  // Attach Button click event listener 
 $("#reserveButton").click(function(){

      // show Modal
      $('#reservecsModal').modal('show');
 });
});

$(function () {
  // Attach Button click event listener 
 $("#loginButton").click(function(){

      // show Modal
      $('#loginModal').modal('show');
 });
});