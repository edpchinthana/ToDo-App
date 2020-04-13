import React, {Component} from 'react';

import NavBarItems from './NavBarItems';

const navItems = [
    {name : "Home",link:"#"},
    {name : "About",link:"#"},
    {name : "Contact",link:"#"}
]
class NavBar extends Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" dataToggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" ariaLabel="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            navItems.map((navBarItem, index)=>{
                                return <NavBarItems {...navBarItem} key ={index}/>
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;