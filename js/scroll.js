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


///////////////////////// Scroll for About /////////////////////////


//$(document).ready(function() {
//    $("#aboutShow").hide(); //hide your div initially
//    var topOfOthDiv = $("#aboutAnchor").offset().top;
//    $(window).scroll(function() {
//        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
//            $("#aboutShow").show(600);       
//            //reached the desired point -- show div
//        }
//    });
//});


///////////////////////// Progress Bars /////////////////////////



   $(function() {
    
    var $meters = $(".meter > span");
    var $section = $('#third');
    var $queue = $({});
    
    function loadDaBars() {
				$(".meter > span").each(function() {
					$(this)
						.data("origWidth", $(this).width())
						.width(0)
						.animate({
							width: $(this).data("origWidth")
						}, 1200);
				});
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset() - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
    
});


///////////////////////// Mobile Nav /////////////////////////    

$(document).ready(function(){ 
    $('.mobileNav ul').hide();
    $("#mobileMenu").click(function(){
        $(".mobileNav ul").slideToggle('medium');
    });
});
