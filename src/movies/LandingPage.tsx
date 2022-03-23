import { useEffect, useState } from "react";
import MoviesList from "./MovieList";
import { landingPageDTO } from "./movies.model";
import Button from "../utils/Button";

export default function LandingPage(){

    const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "SpiderMan : Far from Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
          },
        ],
        upComingReleases: [
          {
            id: 3,
            title: "Soul",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  });
  
    return(
        <>
         <Button onClick={()=>{}}>whatever text</Button>
              <h3>In Theaters</h3>
              <MoviesList movies={movies.inTheaters} />
              <h3>Upcoming Releases</h3>
              <MoviesList movies={movies.upComingReleases} />
        </>
    )
}