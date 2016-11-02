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
            document.getElementById("meet1").style.display = 'none';
          }
          break;
        case 1:
          if(value.location != null){

          }
          else{
            document.getElementById("meet2").style.display = 'none';
          }
          break;
        case 2:
          if(value.location != null){

          }
          else{
            document.getElementById("meet3").style.display = 'none';
          }
          break;
        case 3:
          if(value.location != null){

          }
          else{
            document.getElementById("meet4").style.display = 'none';
          }
          break;
        case 4:
          if(value.location != null){

          }
          else{
            document.getElementById("meet5").style.display = 'none';
          }
      }
    });
  }
});
