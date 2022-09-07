// import logo from './logo.svg';
import "./App.css";
import Movies from "./Movies.js";
import PageWrapper from "./PageWrapper.js";
import moviesJSON from "./movies.json";
import Paginacion from "./Paginacion";
import { useState } from "react";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);

  let arrayMovies = moviesJSON;

  const cargarPeliculas = () =>{
    arrayMovies = arrayMovies.slice((paginaActual - 1) * 5, paginaActual * 5);
  }

  const getTotalPaginas = () =>{
    let cantidadPeliculasJSON = moviesJSON.length;
    return Math.ceil(cantidadPeliculasJSON / 5);
  }

  const buscarPeliculas = async() => {
    let url  = "https://lucasmoy.dev/data/react/peliculas.json";

    let respuesta = await fetch(url,{
      "method":"GET",
      "headers":{
        "Accept":"aplication/JSON",
        "Content-Type":"application/JSON"
      }
    });
    let json = await respuesta.json();
    alert(json);
  }
  buscarPeliculas();
  cargarPeliculas();

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

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      ></Paginacion>
    </PageWrapper>
  );
}

export default App;
