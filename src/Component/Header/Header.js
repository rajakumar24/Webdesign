import React from 'react'
import './Header.css'
import { Icon } from 'react-icons-kit';
import {androidStarOutline} from 'react-icons-kit/ionicons/androidStarOutline'
import {naviconRound} from 'react-icons-kit/ionicons/naviconRound'
import {androidArrowDropdown} from 'react-icons-kit/ionicons/androidArrowDropdown'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        pageData: state.pageData

    };
};
const Header = (props) => {
 console.log("hi", props.pageData);
    return (
   <div className="header">
       <div className="header1"><h3 >
          {
              props.pageData.data ? 
              props.pageData.data : " Web design "
          }
           
           <Icon size={22} icon={androidStarOutline} /></h3>
       
       <p style={{color: "thistle"}}>Add board description</p>
       <Icon size={22} icon={naviconRound} /> Main Table  <Icon size={22} icon={androidArrowDropdown} />
       <Button className="absolute" variant="primary">New Item</Button><input className="input" type="text" placeholder="Search/Filter Board" /></div>
   </div>
    );
}

export default connect(
    mapStateToProps,
    null
)(Header)