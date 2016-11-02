/*$.getJSON("data.json", function(data){
  console.log(data);
});*/
$.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){
      /* Loads friends list in */
      $(data.friends).each(function(index, value){
        switch(index){
          case 0:
            if(value.name == null){
              document.getElementById("friend1").style.display='none';
            }
            else{
              $("#friend1").append(value.name);
            }
            break;
          case 1:
            if(value.name == null){
              document.getElementById("friend2").style.display='none';
            }
            else{
              $("#friend2").append(value.name);
            }
            break;
          case 2:
            if(value.name == null){
              document.getElementById("friend3").style.display='none';
            }
            else{
              $("#friend3").append(value.name);
            }
            break;
          case 3:
            if(value.name == null){
              document.getElementById("friend4").style.display='none';
            }
            else{
              $("#friend4").append(value.name);
            }
            break;
          case 4:
            if(value.name == null){
              document.getElementById("friend5").style.display='none';
            }
            else{
              $("#friend5").append(value.name);
            }
            break;
          case 5:
            if(value.name == null){
              document.getElementById("friend6").style.display='none';
            }
            else{
              $("#friend6").append(value.name);
            }
            break;
          case 6:
            if(value.name == null){
              document.getElementById("friend7").style.display='none';
            }
            else{
              $("#friend7").append(value.name);
            }
            break;
          case 7:
            if(value.name == null){
              document.getElementById("friend8").style.display='none';
            }
            else{
              $("#friend8").append(value.name);
            }
            break;
          case 8:
            if(value.name == null){
              document.getElementById("friend9").style.display='none';
            }
            else{
              $("#friend9").append(value.name);
            }
            break;
          case 9:
            if(value.name == null){
              document.getElementById("friend10").style.display='none';
            }
            else{
              $("#friend10").append(value.name);
            }
            break;
          case 10:
            if(value.name == null){
              document.getElementById("friend11").style.display='none';
            }
            else{
              $("#friend11").append(value.name);
            }
            break;
          case 11:
            if(value.name == null){
              document.getElementById("friend12").style.display='none';
            }
            else{
              $("#friend12").append(value.name);
            }
            break;
          case 12:
            if(value.name == null){
              document.getElementById("friend13").style.display='none';
            }
            else{
              $("#friend13").append(value.name);
            }
            break;
          case 13:
            if(value.name == null){
              document.getElementById("friend14").style.display='none';
            }
            else{
              $("#friend14").append(value.name);
            }
            break;
          case 14:
            if(value.name == null){
              document.getElementById("friend15").style.display='none';
            }
            else{
              $("#friend15").append(value.name);
            }
            break;
        }
      });

      /* Loads locations in */
      $(data.locations).each(function(index, value){
        switch(index){
          case 0:
            $("#loc1").append(value.name);
            break;
          case 1:
            $("#loc2").append(value.name);
            break;
          case 2:
            $("#loc3").append(value.name);
            break;
          case 3:
            $("#loc4").append(value.name);
            break;
          case 4:
            $("#loc5").append(value.name);
            break;
          case 5:
            $("#loc6").append(value.name);
            break;
          case 6:
            $("#loc7").append(value.name);
            break;
          case 7:
            $("#loc8").append(value.name);
            break;
        }
      });
    }
});

function initMap() {
  var uluru = {lat: 32.8801, lng: -117.2340};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$('#datetimepicker').datetimepicker();

function updateMap(x, y){
  var uluru = {lat: x, lng: y};
  var map= new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
function modifyLocInfo(str){
  document.getElementById('loc_text').innerHTML = str;
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){
      switch(str){
        case data.locations[0].name:
          updateMap(data.locations[0].coord.lat, data.locations[0].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[0].quiet;
          document.getElementById('crowded').innerHTML = data.locations[0].crowded;
          break;
        case data.locations[1].name:
          updateMap(data.locations[1].coord.lat, data.locations[1].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[1].quiet;
          document.getElementById('crowded').innerHTML = data.locations[1].crowded;
          break;
        case data.locations[2].name:
          updateMap(data.locations[2].coord.lat, data.locations[2].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[2].quiet;
          document.getElementById('crowded').innerHTML = data.locations[2].crowded;
          break;
        case data.locations[3].name:
          updateMap(data.locations[3].coord.lat, data.locations[3].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[3].quiet;
          document.getElementById('crowded').innerHTML = data.locations[3].crowded;
          break;
        case data.locations[4].name:
          updateMap(data.locations[4].coord.lat, data.locations[4].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[4].quiet;
          document.getElementById('crowded').innerHTML = data.locations[4].crowded;
          break;
        case data.locations[5].name:
          updateMap(data.locations[5].coord.lat, data.locations[5].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[5].quiet;
          document.getElementById('crowded').innerHTML = data.locations[5].crowded;
          break;
        case data.locations[6].name:
          updateMap(data.locations[6].coord.lat, data.locations[6].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[6].quiet;
          document.getElementById('crowded').innerHTML = data.locations[6].crowded;
          break;
        case data.locations[7].name:
          updateMap(data.locations[7].coord.lat, data.locations[7].coord.lng);
          document.getElementById('quiet').innerHTML = data.locations[7].quiet;
          document.getElementById('crowded').innerHTML = data.locations[7].crowded;
      }
    }
  });
}
