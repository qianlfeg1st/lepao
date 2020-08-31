import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'

// 引入路由
import FrontendAuth from './../page/FrontendAuth/'
import NotFound from './../page/notFound/'
import Login from './../page/login/'

// 定义routes
const routerConfig = [
  {
    path: '/',
    component: Login,
    children: <Login />,
    auth: false,
    title: '登录',
  },
  {
    path: '/login',
    component: Login,
    children: <Login />,
    auth: false,
    title: '登录',
  },
  {
    path: '/404',
    component: NotFound,
    children: <NotFound />,
    auth: false,
    title: '未找到页面',
  },
]

export const RouteConfigContext = React.createContext()

function BasicRoute () {

  return (
    <>
      <RouteConfigContext.Provider value={ routerConfig }>
        <Router>
          <Switch>
            <FrontendAuth />
          </Switch>
        </Router>
      </RouteConfigContext.Provider>
    </>
  )
}

export default BasicRoute
