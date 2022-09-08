// import logo from './logo.svg';
import "../App.js";
import Movies from "./Movies.js";
import PageWrapper from "./PageWrapper.js";
// import moviesJSON from "./movies.json";
import Paginacion from "./Paginacion";
import { useEffect, useState } from "react";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas,setPeliculas] = useState([]);

  useEffect(() =>{
    buscarPeliculas();
  }, []);

  const getTotalPaginas = () =>{
    let cantidadPeliculasJSON = peliculas.length;
    return Math.ceil(cantidadPeliculasJSON / 5);
  }

  const buscarPeliculas = async() => {
    let url  = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json";

    let respuesta = await fetch(url,{
      "method":"GET",
      "headers":{
        "Accept":"aplication/json",
        "Content-Type":"application/json",
        "Origin":"https://raw.githubusercontent.com"
      }
    });
    let json = await respuesta.json();
    setPeliculas(json);
  }

  let peliculasPorPagina = peliculas.slice((paginaActual - 1) * 5, paginaActual * 5);

  return (
    <PageWrapper>
      {peliculasPorPagina.map((movie) => (
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

export default ListadoPeliculas;
