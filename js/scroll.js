///////////////////////// Scroll for all URLS /////////////////////////

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

///////////////////////// Progress Bars /////////////////////////

//function move() {
//  var elem = document.getElementById("htmlBar");   
//  var width = 0;
//  var id = setInterval(frame, 30);
//  function frame() {
//    if (width >= 90) {
//      clearInterval(id);
//    } else {
//      width++; 
//      elem.style.width = width + '%'; 
//     document.getElementById("label").innerHTML = width * 1  + '%';
//    }
//  }
//}


   
///////////////////////// Scroll for About /////////////////////////


$(document).ready(function() {
    $("#aboutShow").hide(); //hide your div initially
    var topOfOthDiv = $("#aboutAnchor").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#aboutShow").show(600);       
            //reached the desired point -- show div
        }
    });
});



    
