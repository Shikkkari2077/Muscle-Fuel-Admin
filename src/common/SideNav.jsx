import {React,useState, useEffect} from "react";
import { Link,useLocation } from "react-router-dom";


const SideNav = () => {
  
  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [drop3, setDrop3] = useState(false)

  const [navActive, setNavActive] = useState(1);

  let location = useLocation()

  useEffect(() => {
    if(location.pathname.includes('/')){
        setNavActive(1)
    }
    if(location.pathname.includes('/temperature')){
      setNavActive(2)
    }
    if(location.pathname.includes('/category')){
        setNavActive(3)
    }
    if(location.pathname.includes('/health')){
        setNavActive(4)
    }
    if(location.pathname.includes('/lucky-draw')){
        setNavActive(5)
    }
    if(location.pathname.includes('/push-notification')){
    setNavActive(5)
    }
  }, [navActive,location.pathname]);

  return (
    <div className="SideNavbar">
      <ul className="NavLinks">
        
        <Link to="/" className="navLink"  onClick={()=>setNavActive(1)}>
          <li className={navActive==1?"Link LinkActive":"Link"}>
           <p><span class="material-icons-outlined">local_shipping</span>Drivers</p>
          </li>
        </Link>

        <Link to="#" className="navLink"  onClick={()=>setNavActive(2)}>
          <li className={navActive==2?"Link LinkActive":"Link"} onClick={()=>setDrop2(!drop2)}>
            <p><span class="material-icons-outlined">thermostat</span>Temperature</p>
            <span class="material-icons-outlined">{drop2?'arrow_drop_down':'arrow_left'}</span>
          </li>
          {drop2?<ul className="subnavLINKS">
              <Link to="/temperature/Trolly" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Trolly Temperature
                </li>
              </Link>
              <Link to="/temperature" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Temperature
                </li>
              </Link>
            </ul>:null}
        </Link>
       
        <Link to="/category" className="navLink"  onClick={()=>setNavActive(3)}>
          <li className={navActive==3?"Link LinkActive":"Link"}>
           <p><span class="material-icons-outlined">category</span>Health Category</p>
          </li>
        </Link>

        <Link to="/health" className="navLink"  onClick={()=>setNavActive(4)}>
          <li className={navActive==4?"Link LinkActive":"Link"}>
           <p><span class="material-icons-outlined">health_and_safety</span>User Health</p>
          </li>
        </Link>

        <Link to="/push-notification" className="navLink"  onClick={()=>setNavActive(5)}>
          <li className={navActive==5?"Link LinkActive":"Link"}>
           <p><span class="material-icons-outlined">notifications</span>Push Notification</p>
          </li>
        </Link>

        {/* <Link  to="#" className="navLink" onClick={()=>setNavActive(2)}>
          <li className={navActive==2?"Link LinkActive":"Link"} onClick={()=>setDrop1(!drop1)}>
            <p><span class="material-icons-outlined">people</span>User Master</p>
            <span class="material-icons-outlined">{drop1?'arrow_drop_down':'arrow_left'}</span>
          </li>
            {drop1?<ul className="subnavLINKS">
             <Link to="/users/top" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Top Users
                </li>
              </Link>
              <Link to="/users/registered" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Registered
                </li>
              </Link>
              <Link to="/users/active" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Active Users
                </li>
              </Link>
              <Link to="/users/Attendant" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Attendant users
                </li>
              </Link>
            </ul>:null}
        </Link> */}

        {/* <Link to="#" className="navLink"  onClick={()=>setNavActive(3)}>
          <li className={navActive==3?"Link LinkActive":"Link"} onClick={()=>setDrop2(!drop2)}>
            <p><span class="material-icons-outlined">wallpaper</span>Banners</p>
            <span class="material-icons-outlined">{drop2?'arrow_drop_down':'arrow_left'}</span>
          </li>
          {drop2?<ul className="subnavLINKS">
              <Link to="/banners" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Home Banners
                </li>
              </Link>
              <Link to="/banners" className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>In-App Banners
                </li>
              </Link>
            </ul>:null}
        </Link> */}

        {/* <Link to="#" className="navLink"  onClick={()=>setNavActive(4)}>
          <li className={navActive==4?"Link LinkActive":"Link"} onClick={()=>setDrop3(!drop3)}>
            <p><span class="material-icons-outlined">local_atm</span>Sponsor Master</p>
            <span class="material-icons-outlined">{drop3?'arrow_drop_down':'arrow_left'}</span>
          </li>
          {drop3?<ul className="subnavLINKS">
              <Link to={`/sponsor`} className="subnavLink">
                <li>
                  <span class="material-icons-outlined">navigate_next</span>Sponsers
                </li>
              </Link>
            </ul>:null}
        </Link> */}

        {/* <Link to="/lucky-draw" className="navLink"  onClick={()=>setNavActive(5)}>
          <li className={navActive==5?"Link LinkActive":"Link"}>
           <p><span class="material-icons-outlined">star_half</span>Lucky Draw</p>
          </li>
        </Link> */}

      </ul>
    </div>
  );
};

export default SideNav;
