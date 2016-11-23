$(document).ready(function() {
  var emailFilled = 0;
  var usernameFilled = 0;
  var pwdFilled = 0;
  $((document).getElementById("signup")).prop('disabled', true);
  $(document.getElementById("email")).keyup(function() {
    if($(this).val() != '') {
      emailFilled = 1;
    }

    if (emailFilled > 0 & usernameFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("signup")).prop('disabled', false);
    }
  });

  $(document.getElementById("username")).keyup(function() {
    if($(this).val() != '') {
      usernameFilled = 1;
    }

    if (emailFilled > 0 && usernameFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("signup")).prop('disabled', false);
    }
  });

  $(document.getElementById("pwd")).keyup(function() {
    if($(this).val() != '') {
      pwdFilled = 1;
    }

    if (emailFilled > 0 & usernameFilled > 0 && pwdFilled > 0) {
      $((document).getElementById("signup")).prop('disabled', false);
    }
  });
 });

function storeAccount() {
  localStorage.setItem("accountEmail", $(document.getElementById("email")).val());
  localStorage.setItem("accountUsername", $(document.getElementById("username")).val());
  localStorage.setItem("accountPwd", $(document.getElementById("pwd")).val());
  localStorage.setItem("friendCount", 0);

  for (var i = 1; i <= 15; i++) {
    if (localStorage.getItem("friend" + i) != null) {
      localStorage.removeItem("friend" + i);
    }
  }

  for (var i = 1; i <= 5; i++) {
    if (localStorage.getItem("location" + i) != null) {
      localStorage.removeItem("location" + i);
      localStorage.removeItem("meeting_time" + i);
    }
  }

  for (var i = 1; i <= 25; i++) {
    if (localStorage.getItem("f" + i) != null) {
      localStorage.removeItem("f" + i);
    }
  }
  if(localStorage.getItem("visitCount") != null){
    localStorage.removeItem("visitCount");
  }
}

function login() {
  document.location.href = ("login.html");
}
