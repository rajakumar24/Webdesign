import React, { Component } from "react";
import { Form, Row, Col, Button, ListGroup, Card, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ic_delete as deleteIcon } from 'react-icons-kit/md/ic_delete';
import { pencil as editIcon } from 'react-icons-kit/icomoon/pencil';
import { Icon } from 'react-icons-kit';
import * as actions from "../../action/index";
import './TodoList.css';

function mapDispatchToProps(dispatch) {
    return {
        addListItem: listItem => dispatch(actions.addListItem(listItem)),
        updateListItem: updateditem =>
            dispatch(actions.updateListItem(updateditem)),
        deleteListItem: id => dispatch(actions.deleteListItem(id))
    };
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};


class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            addedItem: '',
            activeModel: false,
            updateData: '',
            currentId: 0,
            totalListData: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { id, value } = event.target;
        if (id === 'addList') {
            this.setState({
                addedItem: value
            })
        }
        if (id === 'updateList') {
            this.setState({
                updateData: value
            })
        }
    }

    addItemValue() {
        let data = this.state.addedItem;
        let listItemObject = {
            data,
            status: "success"
        };
        this.props.addListItem(listItemObject);
        this.setState({
            addedItem: '',
            totalListData: this.props.todos
        })
    }

    handleOpenModal(listData, index) {
        this.setState({
            activeModel: true,
            updateData: listData.data,
            currentId: index
        })
    }

    handleSave() {
        const data = this.state.updateData;
        const id = this.state.currentId
        const updateditem = {
            id,
            data
        };
        this.props.updateListItem(updateditem);
        this.setState({
            activeModel: false
        })
    }

    handleDeleteList(deleteId) {
        this.props.deleteListItem(deleteId);
        this.setState({
            totalListData: this.props.todos
        })
    }

    render() {
        return (
            <div className="component">
                <div>
                    <Form>
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
                        </Form.Group>
                    </Form>
                </div>
                {
                    this.state.totalListData.length ?
                        <div >
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
                                                            onClick={() => this.handleOpenModal(todoList, index)}
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
                                                                    index
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
                        <h3>Please Add Some Data For List</h3>
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

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

