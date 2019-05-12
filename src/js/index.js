import "../scss/styles.scss";
import 'bootstrap';
import 'popper.js';
import $ from 'jquery';


$(document).ready(function() {
  $(".header").height($(window).height());

  $(".navbar a").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top
      },
      1000
    );
  });
});
