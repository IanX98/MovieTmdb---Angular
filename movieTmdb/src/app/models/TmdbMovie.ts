export default interface TMDBMovie {
    id: number;
    title: string;
    adult: boolean;
    video: boolean;
    overview: string;
    genre_ids: [];
    vote_count: number;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    original_title: string;
    original_language: string;
  }
