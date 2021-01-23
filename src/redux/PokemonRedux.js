import Axios from 'axios';

/* selectors */
export const getAllPokemons = ({ pokemons }) => pokemons.data;

/* Action name creator */
const reducerName = 'pokemons';
const createActionName = name => `app/${reducerName}/${name}`;

/* ActionTypes */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });


/* thunk creators */
export const fetchAllPokemons = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const state = getState();
    if(!state.pokemons.data) {
      Axios
        //in link below offset and limit can be changed for more control over list
        .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchSelectedPokemon = (id) => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      await new Promise((resolve, reject) => resolve());
      dispatch(fetchSuccess(res.data));
    } catch(err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
