

import React,{Component} from 'react'


export class Counter extends Component{

    //first life cycle
    constructor(props){
        super(props)
        this.state={
            count:2
        }
        this.onIncrement= this.onIncrement.bind(this)
    }

    onIncrement(){
        console.log(this.state)
        this.setState({
            ...this.state,count:this.state.count+1
        })
    }
    onDecerement(arg1){
        this.setState({
            ...this.state,count:this.state.count-1
        })

        console.log(arg1)
    }
    //second life cycle

    // static getDerivedStateFromProps()

    //3rd 

    //render()

    //4th
    //componentDidMount

    componentDidMount(){
        console.log('run when the html get render first time ')
    }



    //second life cycle
    componentDidUpdate(prev,curr){

        console.log('prev',prev);
        console.log('curr',curr);
        console.log('run when the state get updated ');
        if(prev?.count!==curr?.count){
            console.log('count state get updated')
        }
    }
    // getDerivedStateFromProps;
    // shouldComponentUpdate // pure component concept
    //render
    //getSnapshotBeforeUpdate()
    //componentDidUpdate


    componentWillUnmount(){
        //do some cleanup job 
        //remove all event listiner if we attached manually
        console.log('run when the component get unmount ')
    }
    render(){
        return (
            <div>
            <h1 style={{color:this.props.color}}> {this.state.count}</h1>
            <button  onClick={this.onIncrement} >increment</button>
            <button  onClick={this.onDecerement.bind(this,'shanu')} >decrement</button>
        </div>
        )
    }
}
