import {
    SET_DRIVER_LIST,
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
