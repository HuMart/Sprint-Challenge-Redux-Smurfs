import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs')

  return (dispatch) => {
    dispatch({
      type: 'FETCHING_SMURFS'
    })
    request.then(res => {
      console.log("res", res);
      dispatch({
        type: 'FETCHED',
        payload: res.data
      })      
    }).catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err.message
      })
    })
  }
}

export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";


export const addSmurf = (smurf) => {
  const request = axios.post('http://localhost:3333/smurfs', smurf)

  return (dispatch) => {
    dispatch({
      type: 'ADDING_SMURF'
    })
    request.then(res => {
      console.log("post", res);
      dispatch({
        type: 'SMURF_ADDED',
        payload: res.data
      })
    }).catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err.message
      })
    })
  }
}

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETED = "DELETED";


export const delSmurf = (id) => {
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`)

  return (dispatch) => {
    dispatch({
      type: 'DELETE_SMURF'
    })
    request.then(res => {
      dispatch({
        type: 'DELETED',
        payload: res.data
      })
    }).catch(err => {
      dispatch({
        type: ERROR,
        payload: err.message
      })
    })
  }
}
