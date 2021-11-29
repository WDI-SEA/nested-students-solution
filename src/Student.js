import React, { Component } from 'react';
import Score from './Score'

class Student extends Component {
    render(){
        let scores = this.props.student.scores.map(s=>{
            return <Score score={s}/>
        })
        return(
            <div>
                <h3>{this.props.student.name}</h3>
                <p>{this.props.student.bio}</p>
                {scores}
            </div>
        )
    }
}

export default Student