import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export class Editstudent extends Component {

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

async componentDidMount(){
    const stud_id=this.props.match.params.id;
    // console.log(stud_id);
    // const res =await axios.get(`http://localhost:8000/api/edit-student/${stud_id}`);
    const res =await axios.get(`http://localhost:8000/api/edit-student/${stud_id}`);
    if(res.data.status===200)
    {
        this.setState({
            name:res.data.student.name,
            course:res.data.student.course,
            email:res.data.student.email,
            phone:res.data.student.phone,
        });
    }
}

updateStudent =async (e) =>{
    e.preventDefault();
    document.getElementById('updatebtn').disabled=true;
    document.getElementById('updatebtn').innerText="Updating";

    const stud_id=this.props.match.params.id;

    const res =await axios.put(`http://localhost:8000/api/update-student/${stud_id}`,this.state);
    if(res.data.status === 200)
    {
        console.log(res.data.message);
        document.getElementById('updatebtn').disabled=false;
        document.getElementById('updatebtn').innerText="Update Student";
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
                                <h4>Edit Students</h4>
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateStudent}>
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
                                        <button id="updatebtn" type='submit' className='btn btn-primary'>Update Student</button>
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

export default Editstudent
