import React from 'react'
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle'


const Toggle = (props) => (
<div>
<DrawerToggle clicked={props.drawerToggleClicked}/>
</div>
);

export default Toggle