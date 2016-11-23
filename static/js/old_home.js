$(document).ready(function(){
  var numOfFriends = 0;

  /* Hides All Delete Friends Buttons */
  for (var i = 1; i <= 15; i++) {
    $(document.getElementById("fr" + i)).hide();
  }

  for(var i = 1; i <= 15; i++){
    if(localStorage.getItem("friend" + i) != null){
      if(i == 1){
        $("#noFriends").hide();
      }
      document.getElementById('friend' + i).innerHTML = localStorage.getItem("friend" + i);
      $(document.getElementById("fr" + i)).show();
    }
  }
  while(localStorage.getItem("friend" + (numOfFriends + 1)) != null){
    numOfFriends++;
  }
  localStorage.friendCount = numOfFriends;
  document.getElementById("numOfFriends").innerHTML = "(" + localStorage.getItem("friendCount") + "/15)";
});

$(document).keyup(function(){
  var friendCount = 0;
  while(friendCount < 15 && localStorage.getItem("friend" + (friendCount + 1)) != null){
      friendCount++;
  }
  if(friendCount < 15 && $('#addFr').val() != ""){
    $(document.getElementById('addFriend')).prop('disabled', false);
  }
});

function addFriend(){
  var friendCount = 0;
  while(friendCount < 15 && localStorage.getItem("friend" + (friendCount + 1)) != null){
      friendCount++;
  }
  if(friendCount == 0){
    $("#noFriends").hide();
  }
  if(friendCount < 15){
    localStorage.setItem("friend" + (friendCount + 1), $('#addFr').val());
    /* Increments friend count on top of list */
    localStorage.setItem("friendCount", "" + (parseInt(localStorage.friendCount) + 1));
    document.getElementById("numOfFriends").innerHTML = "(" + localStorage.getItem("friendCount") + "/15)";
    document.getElementById("friend" + (friendCount + 1)).innerHTML = localStorage.getItem("friend" + (friendCount + 1));
    $(document.getElementById("fr" + (friendCount + 1))).show();
    /* Empties add friend search bar */
    $('#addFr').val("");
    /* Disables add friend button */
    $(document.getElementById('addFriend')).prop('disabled', true);
  }
}

function deleteFriend(friendNum) {
  for (var i = friendNum; i <= 15; i++){
    if (localStorage.getItem("friend" + i) != null && localStorage.getItem("friend" + (i + 1)) != null){
      localStorage.setItem("friend" + i, localStorage.getItem("friend" + (i + 1)));
      document.getElementById("friend" + i).innerHTML = localStorage.getItem("friend" + i);
    }
    else if (localStorage.getItem("friend" + i) != null && localStorage.getItem("friend" + (i + 1)) == null){
      localStorage.removeItem("friend" + i);
      document.getElementById("friend" + i).innerHTML = "";
      $(document.getElementById("fr" + i)).hide();
    }
  }
  /* Decrements friend count on top of list */
  localStorage.setItem("friendCount", "" + (parseInt(localStorage.friendCount) - 1));
  document.getElementById("numOfFriends").innerHTML = "(" + localStorage.getItem("friendCount") + "/15)";
  /* Checks if no friends now */
  if(parseInt(localStorage.friendCount) == 0){
    $("#noFriends").show();
  }
}

function abExperiment(){
  if(localStorage.visited.localeCompare("no") == 0){
    if(localStorage.getItem("friend1") !== null){
      ga('send', 'event', 'createMeetup', 'correct');
    }
    else{
      ga('send', 'event', 'createMeetup', 'mistake');
    }
    localStorage.setItem("visited", "yes");
  }
}
/*$.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){*/

      /* Loads friends list in */
      /*$(data.accounts[sessionStorage.getItem("accountIndex")].friends).each(function(index, value) {
        var numOfFriends = 0;
        switch(index) {
          case 0:
            if(value.name == null){
              document.getElementById("friend1").style.display='none';
            }
            else{
              $("#friend1").append(value.name);
              ++numOfFriends;
            }
            break;

          case 1:
            if(value.name == null){
              document.getElementById("friend2").style.display='none';
            }
            else{
              $("#friend2").append(value.name);
              ++numOfFriends;
            }
            break;

          case 2:
            if(value.name == null){
              document.getElementById("friend3").style.display='none';
            }
            else{
              $("#friend3").append(value.name);
              ++numOfFriends;
            }
            break;

          case 3:
            if(value.name == null){
              document.getElementById("friend4").style.display='none';
            }
            else{
              $("#friend4").append(value.name);
              ++numOfFriends;
            }
            break;

          case 4:
            if(value.name == null){
              document.getElementById("friend5").style.display='none';
            }
            else{
              $("#friend5").append(value.name);
              ++numOfFriends;
            }
            break;

          case 5:
            if(value.name == null){
              document.getElementById("friend6").style.display='none';
            }
            else{
              $("#friend6").append(value.name);
              ++numOfFriends;
            }
            break;

          case 6:
            if(value.name == null){
              document.getElementById("friend7").style.display='none';
            }
            else{
              $("#friend7").append(value.name);
              ++numOfFriends;
            }
            break;

          case 7:
            if(value.name == null){
              document.getElementById("friend8").style.display='none';
            }
            else{
              $("#friend8").append(value.name);
              ++numOfFriends;
            }
            break;

          case 8:
            if(value.name == null){
              document.getElementById("friend9").style.display='none';
            }
            else{
              $("#friend9").append(value.name);
              ++numOfFriends;
            }
            break;

          case 9:
            if(value.name == null){
              document.getElementById("friend10").style.display='none';
            }
            else{
              $("#friend10").append(value.name);
              ++numOfFriends;
            }
            break;

          case 10:
            if(value.name == null){
              document.getElementById("friend11").style.display='none';
            }
            else{
              $("#friend11").append(value.name);
              ++numOfFriends;
            }
            break;

          case 11:
            if(value.name == null){
              document.getElementById("friend12").style.display='none';
            }
            else{
              $("#friend12").append(value.name);
              ++numOfFriends;
            }
            break;

          case 12:
            if(value.name == null){
              document.getElementById("friend13").style.display='none';
            }
            else{
              $("#friend13").append(value.name);
              ++numOfFriends;
            }
            break;

          case 13:
            if(value.name == null){
              document.getElementById("friend14").style.display='none';
            }
            else{
              $("#friend14").append(value.name);
              ++numOfFriends;
            }
            break;

          case 14:
            if(value.name == null){
              document.getElementById("friend15").style.display='none';
            }
            else{
              $("#friend15").append(value.name);
              ++numOfFriends;
            }
            break;
        }

        if (numOfFriends != 0) {
          document.getElementById("noFriends").style.display='none';
        }
      });
    }
});*/
