const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'http://example.com/api/data'; // The URL you're trying to access
fetch(proxyUrl + targetUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
window.onload = function() {
    // Hide the loading screen by setting visibility to hidden
    document.getElementById('loading-screen').style.visibility = 'hidden';
  };
  