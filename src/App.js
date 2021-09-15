import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Navbar from './components/Navbar'
import ShowUser from './components/ShowUser'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <br />
                <div className='container'>
                    <Route path='/' exact component={ShowUser} />
                    <Route path='/add' component={AddUser} />
                    <Route path='/update' component={UpdateUser} />
                </div>
            </Router>
        )
    }
}
