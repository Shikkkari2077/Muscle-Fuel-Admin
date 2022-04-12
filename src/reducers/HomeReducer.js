import {
    SET_DRIVER_LIST,
} from '../actions/Types'
  
  const initialState = {
    DriverList: false,
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DRIVER_LIST:
        return {
          ...state,
          DriverList: action.payload,
        };
      default:
              return state;
    }
  };
  
  export default homeReducer;
  