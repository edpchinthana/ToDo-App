import React, {Component} from 'react';

class SingleToDo extends Component{

    render(){
        return(
            <li className="list-group-item">
                <input type="checkbox"  onClick={this.props.action} className="mr-5"></input>
                 {this.props.todo}
                </li>
        )
    }
}
export default SingleToDo