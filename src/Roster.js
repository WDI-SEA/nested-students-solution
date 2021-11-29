import React, { Component } from 'react';
import Student from './Student'

class Roster extends Component {
    render(){
        let allStudents = this.props.students.map(s=>{
            return <Student student={s}/>
        })
        return(
            <div>
                {allStudents}
            </div>
        )
    }
}

export default Roster