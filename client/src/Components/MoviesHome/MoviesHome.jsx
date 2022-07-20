import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardMovies from "../CardMovies/CardMovies";
import { getAllMovies } from "../../Redux/Actions/Actions";
import { useEffect } from "react";

function MoviesHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  let allMovies = useSelector((state) => state.allMovies);
  console.log(allMovies);

  return (
    <div>
      {allMovies.map((r) => {
        return <CardMovies key={r.id} name={r.title} poster={r.poster_path} />;
      })}
    </div>
  );
}

export default MoviesHome;
