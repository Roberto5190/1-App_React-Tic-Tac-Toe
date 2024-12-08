import "./assets/sass/main.sass";

import Square from "./components/Square";
import OjoAnimation from "./components/OjoAnimation";
import PlanetAnimation from "./components/PlanetaAnimation";
import confetti from "canvas-confetti"

import { useState } from "react";

//Jugadores/Fichas
const turns = {
  X: <PlanetAnimation />,
  O: <OjoAnimation />,
};

// WINNER COMBOS
const winner_combos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
  [0, 4, 8], [2, 4, 6]             // Diagonales
]


const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null)); //creamos un tablero con estado para que se renderize el tablero cada vez que cambie
  const [turn, setTurn] = useState(turns.X); //creamos un estado para el turno y lo inicializamos en X
  const [winner, setWinner] = useState(null) //null = no hay ganador, false = empate

  //COMPROBACIÓN DEL GANADOR
  const checkWinner = (boardToCheck) => {

    // por cada combinación de las combinaciones ganadoras
    for (const combo of winner_combos) {
      
      const [a, b, c] = combo // recuperamos las possiciones [a, b, c]
      if (
        boardToCheck[a] && //comprobamos si en la posición 0 hay una X u O
        boardToCheck[a]  === boardToCheck[b] && //si la posición 0(a) = a la posición 1(b) y
        boardToCheck[a] === boardToCheck[c] //si la posición 0(a) = a la posición 2(c) 
      ) {
        return boardToCheck[a] //devuelve el ganador que es igual a la ficha que haya en esa posición
      }
    }

    //SI NO HAY GANADOR
    return null
  }


  // RESET GAME
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
  }

  // EMPATE
  const checkEndGame = (newBoard) => { //revisamos si hay empate si no hay mas espacios vacíos en el board
    return newBoard.every((square) => square !== null)
  }

  // ACTUALIZACIÓN DEL BOARD
  const updateBoard = (index) => {

    // No actualizamoss esta posición si ya tiene una ficha o hay un ganador
    if (board[index] || winner) return

    // ACTUALIZA EL BOARD
    const newBoard = [...board]; //Crea una copia del estado actual del tablero. Evita modificar directamente el estado original (manteniendo la inmutabilidad)
    newBoard[index] = turn; //Actualiza la copia del tablero (newBoard) en la posición index con el valor del turn actual
    setBoard(newBoard); //Actualiza el estado del tablero con la copia modificada (newBoard). Se renderiza visualmente

    // CAMBIA EL TURNO
    const newTurn = turn === turns.X ? turns.O : turns.X; // si el turno actual es igual a X, el próximo es O. Si es falso el proximo es X
    setTurn(newTurn); //Actualiza el estado del turn

    //REVISAR SI HAY GANADOR
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) //actualizamos el estado del ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  };




  return (
    <main className="board">
      <h1 className="board_tittle">Tic-tac-toe</h1>
      

      {/* BOARD */}
      <section className="game">
        {/* Recorre el estado board utilizando la función map.
        Cada elemento de board representa un square del tablero e  index es la posición de ese cuadrado. */}
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>


      {/* TURNO */}
      <section className="turn">
        {/* Pasamos como prop la clase isSelected que será true cuando el turno coincida con X o O */}
        <Square isSelected={turn === turns.X}>
          {turns.X} {/* Prop Children*/}
        </Square>

        <Square isSelected={turn === turns.O}>
          {turns.O}
        </Square>
      </section>
      
      <button onClick={resetGame}>Empezar de nuevo</button>

      {/* GANADOR */}
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                { winner === false ? 'Empate' : 'Ganó:' }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer> 
                <button onClick={resetGame}>Empezar de nuevo</button>

              </footer>
            </div>
          </section>
        )
      }

    </main>
  );
};

export default App;
