$(function() {
  $(document).foundation();

  /*
    Anchorless Page Scroll
    ref: http://jsfiddle.net/BjpWB/4/
    HTML syntax: <a name="id5"/>
  */
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $("#link").click(function() {
    scrollToAnchor('id3');
  });
});
