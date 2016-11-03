$(document).ready(function() {
  var emailFilled = 0;
  var pwdFilled = 0;
  $('input[type="submit"]').prop('disabled', true);
  $('input[type="email"]').keyup(function() {
    if($(this).val() != '') {
      ++emailFilled;
    }

    if (emailFilled > 0 && pwdFilled > 0) {
      $('input[type="submit"]').prop('disabled', false); 
    }
  });

  $('input[type="password"]').keyup(function() {
    if($(this).val() != '') {
      ++pwdFilled;
    }

    if (emailFilled > 0 && pwdFilled > 0) {
      $('input[type="submit"]').prop('disabled', false); 
    }
  });
 });

function loginToHome() {
  document.location.href = ("homepage.html");
}