// Action Creators Go Here
export const SEARCH = 'SEARCH';
export const SHOW_RESULTS = 'SHOW_RESULTS';
export const SHOW_MAP = 'SHOW_MAP';

import axios from 'axios';
const google = (dispatch, searchstring) => {
	axios.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + searchstring)
	.then(function(response){
		dispatch(showResults(response.data.results))
		// console.log('https://maps.googleapis.com/maps/api/staticmap?center='+response.data.results[0].formatted_address+'&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCgO60baHVwaAELQ84L0vBbC3t8S9rOWr0')
		// dispatch(showMap('https://maps.googleapis.com/maps/api/staticmap?center='+response.data.results[0].formatted_address+'&zoom=16&size=300x600&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCgO60baHVwaAELQ84L0vBbC3t8S9rOWr0'))
	}).catch(function(err){
		console.log('err',err.ERROR);
	})
}

export const search = (dispatch, query) => {
  google(dispatch, query)

  return({
    type: SEARCH,
    query
  })
}

export const showResults = (results) => ({
  type:SHOW_RESULTS,
  results
})

// export const showMap= (coordinates) => ({
// 	type:SHOW_MAP,
// 	coordinates
// })
