import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetUserList } from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'

const UserList = () => {
    const dispatch = useDispatch()

    const UserList = useSelector(state => state.MuscleFuel.UserList);

    const [Mobile, setMobile] = useState('')
    const [Email, setEmail] = useState('')
    const [USERS, setUSERS] = useState(false)
    
    useEffect(() => {
        dispatch(GetUserList())
    }, [])
   
    useEffect(() => {
      if(UserList){
        setUSERS(UserList)
      }else{
        setUSERS(false)
      }
    }, [UserList])

   console.log('UserList',UserList);

  const columns = [
    
    {
      name: "user_firstname",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>First Name</span>
        }
      },
    },
    {
      name: "user_lastname",
      label: "Last Name",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Last Name</span>
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
    name: "date_of_birth",
    // label: "Total Distance",
    options: {
      filter: true,
      sort: true,
      customHeadLabelRender:()=>{
        return<span style={{
          letterSpacing:'0',
          fontWeight:'600'
        }}>DOB</span>
      },
  },
},
  {
    name: "user_gender",
    label: "Total Steps",
    options: {
      filter: true,
      sort: true,
      customHeadLabelRender:()=>{
        return<span style={{
          letterSpacing:'0',
          fontWeight:'600'
        }}>Gender</span>
      },
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
},
},
    {
      name: "user_master_id",
      // label: "Action",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Statistics</span>
        },
        customBodyRender: (user_master_id)=>{
          return <>
            <Link to={`/health/Stats/${user_master_id}`}>
              <span style={{color:'#dc2f2f'}} class="material-icons-outlined">equalizer</span>
            </Link>
          </>
        }
      }
    },
    
    
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
          <Link to='/health'><span class="material-icons-outlined">health_and_safety</span>Health</Link>/
          <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
      </div>
      <div className="Header">
        <h2><span class="material-icons-outlined">health_and_safety</span>Users health Data</h2>
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
          data={USERS?USERS:[]}
          columns={columns}
          options={options}
        />
    </div>
  )
}

export default UserList