import React, {Component} from "react";
import { Button } from 'react-bootstrap';
import './plainpages.css';
import { NavLink } from 'react-router-dom';
import Cell from "./Cell";
import './Board.css';
import './plainpages.css';


//chrome do not support opening webgl straight, hence it has to be from a local host
//step 1: open unity -> build & run
//step 2: wait for it to host on local host
//step 3: open the page

/*
const gameword = () => {
    return (
        <html>
            <div className="AllPages">
                <table>
                    <tr>
                        <td><NavLink to="/gameword"><Button variant="info" type="button">Word search</Button></NavLink></td>
                        <td><NavLink to="/gamelight"><Button variant="info" type="button">Lights off</Button></NavLink></td>
                        
                    </tr>
                </table>
                
            </div>
        </html>
    );
} */

export default class Board extends Component {

    static defaultProps = {
      nrows : 5,
      ncols : 5,
      probCellLit: 0.25
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        allCellsOff: false,
        board: this.createBoard()
      }
    }

    
  
  
    createBoard() {
      let board = [];
     
      //create the rows and columns in the board.
      for(let y=0; y<this.props.nrows; y++){
        let row = [];
        for(let x = 0; x < this.props.ncols; x++){
          row.push(Math.random() < this.props.probCellLit) // gives you a value between zero and 1 and check if its lower than the probability 0.25
        }
        board.push(row);
      }
  
      return board
    }
  
  //flips the cells and check if all the cells are not lit to check if they win
    flipCellsAround(coord) {
      //check if it flips
     // console.log('flipping!', coord);
      let {ncols, nrows} = this.props;
      let board = this.state.board;
      let [y, x] = coord.split("-").map(Number);
  
  
      function flipCell(y, x) {
        // if this coord is actually on board valid, flip it
          
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          board[y][x] = !board[y][x];
        }
      }
  
      //since the game flips the adjacent cells
      flipCell(y,x)
      flipCell(y,x-1);
      flipCell(y,x+1);
      flipCell(y-1,x)
      flipCell(y+1,x)
  
  
      let allCellsOff = board.every(row=>row.every(cell=>!cell));
  
      this.setState({ board: board, allCellsOff: allCellsOff})
      
  
     
    }
  
  
    /** Render game board or winning message. */
  
    render() {
  
      
  
      if(this.state.allCellsOff){
        return alert("You turned it all off!!");
      }
  
  
      let tblBoard = [];
  
      for(let y = 0; y < this.props.nrows; y++){
        let row = [];
        for(let x = 0; x < this.props.ncols; x++){
          let coord= `${y}-${x}`;
          row.push(
          <Cell key={coord} isLit={this.state.board[y][x]}
          flipCellsAroundMe={() => this.flipCellsAround(coord)}
          
          />);
        }
  
      tblBoard.push(<tr key={y}>{row}</tr>);
      }
  
      return(
  
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
  <h3>Lights Off</h3>
                    <p className="gameDesc"> Click a cell and it will toggle it and its adjacent cell.
                    <br></br>
                    The goal is to turn all the blue cells into grey cells
                    <br></br>
                    just like how you can turn your negative emotions into positive emotions.
                    </p>
                    <br/>

 
  </div>
        <table className="Board">
          <tbody>
  
          {tblBoard}
  
          </tbody>
  
  
  
  
        </table>
  
        </div>
      );
     
  
    }
  }
  

