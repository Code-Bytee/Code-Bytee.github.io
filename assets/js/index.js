function quote(){
  $(document.load("/Quote"));
}
$(window).on('load', function() {
  $('.loader').delay(100).fadeOut('slow', function() {
    $(this).remove();
  });
});