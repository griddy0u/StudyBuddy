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
