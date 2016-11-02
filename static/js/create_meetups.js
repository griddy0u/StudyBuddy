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
              var ele = document.getElementById("friend1");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend1").append(value.name);
            }
            break;
          case 1:
            if(value.name == null){
              var ele = document.getElementById("friend2");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend2").append(value.name);
            }
            break;
          case 2:
            if(value.name == null){
              var ele = document.getElementById("friend3");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend3").append(value.name);
            }
            break;
          case 3:
            if(value.name == null){
              var ele = document.getElementById("friend4");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend4").append(value.name);
            }
            break;
          case 4:
            if(value.name == null){
              var ele = document.getElementById("friend5");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend5").append(value.name);
            }
            break;
          case 5:
            if(value.name == null){
              var ele = document.getElementById("friend6");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend6").append(value.name);
            }
            break;
          case 6:
            if(value.name == null){
              var ele = document.getElementById("friend7");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend7").append(value.name);
            }
            break;
          case 7:
            if(value.name == null){
              var ele = document.getElementById("friend8");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend8").append(value.name);
            }
            break;
          case 8:
            if(value.name == null){
              var ele = document.getElementById("friend9");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend9").append(value.name);
            }
            break;
          case 9:
            if(value.name == null){
              var ele = document.getElementById("friend10");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend10").append(value.name);
            }
            break;
          case 10:
            if(value.name == null){
              var ele = document.getElementById("friend11");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend11").append(value.name);
            }
            break;
          case 11:
            if(value.name == null){
              var ele = document.getElementById("friend12");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend12").append(value.name);
            }
            break;
          case 12:
            if(value.name == null){
              var ele = document.getElementById("friend13");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend13").append(value.name);
            }
            break;
          case 13:
            if(value.name == null){
              var ele = document.getElementById("friend14");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend14").append(value.name);
            }
            break;
          case 14:
            if(value.name == null){
              var ele = document.getElementById("friend15");
              ele.parentNode.removeChild(ele);
            }
            else{
              $("#friend15").append(value.name);
            }
            break;
        }
      });
      /* Loads locations in */

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
  /* var jsonFile = $.getjson("data.json", function(json){

  });*/
  document.getElementById('loc_text').innerHTML = str;
  switch(str){
    case "Geisel":
      updateMap(32.8811, -117.2376);
      document.getElementById('quiet').innerHTML = "Moderately noisy";
      document.getElementById('crowded').innerHTML = "Extremely crowded";
      break;
      case "JK Wood Lounge":
      updateMap(32.8840, -117.2333);
      document.getElementById('quiet').innerHTML = "Extremely quiet";
      document.getElementById('crowded').innerHTML = "Moderately crowded";
      break;
    case "Sun God Lounge":
      updateMap(32.8801, -117.2371);
      document.getElementById('quiet').innerHTML = "Moderately quiet";
      document.getElementById('crowded').innerHTML = "Moderately crowded";
      break;
    case "Price Center":
      updateMap(32.8797, -117.2362);
      document.getElementById('quiet').innerHTML = "Extremely noisy";
      document.getElementById('crowded').innerHTML = "Extremely crowded";
      break;
    case "The Village":
      updateMap(32.8879, -117.2423);
      document.getElementById('quiet').innerHTML = "Very quiet";
      document.getElementById('crowded').innerHTML = "Moderately empty";
  }
}
