// Marc Nettles 06/27/2022
//
// The intent of this project is to set up my own private
// web server which will host my public website containing
// my coding and webdev projects.
//
//
// Things I want to use: Back-end/Front-end separation, Bootstrap, NodeJS, ExpressJS, EJS, maybe try some reactJS


/* flickr.js handles the javascript behind doing all the API calls */




//Helper Functions

function clearPhotos()
{
	document.getElementById("photoPlaceholder").innerHTML = "";
	nextPage = "1";
}






var nextPage = "1";

var numberImages = "";
var inputTag = "";


function makeApiCall(a = "1")
{
	
	
	/*Things needed to access the API*/
	var api_key = "df2168dc18a576d344c27306d5e9cc8d";
	var secret = "2b0308c1356841bd";



	var extras= "url_q";

	var privacy_filter = "1";
	var safe_search = "1";

	var page = a;

	var format = "json";

	console.log(page);
	
	
	// Retrieve all the required API arguments from the HTML page created. For example, number of images to load from the dropdown.
	numberImages = 30//document.getElementById("numberImages").options[document.getElementById("numberImages").selectedIndex].text;
	inputTag = document.getElementById("filterTags").value;
	
	
	
	// Build the search API url based on the arguments retrieved in the previous step. Used API explorer to do this. 
	var url ="https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+api_key+"&tags="+inputTag+"&privacy_filter="+privacy_filter+"&safe_search="+safe_search+"&extras="+extras+"&per_page="+numberImages+"&page="+page+"&format="+format+"&nojsoncallback=1";
	
	
	
	// Make an AJAX call to the newly built url. Should set the return datatype of the AJAX call as json.
	$(document).ready(function() 
	{
			//Changed "jsonp" to "json"
		  $.ajax({url:url, dataType:"json"}).then(function(data) 
			{
				
				
				
			
				
				// Use the photos returned by the API to populate gallery. Should use bootstrap cards to display the images within the placeholder div created
				var i = 0;				
				for(i = 0; i < numberImages; i++)
				{
					
					var photoCard = "<div class='card' style='width:400px'> <img class='card-img-top' src='"+ data.photos.photo[i].url_q +"' alt='Card image'>  <div class='card-body'>  <h4 class='card-title'>"+ data.photos.photo[i].title +" </h4> </div></div>";
					
					document.getElementById("photoPlaceholder").innerHTML += photoCard;
					
				}
				
			})
			  

		
	});



}



window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        nextPage = parseInt(nextPage) + 1;
		nextPage = nextPage.toString();
		makeApiCall(nextPage);
		
    }
};


/* 
 * Detects when the enter key is pressed (and the user is on the search bar) and submits the request.
*/
window.onkeyup = function(ev){
	if(ev.key=="Enter" && document.activeElement.id == "filterTags"){
		document.getElementById("flickr_submit").click();
	}
}