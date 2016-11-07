$.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){

      /* Sets Username to Appear on TopNavBar */
      document.getElementById("username").innerHTML = sessionStorage.getItem("accountUsername");

      /* Loads friends list in */
      $(data.friends).each(function(index, value) {
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
});