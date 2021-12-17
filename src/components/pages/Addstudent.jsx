import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Addstudent extends Component {

    state={
        name:'',
        email:'',
        course:'',
        phone:'',
    }
handleInput = (e) => {
    this.setState({
        [e.target.name]:e.target.value,
        // [e.target.email]:e.target.value,
        // [e.target.course]:e.target.value,
        // [e.target.phone]:e.target.value,
    });
}
saveStudent =async (e) =>{
    e.preventDefault();

    const res =await axios.post('http://localhost:8000/api/add-student',this.state);
    if(res.data.status === 200)
    {
        this.setState({
            name:'',
            email:'',
            course:'',
            phone:'',
        });
    }
}

    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Students</h4>
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveStudent}>
                                <div className="form-group mb-3">
                                    <label>Student Name</label>
                                    <input type="text" onChange={this.handleInput} name="name" value={this.state.name} className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Course</label>
                                    <input type="text" onChange={this.handleInput} name="course" value={this.state.course} className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="email" onChange={this.handleInput} name="email" value={this.state.email} className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Phone</label>
                                    <input type="text" onChange={this.handleInput} name="phone" value={this.state.phone} className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                        <button type='submit' className='btn btn-primary'>Save Student</button>
                                </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Addstudent
