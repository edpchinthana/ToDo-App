import React, {Component} from 'react';

class NavBarItems extends Component{
    render(){
        return(
            <li className="nav-item active">
                <a className="nav-link ml-5" href={this.props.link}>{this.props.name}<span className="sr-only">(current)</span></a>
            </li>
        )
    }
}
export default NavBarItems;