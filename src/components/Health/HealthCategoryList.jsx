import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetHealthCategoryList } from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'
import Toggle from 'react-toggle'
import '../Health/reactToggle.css'

const HealthCategoryList = () => {
    const dispatch = useDispatch()

    const HealthCategoryData = useSelector(state => state.MuscleFuel.HealthCategoryData);

    const [healthCatList, setHealthCatList] = useState(false)

    useEffect(() => {
        dispatch(GetHealthCategoryList())
    }, [])
   
    useEffect(() => {
      if(HealthCategoryData){
        setHealthCatList(HealthCategoryData)
      }else{
        setHealthCatList(false)
      }
    }, [HealthCategoryData])

   console.log('HealthCategoryData',HealthCategoryData);


   const onStatusChange=()=>{

   }

   const columns = [
    
    {
      name: "imageUrlMen",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Image Men</span>
        },
        customBodyRender:(imageUrlMen)=>{
            return(
                <div className='healthCat_img'>
                    <img src={imageUrlMen} alt="" />
                </div>
            )
        }
      },
    },
    {
      name: "imageUrlWomen",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Image Women</span>
        },
        customBodyRender:(imageUrlWomen)=>{
            return(
                <div className='healthCat_img'>
                    <img src={imageUrlWomen} alt="" />
                </div>
            )
        }
      },
    },
    {
      name: "field",
      label: "Category Name (En)",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Category Name (En)</span>
        }
      }
    },

    {
      name: "fieldAr",
      label: "Category Name (Ar)",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Category Name (Ar)</span>
        }
      }
    },
    
    {
      name: "unit",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Unit (En)</span>
        },
      }
    },
    {
      name: "unitAr",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Unit (Ar)</span>
        },
      }
    },
    {
      name: "status",
      // label: "Total Distance",
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
                   {status==1? <label className='btnACTIVE'>Active</label>: <label className='btnIN_ACTIVE'>Inactive</label>}
                </div>
            )
        }
    },
  },
  
    {
      name: "id",
      // label: "Action",
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender:()=>{
          return<span style={{
            letterSpacing:'0',
            fontWeight:'600'
          }}>Action</span>
        },
        customBodyRender: (id)=>{
          return <>
            <Link to={`/category/${'edit'}/${id}`}>
              <span style={{color:'#dc2f2f'}} class="material-icons-outlined">drive_file_rename_outline</span>
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
        <Link to='/health'><span class="material-icons-outlined">category</span>Category</Link>/
        <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
      </span>
    </div>
    <div className="Header">
      <h2><span class="material-icons-outlined">category</span>Health Category</h2>
      <Link to={`/category/${'add'}/${'new'}`}>
              ADD CATEGORY
      </Link>
    </div>
    {/* <div className="FILTERS">
      <input onChange={(e)=>setMobile(e.target.value)} value={Mobile} type="text" placeholder='Searc By Mobile Number' />
      <input onChange={(e)=>setEmail(e.target.value)} value={Email} type="text" placeholder='Searc By Email Address' />
    </div> */}
     <MUIDataTable
        className="table-responsive"
        data={healthCatList?healthCatList:[]}
        columns={columns}
        options={options}
      />
  </div>
  )
}

export default HealthCategoryList