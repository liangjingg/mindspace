import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import General from './components/General';
import Positive from './components/PositiveAffirmation';
import Meditation from './components/Meditation';
import Breathing from './components/Breathing';
import Park from './components/park';
import GameWord from './components/gameword';
import Chatbot from './components/Chatbot';
import GameLight from './components/gamelight';
import Hangman  from './components/Hangman'
import Down from './components/Down';
import Overwhelmed from './components/Overwhelmed';
import Stressed from './components/Stressed';
import General2 from './components/general2';
import bot from './assets/bot.png';
import Profile from './components/Profile';
import Facial from './components/facial';
// import classes from './appClass.module.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: false, currentPath:window.location.pathname}

   window.onbeforeunload = function(e) {
      this.setState({currentPath:window.location.pathname})
   };
  }

  handleAuth = () => {

    // let history = useHistory();
    
    this.setState({loggedIn: true});
    // return <Redirect to="/general2" />
    window.location = '/general2';
    // history.push('/general2');
  }
  handleRegister = () => {
    window.location = '/sign-in';
  }

  render() {
  return (
    <Router>
    <div className="App"> 

         <Navbar style={{ marginBottom: '10' }} bg="light " variant="light ">
            <Navbar.Brand href="/general2"><img src={bot} style={{ height: "45px", width: "40px" }}/>  MindSpace</Navbar.Brand>
            <Container style={{ justifyContent: "flex-end" }}>
              {/* {!this.state.loggedIn && <Nav>
                  <Nav.Link href="/sign-in">Login</Nav.Link>
                  <Nav.Link href="/sign-up">Register</Nav.Link>
              </Nav>} */}
              {!this.state.loggedIn && <Nav>
                  <Nav.Link href="/general2">Home</Nav.Link>
                  <Nav.Link href="/chatbot">Chatbot</Nav.Link>
                  <Nav.Link href="/facial">Emotion Detection</Nav.Link>
                  <Nav.Link href="/meditation">Meditation</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav>}                
            </Container>
         </Navbar>

          <Switch>
            <Route exact path='/' component={() => <Login isAuthed={this.handleAuth} />} />
            <Route path="/sign-in" component={() => <Login isAuthed={this.handleAuth} />} />
            <Route path="/sign-up" component={() => <Register isRegister={this.handleRegister} />} />
            <Route path="/home" component={Home}  />
            <Route path="/general" component={General} />
            <Route path="/positive" component={Positive} />
            <Route path="/meditation" component={Meditation} />
            <Route path="/breathing" component={Breathing} />
            <Route path="/gameword" component={GameWord} />
            <Route path="/park" component={Park} />
            <Route path="/chatbot" component={Chatbot} />
            <Route path="/gamelight" component={GameLight} />
            <Route path="/Hangman" component={Hangman} />
            <Route path="/down" component={Down} />
            <Route path="/stressed" component={Stressed} />
            <Route path="/overwhelmed" component={Overwhelmed} />
            <Route path="/general2" component={General2} exact />
            <Route path="/profile" component={Profile}  />
            <Route path="/facial" component={Facial}  />
          </Switch>
    </div>
    </Router>
  );}
}

export default App;