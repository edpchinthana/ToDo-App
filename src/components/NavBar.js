import React, {Component} from 'react';

const navItems = {navBarItems:[
    {name : "Home",link:"#"},
    {name : "About",link:"#"},
    {name : "Contact",link:"#"}
]}
class NavBar extends Component{
    
    render(){
        return(
            <div className="navbar-brand bg-light">
                Hello Im here 
            </div>
        )
    }
}

export default NavBar;