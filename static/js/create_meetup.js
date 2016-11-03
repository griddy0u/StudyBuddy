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
  localStorage.setItem("f1", null);
  localStorage.setItem("f2", null);
  localStorage.setItem("f3", null);
  localStorage.setItem("f4", null);
  localStorage.setItem("f5", null);
  var numFriends = 0;
  for(var i = 0; i < 15; i++){
    switch(i){
      case 0:
        if(numFriends < 5 && document.getElementById('check1').checked == true){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend1').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend1').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend1').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend1').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend1').textContent;
          }
          numFriends++;
        }
        break;
      case 1:
        if(numFriends < 5 && document.getElementById('check2').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend2').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend2').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend2').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend2').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend2').textContent;
          }
          numFriends++;
        }
        break;
      case 2:
        if(numFriends < 5 && document.getElementById('check3').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend3').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend3').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend3').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend3').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend3').textContent;
          }
          numFriends++;
        }
        break;
      case 3:
        if(numFriends < 5 && document.getElementById('check4').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend4').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend4').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend4').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend4').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend4').textContent;
          }
          numFriends++;
        }
        break;
      case 4:
        if(numFriends < 5 && document.getElementById('check5').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend5').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend5').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend5').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend5').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend5').textContent;
          }
          numFriends++;
        }
        break;
      case 5:
        if(numFriends < 5 && document.getElementById('check6').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend6').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend6').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend6').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend6').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend6').textContent;
          }
          numFriends++;
        }
        break;
      case 6:
        if(numFriends < 5 && document.getElementById('check7').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend7').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend7').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend7').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend7').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend7').textContent;
          }
          numFriends++;
        }
        break;
      case 7:
        if(numFriends < 5 && document.getElementById('check8').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend8').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend8').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend8').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend8').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend8').textContent;
          }
          numFriends++;
        }
        break;
      case 8:
        if(numFriends < 5 && document.getElementById('check9').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend9').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend9').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend9').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend9').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend9').textContent;
          }
          numFriends++;
        }
        break;
      case 9:
        if(numFriends < 5 && document.getElementById('check10').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend10').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend10').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend10').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend10').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend10').textContent;
          }
          numFriends++;
        }
        break;
      case 10:
        if(numFriends < 5 && document.getElementById('check11').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend11').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend11').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend11').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend11').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend11').textContent;
          }
          numFriends++;
        }
        break;
      case 11:
        if(numFriends < 5 && document.getElementById('check12').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend12').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend12').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend12').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend12').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend12').textContent;
          }
          numFriends++;
        }
        break;
      case 12:
        if(numFriends < 5 && document.getElementById('check13').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend13').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend13').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend13').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend13').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend13').textContent;
          }
          numFriends++;
        }
        break;
      case 13:
        if(numFriends < 5 && document.getElementById('check14').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend14').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend14').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend14').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend14').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend14').textContent;
          }
          numFriends++;
        }
        break;
      case 14:
        if(numFriends < 5 && document.getElementById('check15').checked){
          switch(numFriends){
            case 0:
              localStorage.f1 = document.getElementById('friend15').textContent;
              break;
            case 1:
              localStorage.f2 = document.getElementById('friend15').textContent;
              break;
            case 2:
              localStorage.f3 = document.getElementById('friend15').textContent;
              break;
            case 3:
              localStorage.f4 = document.getElementById('friend15').textContent;
              break;
            case 4:
              localStorage.f5 = document.getElementById('friend15').textContent;
          }
          numFriends++;
        }
    }
  }
  if((document.getElementById('datetimepicker').value).localeCompare("") != 0){
    localStorage.setItem("meeting_time", document.getElementById('datetimepicker').value);
  }
  if((document.getElementById('loc_text').innerHTML).localeCompare("Selected location") != 0){
    localStorage.setItem("location", document.getElementById('loc_text').innerHTML);
  }
}
