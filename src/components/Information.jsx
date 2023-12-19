import React from "react";
import { InformationLayout } from "../Layouts/InformationLayout";
import PropTypes from 'prop-types';


export function Information({isDraw, isGameEnded, currentPlayer, restart}, children){

	Information.propTypes = {
		isDraw: PropTypes.bool,
		isGameEnded: PropTypes.bool,
		currentPlayer: PropTypes.string,
		children: PropTypes.string,
		restart: PropTypes.func
	}

	if(isDraw){
		children = 'Ничья'
	}
	else{
		if(isGameEnded){
			children = `Победа: ${currentPlayer}`
		}
		else{
			children = `Ходит: ${currentPlayer}`
		}
	}
	return(
		<InformationLayout children={children} restart={restart}/>
	)
}
