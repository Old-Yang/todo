/**
 * Create by sunshine on 2019/9/4
 */
import React from 'react';
import { Tabs, Badge} from 'antd-mobile';
import './home.scss';
import Request from '@views/todo/request';

const tabs = [
    { title: <Badge>待办</Badge> },
    { title: <Badge>发起</Badge> },
    { title: <Badge>已办</Badge> },
];
export default class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarPosition="bottom"
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
                    <div>
                        <Request/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
            </div>
        )
    }
}