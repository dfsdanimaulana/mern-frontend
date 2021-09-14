import React, { Component } from 'react'

export default class AddUser extends Component {
   
    render() {
        return (
            <form action='http://localhost:3003/user/add' method='POST'>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='username'
                        name='username'
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
                        name='email'
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
                        name='password'
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
                    Submit
                </button>
            </form>
        )
    }
}
