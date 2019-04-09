import React, { Component } from 'react';
import HelloWorld from './HelloWorld'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import WebDev from './WebDev'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state;

    if(loading){
      return(
        <main>
          <h3>Loading...</h3>
        </main>
      )
    }

    return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/webdev' exact component={WebDev}></Route>
          <Route path='/projects' exact component={Projects}></Route>
          <Route path='/github' component={ () => { window.location = 'https://github.com/LeoBotti'; return null} }></Route>
          <Route path='/linkedin' component={ () => { window.location = 'https://linkedin.com/in/nicholas-a-chan'; return null} }></Route>
          <Route path='/feeder' component={ () => { window.location = 'https://github.com/LeoBotti/FEEDER'; return null } }></Route>
          <Route path='/quizzbuzz/git' component={ () => { window.location = 'https://github.com/chrischu5/Team_Salmon'; return null} }/>
          <Route path='/quizzbuzz/heroku' component={ () => { window.location = 'https://quizzbuzzsalmon.herokuapp.com/'; return null } }/>
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}

export default App;
