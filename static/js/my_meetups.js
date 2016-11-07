$.ajax({
  url: 'data.json',
  dataType: 'json',
  type: 'get',
  cache: true,
  success: function(data){
    /* Loads meetups to webpage */
    $(data.accounts[0].meetups).each(function(index,value){
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
});
