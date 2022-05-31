import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserList from '../components/users/UserList';
import DashboardHome from '../components/dashboard/DashboardHome';
import UserHealthStats from '../components/users/UserHealthStats';
import UserHealthDataSingle from '../components/users/UserHealthDataSingle';


const DataContainer = () => {
  return (
       <div className='DataContainer'>
           <ToastContainer/>
           {/* <Loading/> */}
            <Routes>
                <Route exact path='/' element={<DashboardHome />}/>
                <Route exact path='/health' element={<UserList />}/>
                <Route exact path='/health/Stats/:userId' element={<UserHealthStats />}/>
                <Route exact path='/health/Stats/:userId/:type' element={<UserHealthDataSingle />}/>
          
            </Routes>
       </div>
  )
}

export default DataContainer