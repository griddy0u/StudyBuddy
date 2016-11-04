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
  var numMeets = 0;
  if(sessionStorage.getItem("f1") == null){
    sessionStorage.setItem("f1", null);
    sessionStorage.setItem("f2", null);
    sessionStorage.setItem("f3", null);
    sessionStorage.setItem("f4", null);
    sessionStorage.setItem("f5", null);
    numMeets = 1;
  }
  else if(sessionStorage.getItem("f6") == null){
    sessionStorage.setItem("f6", null);
    sessionStorage.setItem("f7", null);
    sessionStorage.setItem("f8", null);
    sessionStorage.setItem("f9", null);
    sessionStorage.setItem("f10", null);
    numMeets = 2;
  }
  else if(sessionStorage.getItem("f11") == null){
    sessionStorage.setItem("f11", null);
    sessionStorage.setItem("f12", null);
    sessionStorage.setItem("f13", null);
    sessionStorage.setItem("f14", null);
    sessionStorage.setItem("f15", null);
    numMeets = 3;
  }
  else if(sessionStorage.getItem("f16") == null){
    sessionStorage.setItem("f16", null);
    sessionStorage.setItem("f17", null);
    sessionStorage.setItem("f18", null);
    sessionStorage.setItem("f19", null);
    sessionStorage.setItem("f20", null);
    numMeets = 4;
  }
  else{
    sessionStorage.setItem("f21", null);
    sessionStorage.setItem("f22", null);
    sessionStorage.setItem("f23", null);
    sessionStorage.setItem("f24", null);
    sessionStorage.setItem("f25", null);
    numMeets = 5;
  }
  var numFriends = 0;
  for(var i = 0; i < 15; i++){
    switch(i){
      /* Save friend from 1st checkbox for meetup */
      case 0:
        if(numFriends < 5 && document.getElementById('check1').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend1').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend1').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend1').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend1').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend1').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend1').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend1').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend1').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend1').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend1').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend1').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend1').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend1').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend1').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend1').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend1').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend1').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend1').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend1').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend1').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend1').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend1').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend1').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend1').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend1').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 2nd checkbox for meetup */
      case 1:
        if(numFriends < 5 && document.getElementById('check2').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend2').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend2').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend2').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend2').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend2').textContent;
              }
              break;
            /* Second checkbox; second friend */
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend2').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend2').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend2').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend2').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend2').textContent;
              }
              break;
            /* Second checkbox; third friend */
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend2').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend2').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend2').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend2').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend2').textContent;
              }
              break;
            /* Second checkbox; fourth friend */
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend2').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend2').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend2').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend2').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend2').textContent;
              }
              break;
            /* Second checkbox; fifth friend */
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend2').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend2').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend2').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend2').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend2').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 3rd checkbox for meetup */
      case 2:
        if(numFriends < 5 && document.getElementById('check3').checked == true){
          switch(numFriends){
            /* third checkbox; first friend */
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend3').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend3').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend3').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend3').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend3').textContent;
              }
              break;
            /* third checkbox; second friend */
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend3').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend3').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend3').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend3').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend3').textContent;
              }
              break;
            /* third checkbox; third friend */
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend3').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend3').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend3').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend3').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend3').textContent;
              }
              break;
            /* third checkbox; fourth friend */
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend3').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend3').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend3').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend3').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend3').textContent;
              }
              break;
            /* third checkbox; fifth friend */
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend3').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend3').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend3').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend3').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend3').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 4th checkbox for meetup */
      case 3:
        if(numFriends < 5 && document.getElementById('check4').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend4').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend4').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend4').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend4').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend4').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend4').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend4').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend4').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend4').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend4').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend4').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend4').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend4').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend4').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend4').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend4').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend4').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend4').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend4').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend4').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend4').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend4').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend4').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend4').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend4').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 5th checkbox for meetup */
      case 4:
        if(numFriends < 5 && document.getElementById('check5').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend5').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend5').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend5').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend5').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend5').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend5').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend5').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend5').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend5').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend5').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend5').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend5').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend5').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend5').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend5').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend5').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend5').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend5').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend5').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend5').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend5').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend5').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend5').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend5').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend5').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 6th checkbox for meetup */
      case 5:
        if(numFriends < 5 && document.getElementById('check6').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend6').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend6').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend6').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend6').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend6').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend6').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend6').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend6').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend6').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend6').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend6').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend6').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend6').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend6').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend6').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend6').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend6').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend6').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend6').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend6').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend6').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend6').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend6').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend6').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend6').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 7th checkbox for meetup */
      case 6:
        if(numFriends < 5 && document.getElementById('check7').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend7').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend7').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend7').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend7').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend7').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend7').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend7').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend7').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend7').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend7').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend7').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend7').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend7').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend7').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend7').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend7').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend7').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend7').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend7').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend7').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend7').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend7').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend7').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend7').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend7').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 8th checkbox for meetup */
      case 7:
        if(numFriends < 5 && document.getElementById('check8').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend8').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend8').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend8').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend8').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend8').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend8').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend8').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend8').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend8').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend8').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend8').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend8').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend8').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend8').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend8').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend8').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend8').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend8').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend8').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend8').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend8').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend8').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend8').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend8').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend8').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 9th checkbox for meetup */
      case 8:
        if(numFriends < 5 && document.getElementById('check9').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend9').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend9').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend9').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend9').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend9').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend9').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend9').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend9').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend9').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend9').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend9').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend9').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend9').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend9').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend9').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend9').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend9').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend9').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend9').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend9').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend9').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend9').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend9').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend9').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend9').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 10th checkbox for meetup */
      case 9:
        if(numFriends < 5 && document.getElementById('check10').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend10').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend10').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend10').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend10').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend10').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend10').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend10').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend10').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend10').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend10').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend10').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend10').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend10').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend10').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend10').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend10').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend10').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend10').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend10').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend10').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend10').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend10').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend10').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend10').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend10').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 11th checkbox for meetup */
      case 10:
        if(numFriends < 5 && document.getElementById('check11').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend11').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend11').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend11').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend11').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend11').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend11').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend11').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend11').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend11').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend11').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend11').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend11').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend11').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend11').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend11').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend11').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend11').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend11').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend11').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend11').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend11').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend11').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend11').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend11').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend11').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 12th checkbox for meetup */
      case 11:
        if(numFriends < 5 && document.getElementById('check12').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend12').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend12').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend12').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend12').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend12').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend12').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend12').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend12').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend12').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend12').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend12').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend12').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend12').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend12').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend1').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend12').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend12').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend12').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend12').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend12').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend12').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend12').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend12').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend12').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend12').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 13th checkbox for meetup */
      case 12:
        if(numFriends < 5 && document.getElementById('check13').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend13').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend13').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend13').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend13').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend13').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend13').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend13').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend13').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend13').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend13').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend13').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend13').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend13').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend13').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend13').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend13').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend13').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend13').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend13').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend13').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend13').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend13').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend13').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend13').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend13').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 14th checkbox for meetup */
      case 13:
        if(numFriends < 5 && document.getElementById('check14').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend14').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend14').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend14').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend14').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend14').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend14').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend14').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend14').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend14').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend14').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend14').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend14').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend14').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend14').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend14').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend14').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend14').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend14').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend14').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend14').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend14').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend14').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend14').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend14').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend14').textContent;
              }
          }
          numFriends++;
        }
        break;
      /* Save friend from 15th checkbox for meetup */
      case 14:
        if(numFriends < 5 && document.getElementById('check15').checked == true){
          switch(numFriends){
            case 0:
              switch(numMeets){
                case 1:
                  sessionStorage.f1 = document.getElementById('friend15').textContent;
                  break;
                case 2:
                  sessionStorage.f6 = document.getElementById('friend15').textContent;
                  break;
                case 3:
                  sessionStorage.f11 = document.getElementById('friend15').textContent;
                  break;
                case 4:
                  sessionStorage.f16 = document.getElementById('friend15').textContent;
                  break;
                case 5:
                  sessionStorage.f21 = document.getElementById('friend15').textContent;
              }
              break;
            case 1:
              switch(numMeets){
                case 1:
                  sessionStorage.f2 = document.getElementById('friend15').textContent;
                  break;
                case 2:
                  sessionStorage.f7 = document.getElementById('friend15').textContent;
                  break;
                case 3:
                  sessionStorage.f12 = document.getElementById('friend15').textContent;
                  break;
                case 4:
                  sessionStorage.f17 = document.getElementById('friend15').textContent;
                  break;
                case 5:
                  sessionStorage.f22 = document.getElementById('friend15').textContent;
              }
              break;
            case 2:
              switch(numMeets){
                case 1:
                  sessionStorage.f3 = document.getElementById('friend15').textContent;
                  break;
                case 2:
                  sessionStorage.f8 = document.getElementById('friend15').textContent;
                  break;
                case 3:
                  sessionStorage.f13 = document.getElementById('friend15').textContent;
                  break;
                case 4:
                  sessionStorage.f18 = document.getElementById('friend15').textContent;
                  break;
                case 5:
                  sessionStorage.f23 = document.getElementById('friend15').textContent;
              }
              break;
            case 3:
              switch(numMeets){
                case 1:
                  sessionStorage.f4 = document.getElementById('friend15').textContent;
                  break;
                case 2:
                  sessionStorage.f9 = document.getElementById('friend15').textContent;
                  break;
                case 3:
                  sessionStorage.f14 = document.getElementById('friend15').textContent;
                  break;
                case 4:
                  sessionStorage.f19 = document.getElementById('friend15').textContent;
                  break;
                case 5:
                  sessionStorage.f24 = document.getElementById('friend15').textContent;
              }
              break;
            case 4:
              switch(numMeets){
                case 1:
                  sessionStorage.f5 = document.getElementById('friend15').textContent;
                  break;
                case 2:
                  sessionStorage.f10 = document.getElementById('friend15').textContent;
                  break;
                case 3:
                  sessionStorage.f15 = document.getElementById('friend15').textContent;
                  break;
                case 4:
                  sessionStorage.f20 = document.getElementById('friend15').textContent;
                  break;
                case 5:
                  sessionStorage.f25 = document.getElementById('friend15').textContent;
              }
          }
          numFriends++;
        }
    }
  }
  if((document.getElementById('datetimepicker').value).localeCompare("") != 0){
    switch(numMeets){
      case 1:
        sessionStorage.setItem("meeting_time", document.getElementById('datetimepicker').value);
        break;
      case 2:
        sessionStorage.setItem("meeting_time2", document.getElementById('datetimepicker').value);
        break;
      case 3:
        sessionStorage.setItem("meeting_time3", document.getElementById('datetimepicker').value);
        break;
      case 4:
        sessionStorage.setItem("meeting_time4", document.getElementById('datetimepicker').value);
        break;
      case 5:
        sessionStorage.setItem("meeting_time5", document.getElementById('datetimepicker').value);
    }
  }
  if((document.getElementById('loc_text').innerHTML).localeCompare("Selected location") != 0){
    switch(numMeets){
      case 1:
        sessionStorage.setItem("location", document.getElementById('loc_text').innerHTML);
        break;
      case 2:
        sessionStorage.setItem("location2", document.getElementById('loc_text').innerHTML);
        break;
      case 3:
        sessionStorage.setItem("location3", document.getElementById('loc_text').innerHTML);
        break;
      case 4:
        sessionStorage.setItem("location4", document.getElementById('loc_text').innerHTML);
        break;
      case 5:
        sessionStorage.setItem("location5", document.getElementById('loc_text').innerHTML);
    }
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