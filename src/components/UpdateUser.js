import axios from 'axios'
import React, { Component } from 'react'

export default class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: '',
                email: '',
                password: '',
            },
        }
    }

    getUser = () => {
        const id = window.location.href.split('/')[4]
        axios.get(`http://localhost:3003/user/${id}`).then((res) => {
            if (res.data._id) {
                this.setState({
                    user: res.data,
                })
            }
        })
    }

    handleChange = (event) => {
        let newUser = { ...this.state.user }
        newUser[event.target.name] = event.target.value

        this.setState({
            user: newUser,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.put('http://localhost:3003/user', this.state.user).then((res) => {
            window.location.href = '/'
        })
    }

    componentDidMount = () => {
        this.getUser()
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
                        value={this.state.user.username}
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
                        value={this.state.user.email}
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
                        value={this.state.user.password}
                        onChange={this.handleChange}
                    />
                </div>

                <button type='submit' className='btn btn-primary'>
                    Update
                </button>
            </form>
        )
    }
}
