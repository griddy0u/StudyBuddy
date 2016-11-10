$(document).ready(function() {
  var emailFilled = 0;
  var pwdFilled = 0;
  $((document).getElementById("login")).prop('disabled', true);
  $(document.getElementById("email")).keyup(function() {
    if($(this).val() != '') {
      ++emailFilled;
    }

    if (emailFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("login")).prop('disabled', false);
    }
  });

  $(document.getElementById("pwd")).keyup(function() {
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
  $(document.getElementById("login")).attr("type", "button");

  if (localStorage.getItem("accountEmail") != null) {
    if (localStorage.accountEmail == $(document.getElementById("email")).val()) {
      if (localStorage.accountPwd == $(document.getElementById("pwd")).val()) {
        if(localStorage.getItem("friendCount") == null){
          localStorage.setItem("friendCount", "0");
        }
        document.location.href = ("homepage.html");
        return;
      }
    }
  }

  $(document.getElementById("login")).attr("type", "submit");

  $.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){
      for (index = 0; index < data.accounts.length; index++) {
        if (data.accounts[index].email == $(document.getElementById("email")).val()) {
          if (data.accounts[index].password == $(document.getElementById("pwd")).val()) {
            localStorage.setItem("accountEmail", data.accounts[index].email);
            localStorage.setItem("accountUsername", data.accounts[index].username);
            localStorage.setItem("accountPwd", data.accounts[index].password);
            document.location.href = ("homepage.html");
            return;
          }
        }
      }
    }
  });
}

function register() {
  document.location.href = ("register.html");
}
