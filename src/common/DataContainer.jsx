import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserList from '../components/users/UserList';
import DashboardHome from '../components/dashboard/DashboardHome';


const DataContainer = () => {
  return (
       <div className='DataContainer'>
           <ToastContainer/>
           {/* <Loading/> */}
            <Routes>
                <Route exact path='/' element={<DashboardHome />}/>
                {/* <Route exact path='/users/registered' element={<UserList />}/> */}
          
            </Routes>
       </div>
  )
}

export default DataContainer