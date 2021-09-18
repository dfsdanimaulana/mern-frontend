import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar shadow-sm navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        Navbar
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarNavAltMarkup'>
                        <div className='navbar-nav'>
                            <Link className='nav-link active' to='/'>
                                Show User
                            </Link>
                            <Link className='nav-link' to='/add'>
                                Add User
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
