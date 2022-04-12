import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {GetAutomation} from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { toast } from 'react-toastify'

const DashboardHome = () => {

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const dispatch = useDispatch()

    const DriverList = useSelector(state => state.MuscleFuel.DriverList);

    const [selectDate, setSelectDate] = useState('')

    const OnSubmit=()=>{
        if(!selectDate){
            toast.warning("Please Select A Date!", {
                position: toast.POSITION.TOP_RIGHT
            });
            return false;
        }
        var data = {
            singleDate:selectDate
        }
     dispatch(GetAutomation(data))
    }

    console.log('DriverList',DriverList);
    const columns = [
    
        {
          name: "driverId",
          options: {
            filter: true,
            sort: true,
            customHeadLabelRender:()=>{
              return<span style={{
                letterSpacing:'0',
                fontWeight:'600'
              }}>Driver Id</span>
            }
          },
        },
        {
          name: "orderId",
          options: {
            filter: true,
            sort: true,
            customHeadLabelRender:()=>{
              return<span style={{
                letterSpacing:'0',
                fontWeight:'600'
              }}>Order Id</span>
            }
          }
        },
        {
            name: "driverName",
            options: {
              filter: true,
              sort: true,
              customHeadLabelRender:()=>{
                return<span style={{
                  letterSpacing:'0',
                  fontWeight:'600'
                }}>Driver Name</span>
              }
            },
          },
          {
            name: "areaName",
            options: {
              filter: true,
              sort: true,
              customHeadLabelRender:()=>{
                return<span style={{
                  letterSpacing:'0',
                  fontWeight:'600'
                }}>Area Name</span>
              }
            }
          },
          {
            name: "status",
            options: {
              filter: true,
              sort: true,
              customHeadLabelRender:()=>{
                return<span style={{
                  letterSpacing:'0',
                  fontWeight:'600'
                }}>Status</span>
              }
            }
          },
        
        
      ];
    
      
      const options = {
          filterType: "dropdown",
          search:true,
          filter:false,
          viewColumns: false,
          print: false,
          pagination:true,
          download: false,
          selectableRows: "none",
          // responsive: 'scrollMaxHeight',
      };

  return (
    <div>
        <div className="breadcrumb">
        <span>
            <Link to='/'><span class="material-icons-outlined">local_shipping</span>Drivers</Link>/
            <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
        </div>
        <div className="Header">
        <h2><span class="material-icons-outlined">local_shipping</span>Assign Drivers</h2>
        </div>
        <div className='Driver_opt'>
           <div>
             <div className='driver_input'>
                    <label htmlFor="date">Select Date</label>
                    <input min={disablePastDate()} onChange={(e)=>setSelectDate(e.target.value)} value={selectDate} type="date" id='date'/>
            </div>
           </div>
           <div>
               <button onClick={OnSubmit}>Get Dr!ver List</button>
           </div>
        </div>
        <MUIDataTable
          className="table-responsive"
          data={DriverList?DriverList:[]}
          columns={columns}
          options={options}
        />
    </div>
    )
}

export default DashboardHome