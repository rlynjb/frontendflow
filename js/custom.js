//$(function() {
  //$(document).foundation();

  /*
    Regex to get string bet strings
    ref:
    http://stackoverflow.com/questions/413071/regex-to-get-string-between-curly-braces-i-want-whats-between-the-curly-brace

    ([^{]*?)(?=\})
  */

  /*
    Check if element is visible in viewport
    ref: http://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
  */


  /*
    AJAX usage:
    - send data and pull data to display
    - php form inteferance
  */
  // Contact Form ajax
  /*
  $('#contact-form')
  .on('submit', function(e) {
    e.preventDefault();
  })
  .on('formvalid.zf.abide', function(e, frm) {
    var theForm = $(this);

    // Insert product registation data to database
    // and send a copy to email
    $.ajax({
      data: theForm.serialize(),
      type: 'POST',
      url: 'insertcontact.php',
      success: function(a, b, c) {
        $('.form-wrapper').hide();
        $('.thank-you-message').show();
      },
      error: function(a,b,c) {
        $('.form-wrapper').hide();
        $('.error-message').show();
      }
    });
  });*/// end - on click


  /*
    Anchorless Page Scroll
    ref: http://jsfiddle.net/BjpWB/4/
    HTML syntax: <a name="id5"/>
  */
  /*
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $("#link").click(function() {
    scrollToAnchor('id3');
  });
  */


  /*
    Stops vimeo video when modal is closed
  */
  /*
  var videoModal = $('#videoModal iframe');
  var videoSrc = videoModal.attr('src');

  // when user clicks on close btn
  $('#videoModal .close-button').click(function() {
    videoModal.attr('src', '');
    videoModal.attr('src', videoSrc);
  });

  // when user clicks on modal background
  $('#videoModal').on('closed.zf.reveal', function() {
    videoModal.attr('src', '');
    videoModal.attr('src', videoSrc);
  });
  */


  /*
    Use window resize for realtime viewport detection
    Disable detail modal on medium and up window screen
  */
  /*
  $(window).resize(function() {
    if( $(this).width() > 639 && $('#detailModal[aria-hidden="false"]') ) {
      $('#detailModal').foundation('close');
    }
  });
  */


  /*
    checkbox group
    ref: http://foundation.zurb.com/forum/posts/1967-abide-validation-on-checkbox-doesnt-group
    ref: http://stackoverflow.com/questions/26890023/display-error-if-no-checkbox-is-checked-in-checkbox-group
  */
  /*
  Foundation.Abide.defaults.validators['checkbox_limit'] = function($el, required, parent) {
    var group = parent.closest('.checkbox-group'),
        max = group.attr('data-checkbox-validator-max'),
        checked = group.find(':checked').length;

    if (checked <= max && checked != 0) {
      group.find('legend').css({
        color: '#676767'
      });
      return true;
    } else {
      group.find('legend').css({
        color: '#ef4d4d'
      });
      return false;
    }
  }
  */

//});
