import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './Sidebar.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../containers/hoc/Auxiliary/Auxiliary'
import { Form, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from "../../src/action/index";
import { Link, Redirect } from 'react-router-dom'

function mapDispatchToProps(dispatch) {
    return {
        addListItem: listItem => dispatch(actions.addListItem(listItem)),
        postPage: page => dispatch(actions.postPage(page)),
    };
}

const mapStateToProps = state => {
    return {
        pagesInt: state.pagesInt

    };
};

const Sidebar = (props) => {
    const [pageItems, setPageItems] = useState({
        pageValue: '',
        ctrlId: ''
    });

    const handleChange = event => {
        const { id, value } = event.target;
        setPageItems({ pageValue: value, ctrlId: id });
    }
    const [pages, setPages] = useState([]);

    const addItemValue = () => {
        let data = pageItems.pageValue;
        let listItemObject = {
            data,
            status: "success",
            temp: pageItems.ctrlId
        };

        props.addListItem(listItemObject);

        setPages({ pages: props.pagesInt });

        setPageItems({ pageValue: '', ctrlId: '' });
    }
    const [redirect, setRedirect] = useState(false);
    
   const  handleSort = (page) => {
       props.postPage(page)
        setRedirect(true);
        
        console.log(page)
    }
    console.log(props.pagesInt);
   
    if (redirect) {
        return (
          <Redirect

            to={{
              pathname: '/newPage',
             
            }}
          />
        );
      }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div>
                <div className={`sidebar ${props.open ? "open" : "close"}`} >

                    <List disablePadding dense>
                        <ListItem button>
                            <ListItemText>Web Design</ListItemText>
                        </ListItem>
                        
                    </List>
                    <div className="addPage"><Form >
                        <Form.Group  controlId="addPageList">
                            <Row >
                            <Col sm={8}>
                                <Form.Control
                                    type="text"
                                    placeholder="Page"
                                    value={pageItems.pageValue}
                                    onChange={handleChange}
                            
                                /></Col>
                                <Col sm={2}>
                               
                                    <Button variant="primary" type="button" onClick={addItemValue}>
                                        +
                            </Button>
                               
                            </Col></Row> </Form.Group> </Form></div>
                    
                    {
                        props.pagesInt.length ?
                            <List>
                                {
                                    props.pagesInt.map((page, i) => {

                                        return (
                                            <Link  key={i} onClick={() => handleSort(page)}>
                                        
                                            <ListItem >
                                                <ListItemText>{page.data}</ListItemText>
                                            </ListItem></Link>
                                        )
                                    })
                                }
                            </List> :
                            null
                    }

                </div>
            </div>
        </Aux >
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
