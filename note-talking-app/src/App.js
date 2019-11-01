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
import { connect } from 'react-redux';
import Home from './pages/Home';
import Keep from './pages/Keep';
import Make from './pages/Make';
import List from './pages/List';
import Budget from './pages/Budget';
import Not from './pages/Not'
//下面的用于测试
import Test from './pages/test'
import Case from './pages/case'

const mapStateToProps = ({ home }) => ({

    selected_state: home.selected,
    notelist: home.notelist

});
const mapDispatchToProps = dispatch => {
    return {
        update(payload) {
            // console.log(payload)
            dispatch({ type: 'UPDATE_SELECTED', payload })
        },
        dispatch
    }
}



@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    state = {
        selected: ['/home'],
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
            text: '设置',
            icon: 'setting'
        }, {
            name: 'make',
            path: '/make',
            text: '我的',
            icon: 'user'
        }]
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_DATA_ASYNC' });
    }

    render() {
        let { history, update, selected_state, notelist } = this.props
        console.log(notelist)
        let { menu } = this.state;

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
                    selectedKeys={selected_state}
                    onSelect={({ key }) => {
                        history.push(key)

                    }}
                >
                    {
                        menu.map(item => {
                            return (<Menu.Item key={item.path} onClick={update.bind(this, item.path)}>
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