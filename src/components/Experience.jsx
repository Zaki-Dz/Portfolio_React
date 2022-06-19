import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdGppGood } from 'react-icons/md'

const Experience = ({ text, experience }) => {
	return (
		<SExperience>
			<div className="icon">
				<MdGppGood />
			</div>

			<div className="text">
				<p>{text}</p>

				<span>{experience}</span>
			</div>
		</SExperience>
	)
}

export default Experience

const SExperience = styled.div`
	display: flex;
	gap: 1rem;

	.icon {
		color: #4cb4f6;
	}

	.text {
		display: flex;
		flex-direction: column;
		align-items: start !important;

		span {
			font-size: 0.8rem;
		}
	}
`

Experience.propTypes = {
	text: PropTypes.string,
	experience: PropTypes.any,
}
