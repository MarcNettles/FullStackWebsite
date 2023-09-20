
// Note to self: Change this to use AJAX instead.

var nextPage = "1"

//document.addEventListener('DOMContentLoaded', () => {
$(document).ready(function() {
    //const form = document.getElementById('search-form');
    const form = $('#search-form');
    //const searchTerm = document.getElementById('search-term');
    const searchTerm = $('#search-term')[0];
    //const resultsDiv = document.getElementById('results');
    const resultsDiv = $('#results');
  
    form.on('submit', async (event) => {
      event.preventDefault(); // Prevent default form submission behaviour
  
      const apiKey = 'df2168dc18a576d344c27306d5e9cc8d';
      const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${encodeURIComponent(searchTerm.value)}`;
  
      try {

        /*
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayResults(data.photos.photo);
        */
       $.ajax({url:apiUrl, dataType: "json"}).then(function(data){
        displayResults(data.photos.photo);
       })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  
    function displayResults(photos) {
      resultsDiv.empty();//Updated to jquery version of resultsDiv.innerHTML = '';
  
      photos.forEach((photo) => {
        const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        const imgElement = $('<img>')[0];// Updated to jquery equivalent of document.createElement('img');
        imgElement.crossOrigin = "anonymous";
        resultsDiv.append(imgElement); // Updated to jquery, before it was .appendChild
      });
    }
  });

// Add infinite scrolling here by having it keep loading pictures in.... somehow.
window.onscroll = function(ev){
    console.log("scrolled");
};