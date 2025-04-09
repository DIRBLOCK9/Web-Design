document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");
    const allMovies = Array.from(movieList.children);
  
    // Показати фільми з анімацією
    function showMovies(movies) {
      allMovies.forEach(card => {
        card.classList.remove("show");
        card.style.display = "none";
      });
  
      setTimeout(() => {
        movies.forEach((card, index) => {
          card.style.display = "block";
          setTimeout(() => {
            card.classList.add("show");
          }, index * 100); // затримка для stagger-ефекту
        });
      }, 100);
    }
  
    // Після фільтрації — показати потрібні
    function applyFilters() {
      const selectedGenre = document.getElementById("genreFilter").value;
      const selectedYear = document.getElementById("yearFilter").value;
  
      const filtered = allMovies.filter(card => {
        const genre = card.dataset.genre.toLowerCase();
        const year = card.dataset.year;
  
        const genreMatch = selectedGenre === "" || genre.includes(selectedGenre.toLowerCase());
        const yearMatch = selectedYear === "" || year === selectedYear;
  
        return genreMatch && yearMatch;
      });
  
      showMovies(filtered);
    }
  
    // Обробка фільтрів
    document.getElementById("genreFilter").addEventListener("change", applyFilters);
    document.getElementById("yearFilter").addEventListener("change", applyFilters);
    document.getElementById("resetFilters").addEventListener("click", () => {
      document.getElementById("genreFilter").value = "";
      document.getElementById("yearFilter").value = "";
      showMovies(allMovies);
    });
  
    // Показати всі фільми при завантаженні
    showMovies(allMovies);
  });
  