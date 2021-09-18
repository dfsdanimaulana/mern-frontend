import axios from 'axios'
import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                username: '',
                email: '',
                password: '',
            },
        }
    }

    handleChange = (event) => {
        let newData = { ...this.state.data }
        newData[event.target.name] = event.target.value
        this.setState({
            data: newData,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post(
                'https://dan-reactbasic-api.herokuapp.com/user/add',
                this.state.data
            )
            .then((res) => {
                alert('Data berhasil di tambah.')
            })
            .catch((err) => {
                console.log(err)
                alert('Data gagal di tambah.')
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='username'
                        name='username'
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
