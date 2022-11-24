import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetUserList, sendNotification } from '../../actions/HomeActions'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify'



const PushNotification = () => {
    const dispatch = useDispatch()

    const UserList = useSelector(state => state.MuscleFuel.UserList);

    const [USERS, setUSERS] = useState(false)
    const [selectedUsers, setSelectedUsers] = useState([])

    const [info, setInfo] = useState({
      title:'',
      message:'',
    })

    const handleChange =(e)=>{
      const {name,value}=e.target
      setInfo({...info,[name]:value})
    }

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [notfyType, setNotfyType] = useState('all')

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

      
      const onUserSelect =(e)=>{
        var userId = parseInt(e.target.value)
        if(!selectedUsers.includes(userId)){
            setSelectedUsers([...selectedUsers,userId])
        }else{
            var filter = selectedUsers.filter(data=>data!==userId)
            setSelectedUsers(filter)
        }
      }

      console.log('selectedUsers',selectedUsers);
      const onSendNotification =()=>{

        if(info.title===''){
          toast.warning(`Please enter title!`, {
              position: toast.POSITION.TOP_RIGHT
          });
          return false
        }
        if(info.message===''){
          toast.warning(`Please enter message!`, {
            position: toast.POSITION.TOP_RIGHT
        });
          return false
        }

        if(notfyType=='all'){
            var data = {
                "title": info.title,
                "message": info.message
            }
            console.log('all',data);
            dispatch(sendNotification(data))
        }else{
            var data = {
                "title": info.title,
                "message": info.message,
                userIds:selectedUsers
            }
            console.log('selected',data);
            dispatch(sendNotification(data))
        }
      }

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
        name: "user_master_id",
        label: "Select",
        options: {
          filter: true,
          sort: true,
          display:notfyType=='all'?false:true,
          customHeadLabelRender:()=>{
            return<span style={{
              letterSpacing:'0',
              fontWeight:'600'
            }}>Select</span>
          },
          customBodyRender:(user_master_id)=>{
            return <>
                <input onChange={onUserSelect} className='SelectBOX' type="checkbox" value={user_master_id} />
            </>
          }
        },
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
            <Link to='/health'><span class="material-icons-outlined">notifications</span>Push Notification</Link>/
            <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
        </span>
        </div>
        <div className="Header">
        <h2><span class="material-icons-outlined">notifications</span>Push Notification</h2>
        <div>
            <select name="" id="" onChange={(e)=>setNotfyType(e.target.value)}>
                <option value="all">All Users</option>
                <option value="selected">Selected Users</option>
            </select>
            <a onClick={onOpenModal}>
                MESSAGE
            </a>
        </div>
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
        <Modal open={open} onClose={onCloseModal} center>
          <div className="messageModal">
              <h4>Enter Message Here!</h4>
              <input type="text" placeholder='Title' name='title' value={info.title} onChange={handleChange} />
              <textarea rows={7} type="text" placeholder='Message' name='message' value={info.message} onChange={handleChange} />
              <div>
                <button onClick={onCloseModal}>Cancel</button>
                <button onClick={onSendNotification}>Send</button>
              </div>
          </div>
        </Modal>
        
    </div>
  )
}

export default PushNotification