import {
    SET_DRIVER_LIST,
    SET_USERS_LIST,
    SET_HEALTH_DATA,
    SET_HEALTH_CATEGORY_DATA,
    SET_TROLLY_TEMP_LIST,
    SET_TEMP_LIST,
} from './Types'

import Constant from '../Constant'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import axios from 'axios';


const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };


export const onLogin = (data) => (dispatch)=>{
axios
    .post(Constant.getAPI() + `/system/sign-in`,data)
    .then((res) => {
       if(res.data){
            toast.success("User Logged In Successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });

            localStorage.setItem('token',res.data.token)
            localStorage.setItem('userName',res.data.data.userName)
            localStorage.setItem('email',res.data.data.email)

            window.location.reload()
       }
    })
    .catch((err) => {
        toast.error("User ID or Password is Wrong", {
            position: toast.POSITION.TOP_RIGHT
        });
    });
};


export const GetAutomation = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/driverautomation/automateorders`, {})
      .then((res) => {
            if(res.data.success){
                dispatch(GetAssign(data))
            }
          dispatch({
              type:SET_DRIVER_LIST,
              payload:res.data.data
          })

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  
export const GetAssign = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/driverautomation/assign`, data)
      .then((res) => {
            if(res.data.success){
                dispatch(GetDriverList(data))
                toast.success(`${res.data.message}`, {
                  position: toast.POSITION.TOP_RIGHT
              });
            }

          dispatch({
              type:SET_DRIVER_LIST,
              payload:res.data.data
          })

      })
      .catch((err) => {
        console.log(err.message);
      });
  };


export const GetDriverList = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/driverautomation/list`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_DRIVER_LIST,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  export const GetUserList = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/user/get-all-users`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_USERS_LIST,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetHealthCategoryList = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/healthFields/get`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_HEALTH_CATEGORY_DATA,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const ADDHealthCategory = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/healthFields/add`, data,{
        headers:{
          "Content-Type": "multipart/form-data"
        }
      })
      .then((res) => {
            if(res.data){
                dispatch(GetHealthCategoryList())
                window.location.href='#/category'
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const EDITHealthCategory = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/healthFields/edit`, data,{
        headers:{
          "Content-Type": "multipart/form-data"
        }
      })
      .then((res) => {
            if(res.data){
                dispatch(GetHealthCategoryList())
                window.location.href='#/category'
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const ADDUserHealthData = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/healthDetails/set-v1`, data,{
        headers:{
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
            if(res.data){
                dispatch(GetUserList())
                window.location.href='#/health'
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetHealthData = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/healthDetails/get-v1`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_HEALTH_DATA,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  export const GetTrollyTempData = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/trollytemperature/admin/get`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_TROLLY_TEMP_LIST,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  export const GetTempData = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/temperature/admin/get`, data)
      .then((res) => {
            if(res.data){
                dispatch({
                    type:SET_TEMP_LIST,
                    payload:res.data.data
                })
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  export const sendNotification = (data) => (dispatch)=>{

    axios
      .post(Constant.getAPI() + `/notification/send`, data)
      .then((res) => {
            if(res.data.status){
              toast.success(`${res.data.message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            }else{
              toast.error(`${res.data.message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

