// import logo from './logo.svg';
import "./App.css";
import Movies from "./Movies.js";
import PageWrapper from "./PageWrapper.js";
import moviesJSON from "./movies.json";

function App() {
  let arrayMovies = moviesJSON;

  return (
    <PageWrapper>
      {arrayMovies.map((movie) => (
        <Movies
          titulo={movie.titulo}
          year={movie.year}
          calification={movie.calification}
          description={movie.description}
          duracion={movie.duracion}
          edades={movie.edades}
          lanzamiento={movie.lanzamiento}
          director={movie.director}
          actorStar={movie.actorStar}
          actorSecond={movie.actorSecond}
          actorTercero={movie.actorTercero}
          img={movie.img}
        />
      ))}
    </PageWrapper>
  );
}

export default App;
