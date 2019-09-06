/**
 * Create by sunshine on 2019/9/4
 */
import React from 'react';
import { List } from 'antd-mobile';
import TodoItem from '../todo-item';
import { todo }  from '@http/todo';


const Item = List.Item;
export default class Request extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
    }
    componentDidMount() {
        console.log(localStorage.getItem('token'));
        todo('oa/commonProcess/commonProcess/v1/bpmInstanceList/TODO', {
            'pageBean': {'page': 1, 'pageSize': 10}
        }).then( res => {
            this.todoList = res.rows;
            if (res.rows) {
                this.setState({
                    todoList: res.rows
                })
            }
        })
    }
    render() {
        return (
             <List className="my-list">
                 {
                     this.state.todoList.map( (val) => {
                         return (
                            <Item
                                arrow="horizontal"
                                multipleLine onClick={() => {}}
                                key={ val.id }>
                                <TodoItem
                                    subject={ val.subject }
                                    creator={ val.creator }
                                    createTime={ val.createTime }
                                    sysCode = { val.sysCode }/>
                            </Item>
                         )
                     })
                 }
              </List>
        )
    }
}