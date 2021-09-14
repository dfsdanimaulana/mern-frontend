import React, { Component } from 'react'

export default class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: 'dnm17',
                email: 'danimaulana9f@gmail.com',
                password: '123456',
            },
        }
    }
    render() {
        return (
            <form>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='username'
                        value={this.state.user.username}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        value={this.state.user.email}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='password'
                        value={this.state.user.password}
                    />
                </div>
                <div className='mb-3 form-check'>
                    <input
                        type='checkbox'
                        className='form-check-input'
                        id='exampleCheck1'
                    />
                    <label className='form-check-label' htmlFor='exampleCheck1'>
                        Remember me
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Update
                </button>
            </form>
        )
    }
}
