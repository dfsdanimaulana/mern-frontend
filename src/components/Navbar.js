import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar shadow-sm navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'>
                        Navbar
                    </a>
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
                            <a
                                className='nav-link active'
                                aria-current='page'
                                href='/'>
                                Show User
                            </a>
                            <a className='nav-link' href='/add'>
                                Add User
                            </a>
                            <a className='nav-link' href='/update'>
                                Update User
                            </a>
                            <a className='nav-link' href='/delete'>
                                Delete User
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
