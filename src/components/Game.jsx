import React, { useState } from "react";
import { GameLayout } from "../Layouts/GameLayout";

export function Game(){
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState([
		'','','',
		'','','',
		'','','',
	])
	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	  ];

	  function restart(){
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(['','','','','','','','','',])
	  }

	return(
		<GameLayout
		 currentPlayer={currentPlayer}
		 setCurrentPlayer={setCurrentPlayer}
		 isGameEnded={isGameEnded}
		 isDraw={isDraw}
		 field={field}
		 setIsGameEnded={setIsGameEnded}
		 setIsDraw={setIsDraw}
		 setField={setField}
		 WIN_PATTERNS={WIN_PATTERNS}
		 restart={restart}
		 />
	)
}
