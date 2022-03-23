import IndividualMovies from "./IndividualMovie";
import { MoviesDTO } from "./movies.model";
import css from "./movieList.module.css";
import Loading from "../utils/loading";
import GenericList from "../utils/GenericList";

export default function MoviesList(props: movieListProps) {
  return <GenericList  list={props.movies}>
    <div className={css.div}>
      {props.movies?.map((movie) => (
        <IndividualMovies {...movie} key={movie.id} />
      ))}
    </div>
  </GenericList>;
}

interface movieListProps {
  movies?: MoviesDTO[];
}
