$(document).ready(function() {
  var emailFilled = 0;
  var pwdFilled = 0;
  $((document).getElementById("login")).prop('disabled', true);
  $('input[type="email"]').keyup(function() {
    if($(this).val() != '') {
      ++emailFilled;
    }

    if (emailFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("login")).prop('disabled', false); 
    }
  });

  $('input[type="password"]').keyup(function() {
    if($(this).val() != '') {
      ++pwdFilled;
    }

    if (emailFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("login")).prop('disabled', false); 
    }
  });
 });

function loginToHome() {
  var index = 0;
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){
      for (index = 0; index < data.accounts.length; index++) {
        if (data.accounts[index].email == $('input[type="email"]').val()) {
          if (data.accounts[index].password == $('input[type="password"]').val()) {
            sessionStorage.setItem("accountEmail", $('input[type="email"]').val());
            sessionStorage.setItem("accountUsername", data.accounts[index].username);
            document.location.href = ("homepage.html");
          }
        }
      }
    }
  });
}