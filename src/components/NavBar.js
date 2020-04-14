import React, {Component} from 'react';
import image from '../res/images/logo.png';
import NavBarItems from './NavBarItems';

const navItems = [
    {name : "Home",link:"/"},
    {name:"Login", link:"/loginSignup"},
    {name : "About",link:"/about"},
    {name: "ToDoList", link:"/ToDoList"}
]

class NavBar extends Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src={image} width="40" height="40" className="d-inline-block align-top ml-5" alt=""></img>
                <a className="navbar-brand ml-2" href="#">Todo List</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav">
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