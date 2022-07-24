import {
  DETAIL,
  GET_ALL_SERIES,
  GET_ALL_MOVIES,
  GET_SERIES_DETAIL,
  GET_NAME,
  GET_MOVIES_DETAIL,
  WILLUNMOUNT,
  WILLUNMOUNT2,
} from "../Actions/Actions.js";
const initialState = {
  allMovies: [],
  allSeries: [],
  movieDetail: {},
  seriesDetail: {},
  backupSeries: [],
  backupMovies: [],
  all: [],
};
const rootRouter = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERIES:
      return {
        ...state,
        allSeries: action.payload,
        backupSeries: action.payload,
        all: [...state.all, ...action.payload],
      };

    case GET_ALL_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
        backupMovies: action.payload,
        all: [...state.all, ...action.payload],
      };
    case GET_NAME:
      return {
        ...state,
        allSeries: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        allMovies: action.payload,
      };
    case GET_SERIES_DETAIL:
      return {
        ...state,
        seriesDetail: action.payload,
      };
    case GET_MOVIES_DETAIL:
      console.log(state.movieDetail);
      return {
        ...state,
        movieDetail: action.payload,
      };
    case WILLUNMOUNT:
      return {
        ...state,
        seriesDetail: {},
      };
    case WILLUNMOUNT2:
      return {
        ...state,
        movieDetail: {},
      };
    default:
      return { ...state };
  }
};

export default rootRouter;
