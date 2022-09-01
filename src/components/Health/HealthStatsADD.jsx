import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetHealthCategoryList, ADDUserHealthData} from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link , useParams} from 'react-router-dom'
import Toggle from 'react-toggle'
import '../Health/reactToggle.css'

const HealthStatsADD = () => {
    const routeDATA = useParams()
    const dispatch = useDispatch()
    const HealthCategoryData = useSelector(state => state.MuscleFuel.HealthCategoryData)

    useEffect(() => {
        dispatch(GetHealthCategoryList())
      }, [])
   

    const [DATE, setDATE] = useState('')
    const [healtDetail, setHealtDetail] = useState([{value:null,healthMasterId:null}])

    const optionHandleChange =(e,index)=>{
        const updatedOption = healtDetail.map((data,i)=> index==i?Object.assign(data,{[e.target.name]:e.target.value}):data)
        setHealtDetail(updatedOption)
    }

    const AddHealtDetail = () =>{
        var item = {value:null,healthMasterId:null}
        setHealtDetail([...healtDetail,item])
    }
    
    const RemoveHealtDetail = (index) =>{

        const option = [...healtDetail]

            option.splice(index,1)

            setHealtDetail(option)

    }

    const OnSubmit =(e)=>{
        e.preventDefault()
        var data = {
            "userId": parseInt(routeDATA.userId),
            "date": DATE,
            "healthDetails":healtDetail
        }

        dispatch(ADDUserHealthData(data))
    }
  return (
    <div className='IMP'>
    <div className="breadcrumb">
      <span>
        <Link to='#'><span class="material-icons-outlined">equalizer</span>Health Data</Link>/
        <Link to='/health'><span class="material-icons-outlined">health_and_safety</span>Health</Link>/
        <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
      </span>
    </div>
    <div className="Header">
      <h2><span class="material-icons-outlined">category</span>Health Data Add</h2>
      <Link to='/health'>
        BACK
      </Link>
    </div>
    {/* <div className="FILTERS">
      <input onChange={(e)=>setMobile(e.target.value)} value={Mobile} type="text" placeholder='Searc By Mobile Number' />
      <input onChange={(e)=>setEmail(e.target.value)} value={Email} type="text" placeholder='Searc By Email Address' />
    </div> */}
     <form onSubmit={OnSubmit} className='ADD_USER'>
           
            <div className="secondary">
                <div>
                    <label htmlFor="age_group">Date</label>
                    <input onChange={(e)=>setDATE(e.target.value)} value={DATE} type="date" name="" id="" />
                </div>
                <div>
                    <div className='Add_div'>
                        <label htmlFor="medical_conditions">Health Categories</label>
                        <span onClick={AddHealtDetail} htmlFor="">Add +</span>
                    </div>
                    {healtDetail.map((Detail,index)=>(
                        <div className='condition'>
                            <select 
                            name="healthMasterId"
                            value={Detail.healthMasterId}
                            onChange={(e)=>optionHandleChange(e,index)}
                            id="medical_conditions">
                                <option value=""> -- Select Health Category -- </option>
                                {HealthCategoryData?HealthCategoryData.map((data,idx)=>(
                                    <option value={data.id}>
                                        {data.field}
                                    </option>
                                )):null}
                            </select>
                            <input 
                            name="value"
                            value={Detail.value}
                            onChange={(e)=>optionHandleChange(e,index)}
                            type="text"
                            placeholder='Value of Category'
                             />
                            <span onClick={()=>RemoveHealtDetail(index)} class="material-icons-outlined">close</span>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="third">
                <button type='submit'>Submit</button>
            </div>
        </form>
  </div>
  )
}

export default HealthStatsADD