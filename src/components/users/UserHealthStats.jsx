import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetHealthData, GetUserList } from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link, useParams } from 'react-router-dom'

const UserHealthStats = () => {
    const dispatch = useDispatch()
    const paramData = useParams()

    const HealthData = useSelector(state => state.MuscleFuel.HealthData);
    const UserList = useSelector(state => state.MuscleFuel.UserList);
    const [userData, setUserData] = useState(false)
    const [userInfo, setUserInfo] = useState(false)

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

    useEffect(() => {
      if(UserList!==undefined){
        var filtered = UserList.filter(data=>data.user_master_id==paramData.userId)
          setUserInfo(filtered[0])
      }else{
          setUserInfo(false)
      }
  }, [UserList])
    

    console.log('HealthData',HealthData);
    console.log('userInfo',userInfo);
    

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
            <div className="userDetails">
              <p>
                <b>Name:</b> {userInfo.user_firstname+" "+ userInfo.user_lastname} 
              </p>
              <p>
             <b> Email:</b> {userInfo.email}
              </p>
              <p>
              <b>DOB:</b> {userInfo.date_of_birth}
              </p>
              <p>
             <b> Gender:</b> {userInfo.user_gender}
              </p>
              <p>
             <b> Status:</b> {userInfo.status}
              </p>
            </div>
            <div className='statsContainer'>
                {userData?userData.healthData.map((data,index)=>(
                    <div className='statsCard'>
                        <div><img src={data.imageUrl} alt="" /></div>
                        <span>{data.field}</span>
                        <span>{data.value}<p>{data.unit}</p></span>
                        <Link to={`/health/Stats/${paramData.userId}/${data.healthMasterId}/${data.field}`}><span class="material-icons-outlined">query_stats</span></Link>
                    </div>
                )):null}
            </div>
    </div>
  )
}

export default UserHealthStats