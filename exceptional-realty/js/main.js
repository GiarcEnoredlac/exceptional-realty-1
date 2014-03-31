$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });

  ///////////// Contact Form Validation ///////

  function validateName(fullname) {
    if(fullname.length > 2){
      //allsgood!
      $('#fullname').removeClass('error');
      $('#fullname-error').hide();
      return true;
    }
    else {
      //fail! 
      $('#fullname').addClass('error');
      $('#fullname-error').show();
      return false;
    }
  }

  function validateEmail(email) {
    var re = ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$ 

    if (re.test(email)) {
      $('#email').removeClass('error');
      $('#email-error').hide();
      return true;
    }
    else {
      $('#email').addClass('error');
      $('#email-error').show();
      return false;
    }
  }

  function validateMessage(message) {
    if (message.length > 0) {
      $('#message').removeClass('error');
      $('#message-error').hide();
      return true;

    }
    else {
      $('#message').addClass('error');
      $('#message-error').show(); 
      return false;
    }
  }

  $('form').submit(function(event){

    var fullname = $('#fullname').val(),
        email = $('#email').val(),
        message = $.trim($('#message').val()),

    if (validateName(fullname) & validateEmail(email) & validateMessage(message)) {
        return true; //submit form
      }
      else {
        event.preventDefault(); //prevent form from submitting!

    }

     

  });

});

