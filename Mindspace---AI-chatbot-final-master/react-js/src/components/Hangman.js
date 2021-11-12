import React, { Component } from 'react';
import { randomWord } from './words';
import classes from './Hangman.module.css';
import img0 from '../assets/0.jpg';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import './plainpages.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Hangman extends Component {
    //Allow 6 Guesses head,body,arm,arm,leg,leg
    static defaultProps = {
      maxWrongPossible: 6,
      images: [img0, img1, img2, img3, img4, img5, img6]
    };
  
    constructor(props) {
      super(props);
      this.state = { noWrong: 0, guessed: new Set(), answer: randomWord() };
      this.handleGuess = this.handleGuess.bind(this);
    }
  
    reset = () => {
      this.setState({ noWrong: 0, guessed: new Set(), answer: randomWord() });
    };
  
    // get the buttons to press to make guesses
    generateButtons() {
      return 'abcdefghijklmnopqrstuvwxyz'.split('').map(ltr => (
        <button
          key={ltr}
          value={ltr}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(ltr)}>
          {ltr}
        </button>
      ));
    }
  
   //show current-state of word:
    guessedWord() {
      return this.state.answer
        .split('')
        .map(ltr => (this.state.guessed.has(ltr) ? ltr : '_'));
    }

 

   
  
  //function for guesses
    handleGuess(evt) {
      let ltr = evt.target.value;
      this.setState(st => ({
        guessed: st.guessed.add(ltr),
        noWrong: st.noWrong + (st.answer.includes(ltr) ? 0 : 1)
      }));
    }

   
  
    render() {

        
        let linkUrl ='https://google.com/search?q=';
        let wordUrl = ' emotion';

      const gameOver = this.state.noWrong >= this.props.maxWrongPossible;
      const isWinner = this.guessedWord().join('') === this.state.answer;
      const altText = `${this.state.noWrong}/${this.props.maxWrongPossible}`;
      let gameState = this.generateButtons();
      if (isWinner) gameState = 'You Have Guessed It!';
      if (gameOver) gameState = 'You Did Not Guess It!';

        let showHref;
      if(gameOver) showHref  = <a href={linkUrl + this.state.answer + wordUrl} target="_blank">Click Me To Find Out More About The Emotion!</a>
      if(isWinner) showHref  = <a href={linkUrl + this.state.answer + wordUrl} target="_blank">Click Me To Find Out More About The Emotion!</a>
    
     
      return (


      
<div>

<div className="AllPages">
                <table>
                    <tr>
                        <td><NavLink to="/gameword"><Button variant="info" type="button">Word search</Button></NavLink></td>
                        <td><NavLink to="/gamelight"><Button variant="info" type="button">Lights off</Button></NavLink></td>
                          <td><NavLink to="/Hangman"><Button variant="info" type="button">Guess the emotion</Button></NavLink></td>
                        
                    </tr>
                </table>
            </div>
        <div className="header">
        <h3>Guess the Emotions!</h3>
                          <p className="gameDesc"> There are more emotions a person could feel
                          <br/>
                          other than happiness, sadness and anger.
                          <br/>
                          Learn more types of emotions by what they could 
                          <br/>
                          be and learn about them afterwards!
                          <br/><br/>
                          <b>Rules:</b> You have up to 6 tries.
                          </p>
        </div>
       
  
 
  
        <div className={classes.Hangman}>
          <p>
            {this.state.noWrong === 0
              ? 'No Incorrect Guess Yet'
              : `Incorrect guesses: ${this.state.noWrong}`}
          </p>
          <p className={classes.Hangman_word}>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p className={classes.Hangman_btns}>{gameState}</p>
          <button id={classes.reset} onClick={this.reset}>
            Restart?
          </button>
          <br/>
              
         {showHref}
        </div>
        </div>
        
      
        
      );
    }
  }
  
  export default Hangman;
  