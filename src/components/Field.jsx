import React, { useEffect } from "react";
import { FieldLayout } from "../Layouts/FieldLayout";
import PropTypes from 'prop-types';

export function Field({field, setField, setIsDraw, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, WIN_PATTERNS}){

	Field.propTypes = {
		field: PropTypes.array,
		currentPlayer: PropTypes.string,
		WIN_PATTERNS: PropTypes.array,
		isGameEnded: PropTypes.bool
	}

	useEffect(()=>{
		if(!field.some((element)=>element==='')){
			setIsDraw(true)
		}
		WIN_PATTERNS.forEach((wins)=>{
			if(wins.every((winPosition)=>field[winPosition]==='X')){
				setCurrentPlayer('X')
				setIsGameEnded(true)
			}
			if(wins.every((winPosition)=>field[winPosition]==='O')){
				setCurrentPlayer('O')
				setIsGameEnded(true)
			}
	})
	},[currentPlayer, isGameEnded, field, WIN_PATTERNS, setCurrentPlayer, setIsGameEnded, setIsDraw])

	function click(i){
		XsAndOs('X', 'O', i) // ход X и переход хода к O
		XsAndOs('O', 'X', i) // ход O и переход хода к X
	}

	function XsAndOs(value, newValue, index){
		if(!isGameEnded){
			if(currentPlayer===value && field[index]!=='O' && field[index]!=='X'){ // Условие
				setField(prev=>{
					prev[index]=value
					return [...prev]
				})
				setCurrentPlayer(newValue) // Изменение массива, и смена игрока
			}
		}
	}

	return(
		<FieldLayout field={field} click={click}/>
	)
}
