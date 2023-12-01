
// Import necessary Redux dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Define Redux actions
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

// Define Redux reducer
const initialState = {
  data: [],
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(dataReducer, applyMiddleware(thunk));

// Define Redux thunk action to fetch data
const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    // Perform API call to fetch data
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => dispatch(fetchDataSuccess(data)))
      .catch(error => dispatch(fetchDataFailure(error)));
  };
};

// Dispatch the fetchData action to fetch data
store.dispatch(fetchData());

// Render the data in a component
const MyComponent = () => {
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
