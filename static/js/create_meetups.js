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
$.getJSON("data.json", function(json){
  console.log(json);
});
