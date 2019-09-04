/**
 * Create by sunshine on 2019/9/4
 */
import React from 'react';
import { List } from 'antd-mobile';
import TodoItem from '../todo-item';
const Item = List.Item;
const Brief = Item.Brief;
export default class Request extends React.Component{
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