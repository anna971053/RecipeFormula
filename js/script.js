function channel_link(){
    window.open("https://www.youtube.com/watch?v=pJu4OCOKkSs");
}
function channel_link2(){
    window.open("https://www.youtube.com/watch?v=vZLwI_JlLS8&t=52s");
}
(function($) { // Begin jQuery
    $(function() { // DOM ready
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
  })(jQuery); // end jQuery