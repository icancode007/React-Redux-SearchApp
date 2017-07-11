import { SEARCH, SHOW_RESULTS,SHOW_MAP } from '../actions';

const initialState = {
  query: '',
  results: [],
  coordinates:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
			return {...state, query: action.query};
    case SHOW_RESULTS:
      return{...state, results: action.results};
    // case SHOW_MAP:
    //   return {...state, coordinates: action.coordinates};
    default:
      return state;
  }
}
