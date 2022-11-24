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
import TrollyTemprature from '../components/temprature/TrollyTemprature';
import Temprature from '../components/temprature/Temprature';
import PushNotification from '../components/PushNotification/PushNotification';


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
                <Route exact path='/temperature/Trolly' element={<TrollyTemprature />}/>
                <Route exact path='/temperature' element={<Temprature />}/>
                <Route exact path='/health/StatsAdd/:userId' element={<HealthStatsADD />}/>
                <Route exact path='/health/Stats/:userId' element={<UserHealthStats />}/>
                <Route exact path='/health/Stats/:userId/:healthID/:type' element={<UserHealthDataSingle />}/>
                <Route exact path='/push-notification' element={<PushNotification />}/>
            </Routes>
       </div>
  )
}

export default DataContainer