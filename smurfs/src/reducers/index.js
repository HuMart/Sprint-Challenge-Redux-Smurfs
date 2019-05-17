/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS,
         FETCHED, 
         ERROR,
         ADDING_SMURF,
         SMURF_ADDED,
         DELETE_SMURF,
         DELETED,}  from '../actions'


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurf: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state= initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case FETCHED:
      return Object.assign({}, state, {fetchingSmurfs: false, fetchedSmurf: true, smurfs: action.payload})
    case ERROR:
      return Object.assign({}, state, {err: action.payload});
    case ADDING_SMURF:
      return Object.assign({}, state, {fetchingSmurfs: true, fetchedSmurf: false})
    case SMURF_ADDED:
      return Object.assign({}, state, {fetchingSmurfs: false, fetchedSmurf: true, smurfs: action.payload})
    case DELETE_SMURF:
      return Object.assign({}, state, {fetchingSmurfs: true, fetchedSmurf: false})
    case DELETED:
      return Object.assign({}, state, {fetchingSmurfs: false, fetchedSmurf: true, smurfs: action.payload})
    default:
      return state;
  }
}

export default smurfReducer