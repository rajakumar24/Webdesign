import React, { Component } from 'react'
import { connect } from 'react-redux';
import Layout from './containers/Layout/Layout';
import { Navbar } from 'react-bootstrap';

const mapStateToProps = state => {
    return {
        pageData: state.pageData

    };
};
class NewPage extends Component {
    
    render() {
        console.log( "location.state.follow", this.props.pageData)
        return (
            
            <div>
                <Navbar style={{textAlign:"center"}} bg="dark" variant="dark">
                <Navbar.Brand >
                {this.props.pageData.data}
                </Navbar.Brand>
            </Navbar>
                
                <Layout/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(NewPage)