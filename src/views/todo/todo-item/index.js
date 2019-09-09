/**
 * Create by sunshine on 2019/9/4
 */
import React from 'react';

export default class TodoItem extends React.PureComponent{
    render() {
        return (
            <div>

                <h4 style={{ 'whiteSpace': 'normal', 'marginBottom': '3px' }}>{ this.props.subject }</h4>
                <p>
                    <span>{ this.props.sysCode }</span>
                    <span>{ this.props.creator }</span>
                    <time>{ this.props.createTime ? this.props.createTime.slice(5) : ''}</time>
                </p>
            </div>
        )
    }
}