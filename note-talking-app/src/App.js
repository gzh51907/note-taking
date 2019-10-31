import React, { Component } from 'react';
import './css/maincss.css'
import {
    HashRouter,
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link,
    NavLink,
    withRouter
} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Home from './pages/Home';
import Keep from './pages/Keep';
import Make from './pages/Make';
import List from './pages/List';
import Budget from './pages/Budget';
import Not from './pages/Not'
//下面的用于测试
import Test from './pages/test'
import Case from './pages/case'

@withRouter

class App extends Component {
    state = {
        menu: [{
            name: 'home',
            path: '/home',
            text: '账户',
            icon: 'home'
        }, {
            name: 'list',
            path: '/list',
            text: '流水',
            icon: 'shopping-cart'
        }, {
            name: 'keep',
            path: '/keep',
            text: '记一笔',
            icon: 'edit'
        }, {
            name: 'budget',
            path: '/budget',
            text: '预算',
            icon: 'login'
        }, {
            name: 'make',
            path: '/make',
            text: '设置',
            icon: 'login'
        }]
    }

    componentDidMount() {
        let { location: { pathname } } = this.props;
        this.setState({
            selected: [pathname]
        })
    }

    render() {
        let { history } = this.props
        let { selected, menu } = this.state;

        return (
            <div>
                <Switch>
                    <Redirect from="/" to="/home" exact></Redirect>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/list" component={List}></Route>
                    <Route path="/budget" component={Budget} className="budgets"></Route>
                    <Route path="/make" component={Make}></Route>
                    <Route path="/keep" component={Keep}></Route>
					<Route path="/test" component={Test}></Route>
					<Route path="/case" component={Case}></Route>
                    <Route path="/" component={Not}></Route>
                </Switch>
                <Menu
                    className="menuitemss"
                    mode="horizontal"
                    onSelect={({ key }) => {
                        history.push(key)
                    }}
                >
                    {
                        menu.map(item => {
                            return (<Menu.Item key={item.path} className={item.path==='/keep'?'highlight':''}>
                                <Icon type={item.icon} />
                                <span>{item.text}</span>
                            </Menu.Item>)
                        })
                    }
                </Menu>
            </div >
        )
    }


}
export default App;