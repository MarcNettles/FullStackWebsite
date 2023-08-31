var nextPage = "1"

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchTerm = document.getElementById('search-term');
    const resultsDiv = document.getElementById('results');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const apiKey = 'df2168dc18a576d344c27306d5e9cc8d';
      const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${encodeURIComponent(searchTerm.value)}`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayResults(data.photos.photo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  
    function displayResults(photos) {
      resultsDiv.innerHTML = '';
  
      photos.forEach((photo) => {
        const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        resultsDiv.appendChild(imgElement);
      });
    }
  });

// Add infinite scrolling here by having it keep loading pictures in.... somehow.
window.onscroll = function(ev){
    console.log("scrolled");
};