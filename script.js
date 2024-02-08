async function fetchData() {

    const url = 'https://api.kanye.rest/';

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('quote').textContent = data.quote;
  })
  .catch(error => console.error(error));
}
fetchData();

