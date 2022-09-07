export default function Movies(props) {
  return (
    <div className="movie-item-style-2">
      <img src={props.img} />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle_light.html">
            {props.titulo} <span>{props.year}</span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star" />
          <span>{props.calification}</span> /10
        </p>
        <p className="describe">
          {props.description}
        </p>
        <p className="run-time">
          {" "}
          Duracion: {props.duracion} . <span>{props.edades}</span> .{" "}
          <span>{props.lanzamiento}</span>
        </p>
        <p>
          Director: <a href="#">{props.director}</a>
        </p>
        <p>
          Actores: <a href="#">{props.actorStar}.,</a> <a href="#">{props.actorSecond},</a>{" "}
          <a href="#">{props.actorTercero}</a>
        </p>
      </div>
    </div>
  );
}
