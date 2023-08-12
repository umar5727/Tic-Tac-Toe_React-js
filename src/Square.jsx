// import Board from "./Board";


export default function Square({value, onSquareClick}) {
 

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
