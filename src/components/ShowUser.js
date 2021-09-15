import React, { Component } from 'react'
import axios from 'axios'

export default class ShowUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
        }
    }

    getDataApi = () => {
        axios.get('http://localhost:3003/user').then((res) => {
            this.setState({
                users: res.data,
            })
        })
    }

    deleteUser = (id) => {
        axios.get(`http://localhost:3003/user/${id}`).then((res) => {
            console.log(res.data)
            this.getDataApi()
        })
    }

    componentDidMount = () => {
        this.getDataApi()
    }

    render() {
        return (
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>No</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, index) => (
                        <tr key={user._id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <button
                                    className='btn btn-sm btn-info'
                                    onClick={() => this.deleteUser(user._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
