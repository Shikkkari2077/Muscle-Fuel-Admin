import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetHealthData } from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link, useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserHealthDataSingle = () => {
    const dispatch = useDispatch()
    const paramData = useParams()

    const HealthData = useSelector(state => state.MuscleFuel.HealthData);

    const [FinalData, setFinalData] = useState([])

    useEffect(() => {
        var data = {
            userId:parseInt(paramData.userId),
            healthDetailsMasterId:paramData.healthID,
            order:'asc'
        }
     dispatch(GetHealthData(data))
    }, [])


    console.log('HealthData',HealthData);

    useEffect(() => {
     if(HealthData){
      var Data = HealthData.map((item,index)=>{
        var name = paramData.type
        return {
          createdAt:item.createdAt,
          Data:item.healthData[0].value
        }
      })

      setFinalData(Data)
     }
    }, [HealthData])
    
    console.log('FinalData',FinalData);

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
        <h2><span class="material-icons-outlined">equalizer</span>Statistics Data of <b style={{color:'#dc2f2f',marginLeft:'1rem'}}>"{paramData.type}"</b></h2>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={1000}
          height={400}
          data={FinalData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={`${paramData.type}`} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Data" stroke="#82ca9d" />
        </LineChart >
      {/* </ResponsiveContainer> */}
     
    </div>
  )
}

export default UserHealthDataSingle