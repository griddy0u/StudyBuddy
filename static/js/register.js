$(document).ready(function() {
  var emailFilled = 0;
  var usernameFilled = 0;
  var pwdFilled = 0;
  $((document).getElementById("signup")).prop('disabled', true);
  $('input[type="email"]').keyup(function() {
    if($(this).val() != '') {
      ++emailFilled;
    }

    if (emailFilled > 0 & usernameFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("signup")).prop('disabled', false); 
    }
  });

  $('input[type="text"]').keyup(function() {
    if($(this).val() != '') {
      ++usernameFilled;
    }

    if (emailFilled > 0 && usernameFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("signup")).prop('disabled', false); 
    }
  });

  $('input[type="password"]').keyup(function() {
    if($(this).val() != '') {
      ++pwdFilled;
    }

    if (emailFilled > 0 & usernameFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("signup")).prop('disabled', false); 
    }
  });
 });

function login() {
  document.location.href = ("login.html");
}