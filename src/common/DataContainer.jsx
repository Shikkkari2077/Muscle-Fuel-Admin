import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserList from '../components/users/UserList';
import DashboardHome from '../components/dashboard/DashboardHome';
import UserHealthStats from '../components/users/UserHealthStats';
import UserHealthDataSingle from '../components/users/UserHealthDataSingle';
import HealthCategoryList from '../components/Health/HealthCategoryList';
import HealthCATaddEdit from '../components/Health/HealthCATaddEdit';
import HealthStatsADD from '../components/Health/HealthStatsADD';


const DataContainer = () => {
  return (
       <div className='DataContainer'>
           <ToastContainer/>
           {/* <Loading/> */}
            <Routes>
                <Route exact path='/' element={<DashboardHome />}/>
                <Route exact path='/category' element={<HealthCategoryList />}/>
                <Route exact path='/category/:method/:categoryId' element={<HealthCATaddEdit />}/>
                <Route exact path='/health' element={<UserList />}/>
                <Route exact path='/health/StatsAdd/:userId' element={<HealthStatsADD />}/>
                <Route exact path='/health/Stats/:userId' element={<UserHealthStats />}/>
                <Route exact path='/health/Stats/:userId/:type' element={<UserHealthDataSingle />}/>
          
            </Routes>
       </div>
  )
}

export default DataContainer