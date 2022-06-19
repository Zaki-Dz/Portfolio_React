import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ text, variant }) => {
	return <SButton className={variant}>{text}</SButton>
}

export default Button

const SButton = styled.button`
	background-color: transparent;
	border: 1px solid #4cb4f6;
	padding: 1rem;
	border-radius: 0.5rem;
	color: #4cb4f6;
	transition: 0.2s;

	&.secondary {
		&:hover {
			background-color: white;
			border-color: white;
			color: #1e1d37;
		}
	}

	&.primary {
		background-color: #4cb4f6;
		color: #1e1d37;

		&:hover {
			background-color: white;
			border-color: white;
		}
	}
`

Button.propTypes = {
	text: PropTypes.string,
	variant: PropTypes.string,
}
