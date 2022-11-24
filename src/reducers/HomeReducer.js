import {
    SET_DRIVER_LIST,
    SET_USERS_LIST,
    SET_HEALTH_DATA,
    SET_HEALTH_CATEGORY_DATA,
    SET_TROLLY_TEMP_LIST,
    SET_TEMP_LIST,
} from '../actions/Types'
  
  const initialState = {
    DriverList: false,
    UserList: false,
    TrollyTempList: false,
    TempList: false,
    HealthData: false,
    HealthCategoryData: false,
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DRIVER_LIST:
        return {
          ...state,
          DriverList: action.payload,
        };
      case SET_TROLLY_TEMP_LIST:
        return {
          ...state,
          TrollyTempList: action.payload,
        };
      case SET_TEMP_LIST:
        return {
          ...state,
          TempList: action.payload,
        };
      case SET_HEALTH_CATEGORY_DATA:
        return {
          ...state,
          HealthCategoryData: action.payload,
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
  