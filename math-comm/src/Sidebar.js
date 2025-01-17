import React from 'react'
import SidebarRow from "./SidebarRow"
import "./Sidebar.css"

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue} from './StateProvider'


function Sidebar() {

    const [ {user} , dispatch] = useStateValue();

    return (
        <div className="sidebar">
                        <SidebarRow src={user.photoURL} title={user.displayName}  />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"   />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Direct Messages"   />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"   />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Popular Tutors"   />
        </div>
    )
}

export default Sidebar

