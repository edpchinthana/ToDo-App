import React, {Component} from 'react';
import image from '../res/images/logo.png'
class Home extends Component{

    render(){
        return(
            <div className="jumbotron container-fluid col-lg-10 col-sm-12 mt-lg-5 text-center">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={image}></img>
                    </div>
                    <div className="col-lg-8">
                        <h1 className="display-4">Welcome to Todo List</h1>
                        <p className="lead">Register today and manage your tasks with us</p>
                        <hr className="my-4"/>
                        <a className="btn btn-primary btn-lg" href="/loginSignup" role="button">Signup</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;