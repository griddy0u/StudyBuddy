$(document).ready(function(){
  $("#meet1").hide();
  $("#meet2").hide();
  $("#meet3").hide();
  $("#meet4").hide();
  $("#meet5").hide();
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
});

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
  document.location.href = ("my_meetups.html")
}

/*$.ajax({
  url: 'data.json',
  dataType: 'json',
  type: 'get',
  cache: true,
  success: function(data){*/
    /* Loads meetups to webpage */
    /*$(data.accounts[sessionStorage.accountIndex].meetups).each(function(index,value){
      switch(index){
        case 0:
          if(value.location != null){
            var friendCount = 0;
            if(value.friends[friendCount] != null){
              document.getElementById("a1").innerHTML = value.friends[friendCount];
              friendCount++;
              while((friendCount < 5) && value.friends[friendCount] !=null){
                $("#a1").append(", " + value.friends[friendCount]);
                friendCount++;
              }
            }
            document.getElementById("l1").innerHTML = value.location;
            document.getElementById("d1").innerHTML = value.meeting_time;
          }
          else{
            $("#meet1").hide();
          }
          break;
        case 1:
          if(value.location != null){

          }
          else{

            $("#meet2").hide();
          }
          break;
        case 2:
          if(value.location != null){

          }
          else{

            $("#meet3").hide();
          }
          break;
        case 3:
          if(value.location != null){

          }
          else{

            $("#meet4").hide();
          }
          break;
        case 4:
          if(value.location != null){

          }
          else{

            $("#meet5").hide();
          }
      }
    });
  }
});*/
