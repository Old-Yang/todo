/**
 * Create by sunshine on 2019/9/4
 */
import React from 'react';
import { List } from 'antd-mobile';
import TodoItem from '../todo-item';
import { todo }  from '@http/todo';


const Item = List.Item;
const Brief = Item.Brief;

export default class Request extends React.Component{
    componentDidMount() {
        console.log(localStorage.getItem('token'));
        todo('oa/commonProcess/commonProcess/v1/bpmInstanceList/TODO', {
            'pageBean': {'page': 1, 'pageSize': 10}
        }).then( res => {
            console.log(res);
        })
    }
    render() {
        return (
             <List className="my-list">
                <Item arrow="horizontal" multipleLine onClick={() => {}}>
                  <TodoItem/>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={() => {}}>
                  <TodoItem/>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={() => {}}>
                  <TodoItem/>
                </Item>
              </List>
        )
    }
}