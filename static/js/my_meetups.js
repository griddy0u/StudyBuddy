$.ajax({
  url: 'data.json',
  dataType: 'json',
  type: 'get',
  cache: true,
  success: function(data){
    /* Loads meetups to webpage */
    $(data.accounts[sessionStorage.accountIndex].meetups).each(function(index,value){
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
    var emptyMeetup = 0;
    var id = 1;
    while(document.getElementById('a' + id).innerHTML != "N/A"){
      emptyMeetup++;
      id++;
    }
    for(var i = 1; i <= 21; i = i + 5){
      /*var temp1 = i + 1;
      var temp2 = i + 2;
      var temp3 = i + 3;
      var temp4 = i + 4; */
      if(localStorage.getItem('f' + i) != null){
        switch(emptyMeetup){
          case 0:
            if(localStorage.getItem('f' + i) != null && localStorage.getItem('f' + i) != "null"){
              if(localStorage.getItem('f' + i) != "null"){
                document.getElementById("a1").innerHTML = localStorage.getItem('f' + i);
              }
              if(localStorage.getItem('f' + (i + 1)) != "null"){
                $("#a1").append(", " + localStorage.getItem('f' + (i + 1)));
              }
              if(localStorage.getItem('f' + (i + 2)) != "null"){
                $("#a1").append(", " + localStorage.getItem('f' + (i + 2)));
              }
              if(localStorage.getItem('f' + (i + 3)) != "null"){
                $("#a1").append(", " + localStorage.getItem('f' + (i + 3)));
              }
              if(localStorage.getItem('f' + (i + 4)) != "null"){
                $("#a1").append(", " + localStorage.getItem('f' + (i + 4)));
              }
              document.getElementById("l1").innerHTML = localStorage.location1;
              document.getElementById("d1").innerHTML = localStorage.meeting_time1;
              $("#meet1").show();
            }
            else{
              document.getElementById("a1").innerHTML = "N/A";
              document.getElementById("l1").innerHTML = "N/A";
              document.getElementById("d1").innerHTML = "N/A";
              $("#meet1").hide();
            }
            break;
          case 1:
            if(localStorage.getItem('f' + i) != null && localStorage.getItem('f' + i) != "null"){
              if(localStorage.getItem('f' + i) != "null"){
                document.getElementById("a2").innerHTML = localStorage.getItem('f' + i);
              }
              if(localStorage.getItem('f' + (i + 1)) != "null"){
                $("#a2").append(", " + localStorage.getItem('f' + (i + 1)));
              }
              if(localStorage.getItem('f' + (i + 2)) != "null"){
                $("#a2").append(", " + localStorage.getItem('f' + (i + 2)));
              }
              if(localStorage.getItem('f' + (i + 3)) != "null"){
                $("#a2").append(", " + localStorage.getItem('f' + (i + 3)));
              }
              if(localStorage.getItem('f' + (i + 4)) != "null"){
                $("#a2").append(", " + localStorage.getItem('f' + (i + 4)));
              }
              document.getElementById("l2").innerHTML = localStorage.location1;
              document.getElementById("d2").innerHTML = localStorage.meeting_time1;
              $("#meet2").show();
            }
            else{
              document.getElementById("a2").innerHTML = "N/A";
              document.getElementById("l2").innerHTML = "N/A";
              document.getElementById("d2").innerHTML = "N/A";
              $("#meet2").hide();
            }
            break;
          case 2:
            if(localStorage.getItem('f' + i) != null && localStorage.getItem('f' + i) != "null"){
              if(localStorage.getItem('f' + i) != "null"){
                document.getElementById("a3").innerHTML = localStorage.getItem('f' + i);
              }
              if(localStorage.getItem('f' + (i + 1)) != "null"){
                $("#a3").append(", " + localStorage.getItem('f' + (i + 1)));
              }
              if(localStorage.getItem('f' + (i + 2)) != "null"){
                $("#a3").append(", " + localStorage.getItem('f' + (i + 2)));
              }
              if(localStorage.getItem('f' + (i + 3)) != "null"){
                $("#a3").append(", " + localStorage.getItem('f' + (i + 3)));
              }
              if(localStorage.getItem('f' + (i + 4)) != "null"){
                $("#a3").append(", " + localStorage.getItem('f' + (i + 4)));
              }
              document.getElementById("l3").innerHTML = localStorage.location1;
              document.getElementById("d3").innerHTML = localStorage.meeting_time1;
              $("#meet3").show();
            }
            else{
              document.getElementById("a3").innerHTML = "N/A";
              document.getElementById("l3").innerHTML = "N/A";
              document.getElementById("d3").innerHTML = "N/A";
              $("#meet3").hide();
            }
            break;
          case 3:
            if(localStorage.getItem('f' + i) != null && localStorage.getItem('f' + i) != "null"){
              if(localStorage.getItem('f' + i) != "null"){
                document.getElementById("a4").innerHTML = localStorage.getItem('f' + i);
              }
              if(localStorage.getItem('f' + (i + 1)) != "null"){
                $("#a4").append(", " + localStorage.getItem('f' + (i + 1)));
              }
              if(localStorage.getItem('f' + (i + 2)) != "null"){
                $("#a4").append(", " + localStorage.getItem('f' + (i + 2)));
              }
              if(localStorage.getItem('f' + (i + 3)) != "null"){
                $("#a4").append(", " + localStorage.getItem('f' + (i + 3)));
              }
              if(localStorage.getItem('f' + (i + 4)) != "null"){
                $("#a4").append(", " + localStorage.getItem('f' + (i + 4)));
              }
              document.getElementById("l4").innerHTML = localStorage.location1;
              document.getElementById("d4").innerHTML = localStorage.meeting_time1;
              $("#meet4").show();
            }
            else{
              document.getElementById("a4").innerHTML = "N/A";
              document.getElementById("l4").innerHTML = "N/A";
              document.getElementById("d4").innerHTML = "N/A";
              $("#meet4").hide();
            }
            break;
          case 4:
            if(localStorage.getItem('f' + i) != null && localStorage.getItem('f' + i) != "null"){
              if(localStorage.getItem('f' + i) != "null"){
                document.getElementById("a5").innerHTML = localStorage.getItem('f' + i);
              }
              if(localStorage.getItem('f' + (i + 1)) != "null"){
                $("#a5").append(", " + localStorage.getItem('f' + (i + 1)));
              }
              if(localStorage.getItem('f' + (i + 2)) != "null"){
                $("#a5").append(", " + localStorage.getItem('f' + (i + 2)));
              }
              if(localStorage.getItem('f' + (i + 3)) != "null"){
                $("#a5").append(", " + localStorage.getItem('f' + (i + 3)));
              }
              if(localStorage.getItem('f' + (i + 4)) != "null"){
                $("#a5").append(", " + localStorage.getItem('f' + (i + 4)));
              }
              document.getElementById("l1").innerHTML = localStorage.location1;
              document.getElementById("d1").innerHTML = localStorage.meeting_time1;
              $("#meet5").show();
            }
            else{
              document.getElementById("a1").innerHTML = "N/A";
              document.getElementById("l1").innerHTML = "N/A";
              document.getElementById("d1").innerHTML = "N/A";
              $("#meet5").hide();
            }
        }
        emptyMeetup++;
      }
    }
  }
});
