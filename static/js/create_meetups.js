function openNav() {
  document.getElementById("mySidenav").style.width="250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width="0";
}
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
jQuery('#datetimepicker').datetimepicker();
/*$.getJSON("data.json", function(json){
  console.log(json);
});*/
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
