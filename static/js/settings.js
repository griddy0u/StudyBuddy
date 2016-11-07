$.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){

      /* Loads in Account Email/Username/Password */
      document.getElementById("accEmail").innerHTML = sessionStorage.getItem("accountEmail");
      document.getElementById("accUsername").innerHTML = sessionStorage.getItem("accountUsername");
      document.getElementById("accPwd").innerHTML = sessionStorage.getItem("accountPwd");
    }
});

/* Enables Email/Username/Password Change Buttons */
$(document).ready(function() {

  /* Email */
  $((document).getElementById("confirmEmailChange")).prop('disabled', true);
  $(document.getElementById("newAccEmail")).keyup(function() {
    if($(this).val() != '') {
      $((document).getElementById("confirmEmailChange")).prop('disabled', false); 
    }
  });

  /* Username */
  $((document).getElementById("confirmNameChange")).prop('disabled', true);
  $(document.getElementById("newAccName")).keyup(function() {
    if($(this).val() != '') {
      $((document).getElementById("confirmNameChange")).prop('disabled', false); 
    }
  });

  /* Password */
  $((document).getElementById("confirmPwdChange")).prop('disabled', true);
  $(document.getElementById("newAccPwd")).keyup(function() {
    if($(this).val() != '') {
      $((document).getElementById("confirmPwdChange")).prop('disabled', false); 
    }
  });
 });

/* EMAIL */
function changeEmail() {
  document.getElementById("currAccEmail").placeholder = sessionStorage.getItem("accountEmail");
  $(document.getElementById("newAccEmail")).val("");
  $(document.getElementById("email")).toggle();
  $(document.getElementById("changeEmail")).toggle();
}

function setNewEmail() {
  /* Stores New Email to Session Storage */
  sessionStorage.setItem("accountEmail", $(document.getElementById("newAccEmail")).val());

  /* Setes New Email to Appear on Settings */
  document.getElementById("accEmail").innerHTML = sessionStorage.getItem("accountEmail");
}

/* USERNAME */
function changeName() {
  document.getElementById("currAccName").placeholder = sessionStorage.getItem("accountUsername");
  $(document.getElementById("newAccName")).val("");
  $(document.getElementById("name")).toggle();
  $(document.getElementById("changeUsername")).toggle();
}

function setNewName() {
  /* Stores New Username to Session Storage */
  sessionStorage.setItem("accountUsername", $(document.getElementById("newAccName")).val());

  /* Sets New Username to Appear on TopNavBar */
  document.getElementById("username").innerHTML = sessionStorage.getItem("accountUsername");

  /* Sets New Username to Appear on Settings */
  document.getElementById("accUsername").innerHTML = sessionStorage.getItem("accountUsername");
}

/* PASSWORD */
function changePwd() {
  document.getElementById("currAccPwd").placeholder = sessionStorage.getItem("accountPwd");
  $(document.getElementById("newAccPwd")).val("");
  $(document.getElementById("pwd")).toggle();
  $(document.getElementById("changePassword")).toggle();
}

function setNewPwd() {
  /* Stores New Password to Session Storage */
  sessionStorage.setItem("accountPwd", $(document.getElementById("newAccPwd")).val());

  /* Sets New Password to Appear on Settings */
  document.getElementById("accPwd").innerHTML = sessionStorage.getItem("accountPwd");
}