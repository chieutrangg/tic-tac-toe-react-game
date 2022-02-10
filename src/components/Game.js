import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    return (
        <div>
          <h1>React Tic Tac Toe </h1>
          
          </div>
       
      );
    };
    
    export default Game;