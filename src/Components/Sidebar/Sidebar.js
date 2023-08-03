import React ,{useState} from 'react'
import "./Sidebar.css";
import Home from '../Home/Home';
import { BsChevronDoubleLeft ,BsChevronDoubleRight} from "react-icons/bs";
import Sidebarlist from './Sidebarlist';
const Sidebar = ({ theme, changeTheme }) => {

    const [expandSidebar,setExpandSidebar]= useState(false);

    const handleExpandClick =() =>{
        setExpandSidebar(!expandSidebar)
    }
  return (
    <div className='container-fluid sidebar-section'>
    <div className={expandSidebar ? "sidebar-expand sidebar":"sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
            <p onClick={handleExpandClick}
              //  onMouseEnter={() => setExpandSidebar(true)}
               >
                {expandSidebar ?(
                    <BsChevronDoubleLeft size={30}/>
                ):(
                    <BsChevronDoubleRight size={30}/>
                )
                }
                </p>
        </div>
        <Sidebarlist expandSidebar={expandSidebar}  onMouseLeave={()=>setExpandSidebar(false)}/>
    </div>
    <div className="container">
      <Home changeTheme={changeTheme} theme={theme}/>
    </div>
    </div>
  )
}

export default Sidebar
