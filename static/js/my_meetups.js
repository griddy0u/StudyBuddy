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
            document.getElementById("a1").innerHTML = "N/A";
            document.getElementById("l1").innerHTML = "N/A";
            document.getElementById("d1").innerHTML = "N/A";
            $("#meet1").hide();
          }
          break;
        case 1:
          if(value.location != null){

          }
          else{
            document.getElementById("a2").innerHTML = "N/A";
            document.getElementById("l2").innerHTML = "N/A";
            document.getElementById("d2").innerHTML = "N/A";
            $("#meet2").hide();
          }
          break;
        case 2:
          if(value.location != null){

          }
          else{
            document.getElementById("a3").innerHTML = "N/A";
            document.getElementById("l3").innerHTML = "N/A";
            document.getElementById("d3").innerHTML = "N/A";
            $("#meet3").hide();
          }
          break;
        case 3:
          if(value.location != null){

          }
          else{
            document.getElementById("a4").innerHTML = "N/A";
            document.getElementById("l4").innerHTML = "N/A";
            document.getElementById("d4").innerHTML = "N/A";
            $("#meet4").hide();
          }
          break;
        case 4:
          if(value.location != null){

          }
          else{
            document.getElementById("a5").innerHTML = "N/A";
            document.getElementById("l5").innerHTML = "N/A";
            document.getElementById("d5").innerHTML = "N/A";
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
    if(localStorage.f1 != "null"){
      switch(emptyMeetup){
        case 0:
          if(localStorage.f1 != "null"){
            if(localStorage.f1 != "null"){
              document.getElementById("a1").innerHTML = localStorage.f1;
            }
            if(localStorage.f2 != "null"){
              $("#a1").append(", " + localStorage.f2);
            }
            if(localStorage.f3 != "null"){
              $("#a1").append(", " + localStorage.f3);
            }
            if(localStorage.f4 != "null"){
              $("#a1").append(", " + localStorage.f4);
            }
            if(localStorage.f5 != "null"){
              $("#a1").append(", " + localStorage.f5);
            }
            document.getElementById("l1").innerHTML = localStorage.location;
            document.getElementById("d1").innerHTML = localStorage.meeting_time;
            $("#meet1").show();
          }
          break;
        case 1:
          if(localStorage.f1 != "null"){
            if(localStorage.f1 != "null"){
              document.getElementById("a2").innerHTML = localStorage.f1;
            }
            if(localStorage.f2 != "null"){
              $("#a2").append(", " + localStorage.f2);
            }
            if(localStorage.f3 != "null"){
              $("#a2").append(", " + localStorage.f3);
            }
            if(localStorage.f4 != "null"){
              $("#a2").append(", " + localStorage.f4);
            }
            if(localStorage.f5 != "null"){
              $("#a2").append(", " + localStorage.f5);
            }
            document.getElementById("l2").innerHTML = localStorage.location;
            document.getElementById("d2").innerHTML = localStorage.meeting_time;
            $("#meet2").show();
          }
          break;
        case 2:
          if(localStorage.f1 != "null"){
            if(localStorage.f1 != "null"){
              document.getElementById("a3").innerHTML = localStorage.f1
            }
            if(localStorage.f2 != "null"){
              $("#a3").append(", " + localStorage.f2);
            }
            if(localStorage.f3 != "null"){
              $("#a3").append(", " + localStorage.f3);
            }
            if(localStorage.f4 != "null"){
              $("#a3").append(", " + localStorage.f4);
            }
            if(localStorage.f5 != "null"){
              $("#a3").append(", " + localStorage.f5);
            }
            document.getElementById("l3").innerHTML = localStorage.location;
            document.getElementById("d3").innerHTML = localStorage.meeting_time;
            $("#meet3").show();
          }
          break;
        case 3:
          if(localStorage.f1 != "null"){
            if(localStorage.f1 != "null"){
              document.getElementById("a4").innerHTML = localStorage.f1
            }
            if(localStorage.f2 != "null"){
              $("#a4").append(", " + localStorage.f2);
            }
            if(localStorage.f3 != "null"){
              $("#a4").append(", " + localStorage.f3);
            }
            if(localStorage.f4 != "null"){
              $("#a4").append(", " + localStorage.f4);
            }
            if(localStorage.f5 != "null"){
              $("#a4").append(", " + localStorage.f5);
            }
            document.getElementById("l4").innerHTML = localStorage.location;
            document.getElementById("d4").innerHTML = localStorage.meeting_time;
            $("#meet4").show();
          }
          break;
        case 4:
          if(localStorage.f1 != "null"){
            if(localStorage.f1 != "null"){
              document.getElementById("a5").innerHTML = localStorage.f1
            }
            if(localStorage.f2 != "null"){
              $("#a5").append(", " + localStorage.f2);
            }
            if(localStorage.f3 != "null"){
              $("#a5").append(", " + localStorage.f3);
            }
            if(localStorage.f4 != "null"){
              $("#a5").append(", " + localStorage.f4);
            }
            if(localStorage.f5 != "null"){
              $("#a5").append(", " + localStorage.f5);
            }
            document.getElementById("l5").innerHTML = localStorage.location;
            document.getElementById("d5").innerHTML = localStorage.meeting_time;
            $("#meet5").show();
          }
      }
    }
  }
});
