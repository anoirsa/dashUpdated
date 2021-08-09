import React from 'react'
import './Sidebar.css'
import {LineStyle, Timeline, TrendingUp,Person,Announcement} from '@material-ui/icons';
import {Link} from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Dashboard</h3>
                        <div className="sidebarList">
                            <Link className="sidebarListitem" to="/dash">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </Link>
                            <Link className="sidebarListitem" to="/dash/announcements">
                                <Announcement className="sidebarIcon" />
                                Announcements
                            </Link>
                           
                        </div>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> QuicMenu</h3>
                        <div className="sidebarList">
                            <Link to="/dash/users" className="sidebarListitem">
                                <Person className="sidebarIcon" />
                                Users
                            </Link>
                            <Link to="/dash/ai_model" className="sidebarListitem">
                                <Timeline className="sidebarIcon" />
                                AI Model
                            </Link>
                            <Link to="/dash/bankenergi" className="sidebarListitem">
                                <Timeline className="sidebarIcon" />
                                BankEnergi
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
