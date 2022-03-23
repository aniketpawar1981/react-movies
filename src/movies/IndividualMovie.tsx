import { MoviesDTO } from "./movies.model";
import css from "./individualmovie.module.css"

export default function IndividualMovies(props:MoviesDTO){

    const buildLink =()=>`/Movies/${props.id}`

    return(
        <div className={css.div}>
        <a href={buildLink()} >
            <img alt="poster" src={props.poster} />
        </a>
        <p>
            <a href={buildLink ()}>{props.title}</a>
        </p>
        </div>
    )

}