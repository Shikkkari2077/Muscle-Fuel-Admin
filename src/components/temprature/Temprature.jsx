import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetTempData} from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'

const Temprature = () => {
    const dispatch = useDispatch()

    const TempList = useSelector(state => state.MuscleFuel.TempList);

    const [Mobile, setMobile] = useState('')
    const [Email, setEmail] = useState('')
    const [Temp, setTemp] = useState(false)
    
    useEffect(() => {
        dispatch(GetTempData())
    }, [])
   
    useEffect(() => {
      if(TempList){
        setTemp(TempList)
      }else{
        setTemp(false)
      }
    }, [TempList])

   console.log('TempList',TempList);

  const columns = [
    
    {
      name: "user_firstname",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
        display:false,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Driver First Name</span>
        }
      },
    },
    {
      name: "user_lastname",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Driver Name</span>
        },
        customBodyRender:(user_lastname, tableData)=>{
            var fName = tableData.rowData[0]
            return(
                <>{fName + ' ' +user_lastname}</>
            )
        }
      }
    },
    
    {
      name: "user_mobile",
      label: "Phone",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Phone</span>
        },
      }
    },
    {
      name: "email",
      // label: "Total Distance",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>E-Mail</span>
        },
    },
  },
  {
    name: "image_url",
    options: {
      filter: true,
      sort: true,
      display:false,
      customHeadLabelRender:()=>{
        return<span style={{
          letterSpacing:'0',
          fontWeight:'600'
        }}>DOB</span>
      },
  },
},
  {
    name: "temperature",
    options: {
      filter: true,
      sort: true,
      customHeadLabelRender:()=>{
        return<span style={{
          letterSpacing:'0',
          fontWeight:'600'
        }}>Temperature</span>
      },
      customBodyRender:(temperature, tableData)=>{
            var StartImage = tableData.rowData[4]
        return (
            <div className='TempImage'>
                <img src={StartImage} alt="" />
                <span>{temperature}  &#8451;</span>
            </div>
        )
      }
  },
},

{
  name: "status",
  label: "Attendance No",
  options: {
    filter: true,
    sort: true,
    customHeadLabelRender:()=>{
      return<span style={{
        letterSpacing:'0',
        fontWeight:'600'
      }}>Status</span>
    },
     customBodyRender:(status)=>{
            return(
                <div>
                {/* <Toggle
                    defaultChecked={status==1?true:false}
                    onChange={onStatusChange} /> */}
                   {status=='active'? <label className='btnACTIVE'>Active</label>: <label className='btnIN_ACTIVE'>Inactive</label>}
                </div>
            )
        }
},
},
    // {
    //   name: "user_master_id",
    //   // label: "Action",
    //   options: {
    //     filter: true,
    //     sort: true,
    //     customHeadLabelRender:()=>{
    //       return<span style={{
    //         letterSpacing:'0',
    //         fontWeight:'600'
    //       }}>Health Data</span>
    //     },
    //     customBodyRender: (user_master_id)=>{
    //       return <div className='iconsDIV'>
    //         <Link to={`/health/Stats/${user_master_id}`} style={{textDecoration:'none'}}>
              
    //             <span style={{color:'#2b4353'}} class="material-icons-outlined">query_stats</span>
             
    //         </Link>
    //         <Link to={`/health/StatsAdd/${user_master_id}`} style={{textDecoration:'none'}}>
              
    //             <span style={{color:'#005792'}} class="material-icons-outlined">playlist_add</span>
             
    //         </Link>
    //       </div>
    //     }
    //   }
    // },
    
    
  ];

  
  const options = {
      filterType: "dropdown",
      search:false,
      filter:false,
      viewColumns: false,
      print: false,
      pagination:true,
      download: false,
      selectableRows: "none",
      // responsive: 'scrollMaxHeight',
  };

  return (
    <div className='IMP'>
      <div className="breadcrumb">
        <span>
          <Link to='/health'><span class="material-icons-outlined">thermostat</span>Temperature</Link>/
          <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
      </div>
      <div className="Header">
        <h2><span class="material-icons-outlined">thermostat</span>Temperature</h2>
        {/* <Link to='/users/Add'>
                ADD USER
        </Link> */}
      </div>
      {/* <div className="FILTERS">
        <input onChange={(e)=>setMobile(e.target.value)} value={Mobile} type="text" placeholder='Searc By Mobile Number' />
        <input onChange={(e)=>setEmail(e.target.value)} value={Email} type="text" placeholder='Searc By Email Address' />
      </div> */}
       <MUIDataTable
          className="table-responsive"
          data={TempList?TempList:[]}
          columns={columns}
          options={options}
        />
    </div>
  )
}

export default Temprature