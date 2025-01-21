function Home() {
    const movies = [
      { title: "Inception", rating: "8.8" },
      { title: "The Dark Knight", rating: "9.0" },
      { title: "Interstellar", rating: "8.6" },
    ];
  
    return (
      <div>
        <h1>Movie Recommendations</h1>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.title} - Rating: {movie.rating}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Home;
  
  