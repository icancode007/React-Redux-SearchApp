import { connect } from 'react-redux';
import {search} from '../actions';
import AddressFinder from './AddressFinder';



export default connect(
  // (state) => ({searchObj: state.SEARCH}),
  //'https://maps.googleapis.com/maps/api/staticmap?center='+state.query+'&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCgO60baHVwaAELQ84L0vBbC3t8S9rOWr0'
  (state) => {
  return({
          query:state.query,
          results: state.results,
          coordinates:state.coordinates
        })
  },
  (dispatch) => ({
    onChange: event => dispatch(search(dispatch, event.target.value))
  })
)(AddressFinder)
