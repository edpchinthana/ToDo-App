import React, {Component} from 'react';

class NavBarItem extends Component{
    render(){
        return(
            <li className="nav-item active">
                <a className="nav-link" href={this.props.link}>{this.props.name}<span className="sr-only">(current)</span></a>
            </li>
        )
    }
}
export default NavBarItem;