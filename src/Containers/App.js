import React, {Component} from 'react';
import CardList from    '../Components/CardList';

import  SearachBox from '../Components/SearachBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';



class  App  extends Component  {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchFlied : '',
        }
    }

      onSearchChange =  (event) =>{
        //console.log(event.target.value);
        this.setState({searchFlied: event.target.value});
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(users => this.setState({robots: users}))
    }
    // this.setState({robots: users})
    
    render(){
        const {searchFlied,robots} = this.state;

        const filtredRobots = robots.filter(robot => {
            return   robot.name.toLowerCase().includes(searchFlied.toLowerCase());
          });
          //console.log(filtredRobots);

        //   if(robots.length === 0) {
        if(!robots.length ) {
              return( <h1>Loading</h1>);
         }
        else {
            return (

                <div className="tc">
                    <h1 className="f1">Robot Freinds</h1>
                    <SearachBox  searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filtredRobots }  /> 
                        </ErrorBoundry>
                    </Scroll>
                
               </div>
            );
        }
       

    }

          
    

}

export default App;
