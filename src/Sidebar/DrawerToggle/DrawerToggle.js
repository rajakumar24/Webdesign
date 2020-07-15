import React from 'react'
import './DrawerToggle.css'

const drawerToggle = (props) => (
  <div className="menu" onClick={props.clicked}>Menu</div>
);
export default drawerToggle