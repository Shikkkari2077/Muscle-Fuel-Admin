import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetHealthCategoryList, ADDHealthCategory, EDITHealthCategory } from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link , useParams} from 'react-router-dom'
import Toggle from 'react-toggle'
import '../Health/reactToggle.css'

const HealthCATaddEdit = () => {
    const routeDATA = useParams()
    const dispatch = useDispatch()
    const HealthCategoryData = useSelector(state => state.MuscleFuel.HealthCategoryData)

   
    const [category, setCategory] = useState({
        field: "",
        unit: "",
        unitAr: "",
        fieldAr:'',
    })

    const [imgDATA, setimgDATA] = useState(false)
    const [imgURL, setimgURL] = useState(false)

    const [imgURLWomen, setimgURLWomen] = useState(false)
    const [imgDATAWomen, setimgDATAWomen] = useState(false)

    useEffect(() => {
      if(!routeDATA.categoryId=='new'){
        dispatch(GetHealthCategoryList())
      }
    }, [routeDATA.categoryId])
    
    useEffect(() => {
        if(HealthCategoryData&&routeDATA.method=='edit'){
            var spr = HealthCategoryData.filter(data=>data.id==routeDATA.categoryId)
            setCategory(spr[0])
           setimgURL(spr[0].imageUrlMen)
           setimgURLWomen(spr[0].imageUrlWomen)
        }
       }, [HealthCategoryData])
       
    const handleChange =(e)=>{
        const {name, value} = e.target
        setCategory({...category,[name]:value})
    }

    const ImagesToUpload = (e)=>{
        var imgurl = URL.createObjectURL(e.target.files[0])
        var imgdata = e.target.files[0]
        setimgURL(imgurl)
        setimgDATA(imgdata)
    }

    const ImagesToUploadWomen = (e)=>{
      var imgurl = URL.createObjectURL(e.target.files[0])
      var imgdata = e.target.files[0]
      setimgURLWomen(imgurl)
      setimgDATAWomen(imgdata)
  }

    const OnSUBMIT=(e)=>{
        e.preventDefault()
        var formData = new FormData()
        formData.append('field',category.field)
        formData.append('fieldAr',category.fieldAr)
        formData.append('unit',category.unit)
        formData.append('unitAr',category.unitAr)
        formData.append('menFile',imgDATA)
        formData.append('womenFile',imgDATAWomen)

        if(routeDATA.categoryId=='new'){
            dispatch(ADDHealthCategory(formData))
        }else{
            formData.append('id',routeDATA.categoryId)
            dispatch(EDITHealthCategory(formData))
        }
    }

    console.log('imgDATA',imgDATA);
    console.log('imgURL',imgURL);
    
  return (
    <div className='IMP'>
    <div className="breadcrumb">
      <span>
        <Link to='/health'><span class="material-icons-outlined">category</span>Category</Link>/
        <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
      </span>
    </div>
    <div className="Header">
      <h2><span class="material-icons-outlined">category</span>Health Category {routeDATA.method}</h2>
      <Link to='/category'>
        BACK
      </Link>
    </div>
    {/* <div className="FILTERS">
      <input onChange={(e)=>setMobile(e.target.value)} value={Mobile} type="text" placeholder='Searc By Mobile Number' />
      <input onChange={(e)=>setEmail(e.target.value)} value={Email} type="text" placeholder='Searc By Email Address' />
    </div> */}
     <form className="HealthADD_EDIT" onSubmit={OnSUBMIT}>
      <div  className='ImageContaner'>
        <div>
              <div className='IMG_DIV'>
                  {/* {imgURL?<div style={{background :`url(${imgURL}) no-repeat center/cover`}}>
                  </div>:<span>No Image Yet!</span>} */}
                  {imgURL?<img src={imgURL} alt="" />:<span>Image For Men!</span>}
              </div>
              <div className='inputFIELDimg'>
                  <label htmlFor="SponsorImage">Choose Image</label>
                  <input onChange={ImagesToUpload} id='SponsorImage' type="file" hidden accept="image/png, image/gif, image/jpeg"/>
              </div>
        </div>
        <div>
            <div className='IMG_DIV'>
                {/* {imgURL?<div style={{background :`url(${imgURL}) no-repeat center/cover`}}>
                </div>:<span>No Image Yet!</span>} */}
                {imgURLWomen?<img src={imgURLWomen} alt="" />:<span>Image For Women!</span>}
            </div>
            <div className='inputFIELDimg'>
                <label htmlFor="SponsorImageWomen">Choose Image</label>
                <input onChange={ImagesToUploadWomen} id='SponsorImageWomen' type="file" hidden accept="image/png, image/gif, image/jpeg"/>
            </div>
      </div>
      </div>
       <div>
          <div className='InputFieldMulti'>
            <div className='inputFIELD'>
                  <label htmlFor="field">Category Name (En)</label>
                  <input value={category.field} onChange={handleChange} name='field' id='field' type="text" placeholder='Health Category Name'/>
              </div>

              <div className='inputFIELD'>
                  <label htmlFor="fieldAr">Category Name (Ar)</label>
                  <input value={category.fieldAr} onChange={handleChange} name='fieldAr' id='fieldAr' type="text" placeholder='Health Category Name'/>
              </div>
          </div>
        
            <div className='InputFieldMulti'>
              <div className='inputFIELD'>
                  <label htmlFor="url">Unit (En)</label>
                  <input value={category.unit} onChange={handleChange} name='unit' id='unit' type="text" placeholder='Health Category Unit (En)' />
              </div>
              <div className='inputFIELD'>
                  <label htmlFor="unitAr">Unit (Ar)</label>
                  <input value={category.unitAr} onChange={handleChange} name='unitAr' id='unitAr' type="text" placeholder='Health Category Unit (Ar)' />
              </div>
            </div>
            <div className="inputFIELD">
                <button type='submit'>{routeDATA.categoryId=='new'?'SUBMIT':'UPDATE'}</button>
            </div>
       </div>
    </form>
  </div>
  )
}

export default HealthCATaddEdit