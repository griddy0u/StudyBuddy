$.ajax({
  url: 'data.json',
  dataType: 'json',
  type: 'get',
  cache: true,
  success: function(data){
    /* Loads meetups to webpage */
    $(data.meetups).each(function(index,value){
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
    /*while(data.meetups[emptyMeetup].location != null){
      emptyMeetup++;
    }*/
    if(document.getElementById("a1").innerHTML != "N/A"){
      emptyMeetup++;
      if(document.getElementById("a2").innerHTML != "N/A"){
        emptyMeetup++;
        if(document.getElementById("a3").innerHTML != "N/A"){
          emptyMeetup++;
          if(document.getElementById("a4").innerHTML != "N/A"){
            emptyMeetup++;
            if(document.getElementById("a5").innerHTML != "N/A"){
              emptyMeetup++;
            }
          }
        }
      }
    }
    if(sessionStorage.f1 != "null"){
      switch(emptyMeetup){
        case 0:
          if(sessionStorage.getItem("f1") != null && sessionStorage.f1 != "null"){
            if(sessionStorage.f1 != "null"){
              document.getElementById("a1").innerHTML = sessionStorage.f1;
            }
            if(sessionStorage.f2 != "null"){
              $("#a1").append(", " + sessionStorage.f2);
            }
            if(sessionStorage.f3 != "null"){
              $("#a1").append(", " + sessionStorage.f3);
            }
            if(sessionStorage.f4 != "null"){
              $("#a1").append(", " + sessionStorage.f4);
            }
            if(sessionStorage.f5 != "null"){
              $("#a1").append(", " + sessionStorage.f5);
            }
            document.getElementById("l1").innerHTML = sessionStorage.location;
            document.getElementById("d1").innerHTML = sessionStorage.meeting_time;
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
          if(sessionStorage.getItem("f1") != null && sessionStorage.f1 != "null"){
            if(sessionStorage.f1 != "null"){
              document.getElementById("a2").innerHTML = sessionStorage.f1;
            }
            if(sessionStorage.f2 != "null"){
              $("#a2").append(", " + sessionStorage.f2);
            }
            if(sessionStorage.f3 != "null"){
              $("#a2").append(", " + sessionStorage.f3);
            }
            if(sessionStorage.f4 != "null"){
              $("#a2").append(", " + sessionStorage.f4);
            }
            if(sessionStorage.f5 != "null"){
              $("#a2").append(", " + sessionStorage.f5);
            }
            document.getElementById("l2").innerHTML = sessionStorage.location;
            document.getElementById("d2").innerHTML = sessionStorage.meeting_time;
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
          if(sessionStorage.getItem("f1") != null && sessionStorage.f1 != "null"){
            if(sessionStorage.f1 != "null"){
              document.getElementById("a3").innerHTML = sessionStorage.f1
            }
            if(sessionStorage.f2 != "null"){
              $("#a3").append(", " + sessionStorage.f2);
            }
            if(sessionStorage.f3 != "null"){
              $("#a3").append(", " + sessionStorage.f3);
            }
            if(sessionStorage.f4 != "null"){
              $("#a3").append(", " + sessionStorage.f4);
            }
            if(sessionStorage.f5 != "null"){
              $("#a3").append(", " + sessionStorage.f5);
            }
            document.getElementById("l3").innerHTML = sessionStorage.location;
            document.getElementById("d3").innerHTML = sessionStorage.meeting_time;
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
          if(sessionStorage.getItem("f1") != null && sessionStorage.f1 != "null"){
            if(sessionStorage.f1 != "null"){
              document.getElementById("a4").innerHTML = sessionStorage.f1
            }
            if(sessionStorage.f2 != "null"){
              $("#a4").append(", " + sessionStorage.f2);
            }
            if(sessionStorage.f3 != "null"){
              $("#a4").append(", " + sessionStorage.f3);
            }
            if(sessionStorage.f4 != "null"){
              $("#a4").append(", " + sessionStorage.f4);
            }
            if(sessionStorage.f5 != "null"){
              $("#a4").append(", " + sessionStorage.f5);
            }
            document.getElementById("l4").innerHTML = sessionStorage.location;
            document.getElementById("d4").innerHTML = sessionStorage.meeting_time;
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
          if(sessionStorage.getItem("f1") != null && sessionStorage.f1 != "null"){
            if(sessionStorage.f1 != "null"){
              document.getElementById("a5").innerHTML = sessionStorage.f1
            }
            if(sessionStorage.f2 != "null"){
              $("#a5").append(", " + sessionStorage.f2);
            }
            if(sessionStorage.f3 != "null"){
              $("#a5").append(", " + sessionStorage.f3);
            }
            if(sessionStorage.f4 != "null"){
              $("#a5").append(", " + sessionStorage.f4);
            }
            if(sessionStorage.f5 != "null"){
              $("#a5").append(", " + sessionStorage.f5);
            }
            document.getElementById("l5").innerHTML = sessionStorage.location;
            document.getElementById("d5").innerHTML = sessionStorage.meeting_time;
            $("#meet5").show();
          }
          else{
            document.getElementById("a5").innerHTML = "N/A";
            document.getElementById("l5").innerHTML = "N/A";
            document.getElementById("d5").innerHTML = "N/A";
            $("#meet5").hide();
          }
      }
    }
  }
});
