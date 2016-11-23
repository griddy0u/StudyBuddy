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
  /*
  $("#meet1").hide();
  */
  if(localStorage.getItem("f1") != null){
    $(".noM").hide();
  }
  if(localStorage.getItem("f1") != null && localStorage.getItem("f1") != "null"){
    if(localStorage.getItem('f1') != "null"){
      document.getElementById("a1").innerHTML = localStorage.getItem('f1');
    }
    if(localStorage.getItem('f2') != "null"){
      $("#a1").append(", " + localStorage.getItem('f2'));
    }
    if(localStorage.getItem('f3') != "null"){
      $("#a1").append(", " + localStorage.getItem('f3'));
    }
    if(localStorage.getItem('f4') != "null"){
      $("#a1").append(", " + localStorage.getItem('f4'));
    }
    if(localStorage.getItem('f5') != "null"){
      $("#a1").append(", " + localStorage.getItem('f5'));
    }
    document.getElementById("l1").innerHTML = localStorage.getItem("location1");
    document.getElementById("d1").innerHTML = localStorage.getItem("meeting_time1");
    $("#meet1").show();
  }
  else{
    document.getElementById("a1").innerHTML = "N/A";
    document.getElementById("l1").innerHTML = "N/A";
    document.getElementById("d1").innerHTML = "N/A";
    $("#meet1").hide();
  }
  /*
  for(var i = 1; i <= 21; i = i + 5){
    if(localStorage.getItem('f' + i) != null && localStorage.getItem('f' + i) != "null"){
      if(localStorage.getItem('f' + i) != "null"){
        document.getElementById("a" + (i + 4) / 5).innerHTML = localStorage.getItem('f' + i);
      }
      if(localStorage.getItem('f' + (i + 1)) != "null"){
        $("#a" + (i + 4) / 5).append(", " + localStorage.getItem('f' + (i + 1)));
      }
      if(localStorage.getItem('f' + (i + 2)) != "null"){
        $("#a" + (i + 4) / 5).append(", " + localStorage.getItem('f' + (i + 2)));
      }
      if(localStorage.getItem('f' + (i + 3)) != "null"){
        $("#a" + (i + 4) / 5).append(", " + localStorage.getItem('f' + (i + 3)));
      }
      if(localStorage.getItem('f' + (i + 4)) != "null"){
        $("#a" + (i + 4) / 5).append(", " + localStorage.getItem('f' + (i + 4)));
      }
      document.getElementById("l" + (i + 4) / 5).innerHTML = localStorage.getItem("location" + (i + 4) / 5);
      document.getElementById("d" + (i + 4) / 5).innerHTML = localStorage.getItem("meeting_time" + (i + 4) / 5);
      $("#meet" + (i + 4) / 5).show();
    }
    else{
      document.getElementById("a" + (i + 4) / 5).innerHTML = "N/A";
      document.getElementById("l" + (i + 4) / 5).innerHTML = "N/A";
      document.getElementById("d" + (i + 4) / 5).innerHTML = "N/A";
      $("#meet" + (i + 4) / 5).hide();
    }
  }
  */
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

function deleteMeetup(meetNum){
  for(var i = (5 * meetNum - 4); i <= 21; i = i + 5){
    if(localStorage.getItem("f" + i) != null && localStorage.getItem("f" + (i + 5)) != null){
      localStorage.setItem("f" + i, localStorage.getItem("f" + (i + 5)));
      localStorage.setItem("f" + (i + 1), localStorage.getItem("f" + (i + 6)));
      localStorage.setItem("f" + (i + 2), localStorage.getItem("f" + (i + 7)));
      localStorage.setItem("f" + (i + 3), localStorage.getItem("f" + (i + 8)));
      localStorage.setItem("f" + (i + 4), localStorage.getItem("f" + (i + 9)));
      localStorage.setItem("location" + (i + 4) / 5, localStorage.getItem("location" + (i + 9) / 5));
      localStorage.setItem("meeting_time" + (i + 4) / 5, localStorage.getItem("meeting_time" + (i + 9) / 5));
    }
    else if(localStorage.getItem("f" + i) != null && localStorage.getItem("f" + (i + 5)) == null){
      localStorage.removeItem("f" + i);
      localStorage.removeItem("f" + (i + 1));
      localStorage.removeItem("f" + (i + 2));
      localStorage.removeItem("f" + (i + 3));
      localStorage.removeItem("f" + (i + 4));
      localStorage.removeItem("location" + (i + 4) / 5);
      localStorage.removeItem("meeting_time" + (i + 4) / 5);
    }
  }
  document.location.href = ("homepage.html");
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
