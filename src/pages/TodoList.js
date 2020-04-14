import React, {Component} from 'react';
import SingleToDo from '../components/SingleToDo'

let todoArray;
class ToDoList extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            username : props.username,
            hasToBeDone:0,
            todos:[]
        }
        this.state.hasToBeDone = this.state.todos.length
    }
    componentWillMount(props,state){

    }

    componentDidMount(props,state){

    }

    componentWillReceiveProps(props){

    }

    componentWillUpdate(props,state){

    }
    componentDidUpdate(props,state){
  
    }
    addTodo = () =>{
        
        let newTodo = document.getElementById("input1").value
        let a = {todo:newTodo}
        this.state.todos.push(a)
        console.log('added')
        this.setState({hasToBeDone:this.state.todos.length})
    }
    deleteTodo = (todo) =>{
        console.log(todo.todo)
        this.setState({todos:this.state.todos.filter((store)=>{return (store!==todo)})})
        this.setState({hasToBeDone:this.state.hasToBeDone-1})
    }
    render(){
        let {count} = this.state;
        

        return(
            <div className="jumbotron container-fluid mt-3 col-lg-10">
                <div>
                    <h2>{this.state.username}'s todo list</h2>
                    <div className="card-body">
                        <p className="card-text">Remaining tasks : {this.state.hasToBeDone} </p>
                    </div>
                    <ul className="list-group col-lg-8 container-fluid">
                        <li className="list-group-item">
                            <div className="row">
                            <input id="input1" className="form-control col-lg-10" placeholder="Enter new todo items"></input>
                            <hr className="mx-4"/>
                            <button type="submit" className="btn btn-primary col-lg-1" onClick={(e) => this.addTodo()}>Add</button>
                            </div>
                        </li>
                        {this.state.todos.map((todo, index)=>{
                                return <SingleToDo  {...todo} action={()=>this.deleteTodo(todo)} key ={index} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoList;