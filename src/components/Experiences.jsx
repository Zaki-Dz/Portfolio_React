import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Experience from './Experience'

const Experiences = ({ title, data }) => {
	return (
		<SExperiences>
			<div className="title">{title}</div>

			<div className="experiences">
				{data.map((item, i) => {
					return (
						<Experience
							key={i}
							text={item.title}
							experience={item.experience}
						/>
					)
				})}
			</div>
		</SExperiences>
	)
}

export default Experiences

const SExperiences = styled.div`
	flex: 1;
	background-color: #337;
	padding: 2rem;
	border-radius: 2rem;

	.title {
		color: #4db5ff;
		margin-bottom: 2rem;
		text-align: center;
		font-size: 1.2rem;
	}

	.experiences {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
	}
`

Experiences.propTypes = {
	title: PropTypes.string,
	data: PropTypes.any,
}
