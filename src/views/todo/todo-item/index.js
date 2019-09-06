/**
 * Create by sunshine on 2019/9/4
 */
import React from 'react';
import { WingBlank, WhiteSpace, Card } from 'antd-mobile';

export default class TodoItem extends React.PureComponent{
    render() {
        return (
            <Card>
                <Card.Header
                    title={ this.props.subject }/>
                {/*<Card.Body>*/}
                {/*    <div>{ this.props.subject }</div>*/}
                {/*</Card.Body>*/}
                <Card.Footer
                    content={ this.props.creator }
                    extra={ this.props.createTime ? this.props.createTime.slice(5) : ''}/>
            </Card>
        )
    }
}