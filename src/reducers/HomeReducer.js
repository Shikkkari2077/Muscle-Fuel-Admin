import {
    SET_DRIVER_LIST,
    SET_USERS_LIST,
    SET_HEALTH_DATA,
} from '../actions/Types'
  
  const initialState = {
    DriverList: false,
    UserList: false,
    HealthData: false,
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DRIVER_LIST:
        return {
          ...state,
          DriverList: action.payload,
        };
      case SET_USERS_LIST:
        return {
          ...state,
          UserList: action.payload,
        };
      case SET_HEALTH_DATA:
        return {
          ...state,
          HealthData: action.payload,
        };
      default:
              return state;
    }
  };
  
  export default homeReducer;
  