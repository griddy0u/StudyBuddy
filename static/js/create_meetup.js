
$.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){
      /* Loads friends list in */
      /*$(data.accounts[sessionStorage.accountIndex].friends).each(function(index, value){
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
      }); */

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

$(document).ready(function(){

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

jQuery('#datetimepicker').datetimepicker();

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

function createMeetup(){
  var numMeets = 0;
  if(localStorage.getItem("f1") == null){
    for(var i = 1; i <= 5; i++){
      localStorage.setItem("f" + i, null);
    }
    numMeets = 1;
  }
  else if(localStorage.getItem("f6") == null){
    for(var i = 6; i <= 10; i++){
      localStorage.setItem("f" + i, null);
    }
    numMeets = 2;
  }
  else if(localStorage.getItem("f11") == null){
    for(var i = 11; i <= 15; i++){
      localStorage.setItem("f" + i, null);
      numMeets = 5;
    }
  }
  else if(localStorage.getItem("f16") == null){
    for(var i = 16; i <= 20; i++){
      localStorage.setItem("f" + i, null);
    }
    numMeets = 4;
  }
  else if(localStorage.getItem("f21") == null){
    for(var i = 21; i < 25; i++){
      localStorage.setItem("f" + i, null);
    }
    numMeets = 5;
  }
  var numFriends = 0;
  for(var i = 1; i <= 15; i++){
    if(numFriends < 5 && document.getElementById('check' + i).checked == true){
      switch(numFriends){
        case 0:
          switch(numMeets){
            case 1:
              localStorage.f1 = document.getElementById('friend' + i).textContent;
              break;
            case 2:
              localStorage.f6 = document.getElementById('friend' + i).textContent;
              break;
            case 3:
              localStorage.f11 = document.getElementById('friend' + i).textContent;
              break;
            case 4:
              localStorage.f16 = document.getElementById('friend' + i).textContent;
              break;
            case 5:
              localStorage.f21 = document.getElementById('friend' + i).textContent;
          }
          break;
        case 1:
          switch(numMeets){
            case 1:
              localStorage.f2 = document.getElementById('friend' + i).textContent;
              break;
            case 2:
              localStorage.f7 = document.getElementById('friend' + i).textContent;
              break;
            case 3:
              localStorage.f12 = document.getElementById('friend' + i).textContent;
              break;
            case 4:
              localStorage.f17 = document.getElementById('friend' + i).textContent;
              break;
            case 5:
              localStorage.f22 = document.getElementById('friend' + i).textContent;
          }
          break;
        case 2:
          switch(numMeets){
            case 1:
              localStorage.f3 = document.getElementById('friend' + i).textContent;
              break;
            case 2:
              localStorage.f8 = document.getElementById('friend' + i).textContent;
              break;
            case 3:
              localStorage.f13 = document.getElementById('friend' + i).textContent;
              break;
            case 4:
              localStorage.f18 = document.getElementById('friend' + i).textContent;
              break;
            case 5:
              localStorage.f23 = document.getElementById('friend' + i).textContent;
          }
          break;
        case 3:
          switch(numMeets){
            case 1:
              localStorage.f4 = document.getElementById('friend' + i).textContent;
              break;
            case 2:
              localStorage.f9 = document.getElementById('friend' + i).textContent;
              break;
            case 3:
              localStorage.f14 = document.getElementById('friend' + i).textContent;
              break;
            case 4:
              localStorage.f19 = document.getElementById('friend' + i).textContent;
              break;
            case 5:
              localStorage.f24 = document.getElementById('friend' + i).textContent;
          }
          break;
        case 4:
          switch(numMeets){
            case 1:
              localStorage.f5 = document.getElementById('friend' + i).textContent;
              break;
            case 2:
              localStorage.f10 = document.getElementById('friend' + i).textContent;
              break;
            case 3:
              localStorage.f15 = document.getElementById('friend' + i).textContent;
              break;
            case 4:
              localStorage.f20 = document.getElementById('friend' + i).textContent;
              break;
            case 5:
              localStorage.f25 = document.getElementById('friend' + i).textContent;
          }
      }
      numFriends++;
    }
  }
  if((document.getElementById('datetimepicker').value).localeCompare("") != 0){
    localStorage.setItem("meeting_time" + numMeets, document.getElementById('datetimepicker').value);
  }
  if((document.getElementById('loc_text').innerHTML).localeCompare("Selected location") != 0){
    localStorage.setItem("location" + numMeets, document.getElementById('loc_text').innerHTML);
  }
}

$(document).ready(function() {
  var selectFriends = 0;
  var dateAndTime = 0;
  var studyLocation = 0;
  $(document.getElementById('create')).prop('disabled', true);

  $('input[type="checkbox"]').click(function() {
    ++selectFriends;


    if (selectFriends > 0 && dateAndTime > 0 && studyLocation > 0) {
      $(document.getElementById('create')).prop('disabled', false);
    }
  });

  $(document).click(function() {
    if ($('input[type="text"]').val() != '') {
      ++dateAndTime;
    }

    if (selectFriends > 0 && dateAndTime > 0 && studyLocation > 0) {
      $(document.getElementById('create')).prop('disabled', false);
    }
  });

  $('input[type="radio"]').click(function() {
      ++studyLocation;

    if (selectFriends > 0 && dateAndTime > 0 && studyLocation > 0) {
      $(document.getElementById('create')).prop('disabled', false);
    }
  });
 });

function returnToHome() {
  document.location.href = ("homepage.html");
}
