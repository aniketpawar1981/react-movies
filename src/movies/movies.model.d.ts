export interface MoviesDTO{
    id:number;
    title:string;
    poster:string;
}

export interface landingPageDTO{
inTheaters ? : MoviesDTO[];
upComingReleases?: MoviesDTO[];
}

