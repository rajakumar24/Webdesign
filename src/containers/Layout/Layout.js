import React, { Component } from "react";
import Aux from '../hoc/Auxiliary/Auxiliary'
import Sidebar from '../../Sidebar/Sidebar'
import TodoListView from '../TodoListView/TodoList';
import Toggle from '../../Toggle/Toggle'
import Header from '../../Component/Header/Header'




class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }
    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    render(){
        return(
            <Aux>
                <Header/>
                <div className="menu1"><Toggle  drawerToggleClicked={this.sideDrawerToggleHandler}/></div> 
                <TodoListView  />
            <div>
                <Sidebar open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} /></div>
            </Aux>
        );
    }
    
}

export default Layout;