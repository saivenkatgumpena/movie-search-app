async function searchMovie() {
    const input = document.getElementById("searchInput").value.trim(); // use trim()
    const apiKey = "81b38f70";
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(input)}&apikey=${apiKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    console.log(data); // ADD THIS LINE
  
    const movieInfo = document.getElementById("movieInfo");
  
    if (data.Response === "True") {
      movieInfo.innerHTML = `
        <img src="${data.Poster}" alt="${data.Title} poster" />
        <h2>${data.Title} (${data.Year})</h2>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
      `;
    } else {
      movieInfo.innerHTML = `<p>Movie not found. Try another name!</p>`;
    }
  }
// Press Enter to search
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // prevent form submission if any
      searchMovie(); // call the search function
    }
  });
    