import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetHealthData } from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link, useParams } from 'react-router-dom'

const UserHealthStats = () => {
    const dispatch = useDispatch()
    const paramData = useParams()

    const HealthData = useSelector(state => state.MuscleFuel.HealthData);
    const [userData, setUserData] = useState(false)

    useEffect(() => {
        var data = {
            userId:parseInt(paramData.userId),
            order:'desc',
            recordLimit:1,
        }
     dispatch(GetHealthData(data))
    }, [])

    useEffect(() => {
        if(HealthData!==undefined){
            setUserData(HealthData[0])
        }else{
            setUserData(false)
        }
    }, [HealthData])
    

    console.log('HealthData',HealthData);
    

  return (
    <div className='IMP'>
      <div className="breadcrumb">
        <span>
          <Link to='#'><span class="material-icons-outlined">equalizer</span>Statistics</Link>/
          <Link to='/health'><span class="material-icons-outlined">health_and_safety</span>Health</Link>/
          <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
      </div>
      <div className="Header">
        <h2><span class="material-icons-outlined">equalizer</span>Health Statistics Data</h2>
      </div>

        {userData?<div className='statsContainer'>
            <div className='statsCard'>
                <span class="material-icons-outlined">monitor_weight</span>
                <span>Weight</span>
                <span>{userData.weight}<p>kg</p></span>
                <Link to={`/health/Stats/${paramData.userId}/${'weight'}`}><span class="material-icons-outlined">query_stats</span></Link>
            </div>
            <div className='statsCard'>
                <span class="material-icons-outlined">height</span>
                <span>Height</span>
                <span>{userData.height}<p>cm</p></span>
                <Link to={`/health/Stats/${paramData.userId}/${'height'}`}><span class="material-icons-outlined">query_stats</span></Link>
            </div>
            <div className='statsCard'>
                <span class="material-icons-outlined">height</span>
                <span>Waist</span>
                <span>{userData.waist}<p>cm</p></span>
                <Link to={`/health/Stats/${paramData.userId}/${'waist'}`}><span class="material-icons-outlined">query_stats</span></Link>
            </div>
            <div className='statsCard'>
                <span class="material-icons-outlined">height</span>
                <span>Shoulder</span>
                <span>{userData.shoulder}<p>cm</p></span>
                <Link to={`/health/Stats/${paramData.userId}/${'shoulder'}`}><span class="material-icons-outlined">query_stats</span></Link>
            </div>
            <div className='statsCard'>
                <span class="material-icons-outlined">height</span>
                <span>Back</span>
                <span>{userData.back}<p>cm</p></span>
                <Link to={`/health/Stats/${paramData.userId}/${'back'}`}><span class="material-icons-outlined">query_stats</span></Link>
            </div>
            <div className='statsCard'>
                <span class="material-icons-outlined">height</span>
                <span>Left Arm</span>
                <span>{userData.leftArm}<p>cm</p></span>
                <Link to={`/health/Stats/${paramData.userId}/${'leftArm'}`}><span class="material-icons-outlined">query_stats</span></Link>
            </div>
            <div className='statsCard'>
                <span class="material-icons-outlined">height</span>
                <span>Right Arm</span>
                <span>{userData.rightArm}<p>cm</p></span>
                <Link to={`/health/Stats/${paramData.userId}/${'rightArm'}`}><span class="material-icons-outlined">query_stats</span></Link>
            </div>
        </div>:<h3>Sorry! No Data Available</h3>}
     
    </div>
  )
}

export default UserHealthStats