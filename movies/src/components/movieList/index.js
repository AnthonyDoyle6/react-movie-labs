import React from "react";
import Movie from "../movieCard";
import Grid from "@material-ui/core/Grid";

const MovieList = ( {movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
    export default function MovieCard({ movie, action }) {
  ));
  return movieCards;
  <CardActions disableSpacing>
  {action(movie)}
  <Link to={`/movies/${movie.id}`}>
    <Button variant="outlined" size="medium" color="primary">
      More Info ...
    </Button>
  </Link>
</CardActions>
};

export default MovieList;