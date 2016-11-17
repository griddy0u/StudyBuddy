$.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){
    	/* Sets Username to Appear on TopNavBar */
    	document.getElementById("username").innerHTML = localStorage.accountUsername;
	}
});

function returnToHome(){
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data){
      if(data.new){
        document.location.href = ("homepage.html");
      }
      else{
        document.location.href = ("old_home.html")
      }
    }
  });
}
