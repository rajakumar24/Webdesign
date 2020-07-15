import React, { Component } from "react";
import { Form, Row, Col, Button, ListGroup, Card, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ic_delete as deleteIcon } from 'react-icons-kit/md/ic_delete';
import { pencil as editIcon } from 'react-icons-kit/icomoon/pencil';
import { Icon } from 'react-icons-kit';
import * as actions from "../../action/index";
import './TodoList.css';
import { androidArrowDropdownCircle } from 'react-icons-kit/ionicons/androidArrowDropdownCircle'
import Dropdown from 'react-dropdown'


function mapDispatchToProps(dispatch) {
    return {
        addListItem: listItem => dispatch(actions.addListItem(listItem)),
        updateListItem: updateditem =>
            dispatch(actions.updateListItem(updateditem)),
        deleteListItem: details => dispatch(actions.deleteListItem(details))
    };
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        done: state.done
    };
};
const options = [
    "Working on it", 'Stuck', 'Waiting for review', 'Done'
  ];
  const defaultOption = options[0];

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            addedItem: '',
            doneItem: '',
            activeModel: false,
            updateData: '',
            updateData1: '',
            currentId: 0,
            totalListData: [],
            doneListData: [],
            ctrlId: '',
            updatedStatus: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
        const { id, value } = event.target;
        if (id === 'addList') {
            this.setState({
                addedItem: value,
                ctrlId: id
            })
        }
        if (id === 'doneList') {
            this.setState({
                doneItem: value,
                ctrlId: id

            })
        }
        if (id === 'updateList') {
            this.setState({
                updateData: value,
                ctrlId: id
            })
        }
    }

    addItemValue() {
        let data = this.state.addedItem;
        if (this.state.ctrlId === "addList") {
            data = this.state.addedItem;
        }

        if (this.state.ctrlId === "doneList") {
            data = this.state.doneItem;
        }
        let listItemObject = {
            data,

            status: "success",
            temp: this.state.ctrlId
        };
        this.props.addListItem(listItemObject);
        this.setState({
            addedItem: '',
            doneItem: '',
            totalListData: this.props.todos,
            doneListData: this.props.done
        })
    }

    handleOpenModal(listData, index, status) {
        this.setState({
            activeModel: true,
            updateData: listData.data,
            updatedStatus: status,
            currentId: index
            
        })

    }

    handleSave() {
        const data = this.state.updateData;
       const status = this.state.updatedStatus;
        const id = this.state.currentId
        const updateditem = {
            id,
            data,
           status
        };
        console.log(updateditem);
        this.props.updateListItem(updateditem);
        this.setState({
            activeModel: false
        })
    }

    handleDeleteList(deleteId, status) {
        const details = {
            deleteId,
            status
        }
        this.props.deleteListItem(details);
        this.setState({
            totalListData: this.props.todos,
            doneListData: this.props.done
          
        })
    }
   

    render() {
        return (
            <div>

                <div className="component">
                   

                        <h5 style={{ color: "rgb(36, 36, 207)", textAlign: "initial", marginTop: "130px"}}><Icon size={22} icon={androidArrowDropdownCircle} /> Things to do </h5>
                        <div className="componentForm">
                        <div className="container-f1">
                        <div className="container-fluid1">
                        <div className="buttongroup">
                                <Button className="btnSize1" variant="primary">Owner</Button>
                                <Button className="btnSize2" variant="primary">Status</Button>
                                <Button className="btnSize3" variant="primary">Due date</Button>
                                <Button className="btnSize4" variant="primary">Priority</Button>
                            </div>
                            <button className="btnSize5">+</button>  
                            <div className="tableItem">
                                <div className="tablePosition">
                                    <p className="tableItem1">New Item      <div className="mesIcon1"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    </svg></div> </p>

                                    <p className="tableItem2">New Item     <div className="mesIcon2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    </svg></div></p>
                                    <p className="tableItem3">New Item     <div className="mesIcon3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    </svg></div></p>
                                    <p className="tableItem4">New Item     <div className="mesIcon4"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    </svg></div> </p>
                                  

                                </div>


                            </div>
                            <div className="owner1">
                                <div> <div className="ownerIcon1"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                </svg></div>
                                </div>
                                <div className="owner2">
                                    <div className="ownerIcon2"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                    </svg></div>
                                </div>
                                <div className="owner3">
                                    <div className="ownerIcon3"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                    </svg></div>
                                </div>
                                <div className="owner4">
                                    <div className="ownerIcon4"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                    </svg></div>
                                </div></div>

                                <div className="status1">
                                <div className="statusIcon1">Working on it</div>
                            </div>
                            <div className="status2">
                                <div className="statusIcon2">Stuck</div>
                            </div>
                            <div className="status3">
                                <div className="statusIcon3">Waiting for review</div>
                            </div>
                            <div className="status4">
                                <div className="statusIcon4">Done</div>
                            </div>

                            <div className="due1">
                                <div className="dueDate1"> Apr 9</div>
                            </div>
                            <div className="due2">
                                <div className="dueDate2"> Apr 10</div>
                            </div>
                            <div className="due3">
                                <div className="dueDate3"> Apr 11</div>
                            </div>
                            <div className="due4">
                                <div className="dueDate4"> Apr 12</div>
                            </div>
                           
            
                            <div className="priority1">
                                <div className="priorityText1">Urgent</div>
                            </div>
                            <div className="priority2">
                                <div className="priorityText2">High</div>
                            </div>
                            <div className="priority3">
                                <div className="priorityText3">Medium</div>
                            </div>
                            <div className="priority4">
                                <div className="priorityText4">Low</div>
                            </div> </div>
                    </div>
                    <div className="FormPostion">
                    <div className="component1">
                <div className="form"><Form >
                    <Form.Group as={Row} controlId="addList">
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="Add Your List Item"
                                value={this.state.addedItem}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col sm={3}>
                            <Button variant="primary" type="button" disabled={!this.state.addedItem} onClick={() => this.addItemValue()}>
                                Add List
                            </Button>
                        </Col>
                    </Form.Group> </Form></div>
                    </div><div className="dropdown"><Dropdown 
                
                    options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                    </div ></div>
                        
        {
            this.state.totalListData.length ?
                <div className="todoCard">
                    {this.state.totalListData.map((todoList, index) => {
                        return (
                            <Card className="card">
                                <ListGroup
                                    key={index}
                                    value={todoList.data}
                                >
                                    <ListGroup.Item>
                                        <Row>
                                            <Col align="center">
                                                {
                                                    <p>
                                                        {<b>{todoList.data}</b>}
                                                    </p>
                                                }
                                            </Col>
                                            <Col align="right">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => this.handleOpenModal(todoList, index, "addList")}
                                                >
                                                    {' '}
                                                    <Icon size={18} icon={editIcon} />
                                                </button>{' '}
                                                {'   '}
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() =>
                                                        this.handleDeleteList(
                                                            index, "addList"
                                                        )
                                                    }
                                                >
                                                    {' '}
                                                    <Icon size={18} icon={deleteIcon} />
                                                </button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        );
                    })}
                </div> :
                null
        }</div>
        <div className="component2">  
        <h5 style={{ color: "rgb(47, 231, 87)", textAlign: "initial", marginTop: "130px" }}><Icon size={22} icon={androidArrowDropdownCircle} /> Done </h5>
          <Form>
                            <Form.Group as={Row} controlId="doneList">
                                <Col sm={9}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Add Your done Item"
                                        value={this.state.doneItem}
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                <Col sm={3}>
                                    <Button variant="primary" type="button" disabled={!this.state.doneItem} onClick={() => this.addItemValue()}>
                                        done List
                            </Button>
                                </Col>
                            </Form.Group>
                        </Form>
                        </div>
        {
            this.state.doneListData.length ?
            <div className="todoCard1">
                    {this.state.doneListData.map((doneList, index) => {
                        return (
                            <Card className="card1">
                                <ListGroup
                                    key={index}
                                    value={doneList.data}
                                >
                                    <ListGroup.Item>
                                        <Row>
                                            <Col align="center">
                                                {
                                                    <p>
                                                        {<b>{doneList.data}</b>}
                                                    </p>
                                                }
                                            </Col>
                                            <Col align="right">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => this.handleOpenModal(doneList, index, "doneList")}
                                                >
                                                    {' '}
                                                    <Icon size={18} icon={editIcon} />
                                                </button>{' '}
                                                {'   '}
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() =>
                                                        this.handleDeleteList(
                                                            index, "doneList"
                                                        )
                                                    }
                                                >
                                                    {' '}
                                                    <Icon size={18} icon={deleteIcon} />
                                                </button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        );
                    })}
                </div> :
                null
        }
        <Modal show={this.state.activeModel}>
            <Modal.Title className="ModalTitle">Update Your List Data</Modal.Title>
            <Modal.Body>
                <Form className="ModalStyle">
                    <Form.Group as={Row} controlId="updateList">
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Type your here"
                            defaultValue={this.state.updateData}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                </Form>
                <Button
                    type="button"
                    onClick={() => this.handleSave()}
                >
                    Update Data
                        </Button>
            </Modal.Body>
        </Modal>
                </div >
            </div >
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

