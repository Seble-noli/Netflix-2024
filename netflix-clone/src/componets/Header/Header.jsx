import React from 'react'
import'./header.css'
import Netflixlogo from '../../assets/image/netflix logo.svg'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header-outer-continer">
      <div className="header-continer">
        <div className="header-lift">
          <ul>
            {<img src={Netflixlogo} alt="Netflixlogo" width="100" />}
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Moviese</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header